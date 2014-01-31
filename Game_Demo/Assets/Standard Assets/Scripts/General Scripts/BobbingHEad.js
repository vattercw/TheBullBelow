private var timer = 0.0; 
 var bobbingSpeed = 0.18; 
 var bobbingAmount = 0.2; 
 var midpoint = 2.0; 
 var player : GameObject;
 
 function Update () { 
    waveslice = 0.0; 
    horizontal = Input.GetAxis("Horizontal"); 
    vertical = Input.GetAxis("Vertical"); 
    if (Mathf.Abs(horizontal) == 0 && Mathf.Abs(vertical) == 0) { 
       timer = 0.0; 
    } 
    else { 
       waveslice = Mathf.Sin(timer); 
       if(player.GetComponent(Movement).getspeedMult() == 2){
       		bobMult = 1.5;
       }else{
       		bobMult = 1;
       }
       timer = timer + bobbingSpeed*bobMult; 
       if (timer > Mathf.PI * 2) { 
          timer = timer - (Mathf.PI * 2); 
       } 
    } 
    if (waveslice != 0) { 
       translateChange = waveslice * bobbingAmount * Time.timeScale; 
       totalAxes = Mathf.Abs(horizontal) + Mathf.Abs(vertical); 
       totalAxes = Mathf.Clamp (totalAxes, 0.0, 1.0); 
       translateChange = totalAxes * translateChange * Time.timeScale; 
       transform.localPosition.y = midpoint + translateChange; 
    } 
    else { 
       transform.localPosition.y = midpoint; 
    } 
 }