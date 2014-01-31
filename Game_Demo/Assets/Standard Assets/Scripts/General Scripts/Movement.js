 var client_sideways : float; // The sideways movement variable (X-axis, transform)
 
  var client_rotation : float; // The rotation movement variable (Y-axis, rotate)
 
  var client_linear : float; // The forward/backward movement variable (Z-axis, transform)
 
  var client_jump : float; // The jump movement variable (Y-axis, transform)
 
  var client_lastSideways : float; // The last sideways movement made by the client
 
  var client_lastRotation : float; // The last rotational movement made by the client
 
  var client_lastLinear : float; // The last forward/backward movement made by the client
  var client_lastJump : float; // The last jump movement made by the client
  var moveDir : Vector3; // The sideways direction movement variable
  
  var energy : int;
  var fuel : int;
 
 var faceDir : Vector3; // The rotation direction movement variable
 
 var speed : float; // Movement speed
 
 var rotateSpeed : float; // Rotation speed
 
  var speedMult : float;
   
var reticule : Texture;
var width: int;
var audioMult: int;

 
 function Start() { // Run once on script start
     gameObject.tag = "Player";
     // Set default variable values
     energy = 1000;
     fuel   = 1000;
     speedMult = 1;
 
     client_sideways = 0;
 
     client_rotation = 0;
 
     client_linear = 0;
 
     client_jump = 0;
 
     client_lastJump = 0;
 
     client_lastSideways = 0;
 
     client_lastRotation = 0;
 
     client_lastLinear = 0;
 
     moveDir = Vector3.zero;
 
     faceDir = Vector3.zero;
 
     speed = 5;
 
     rotateSpeed = 28;
     
     audioMult = 0;
     

 
 
 }
 
  
 
 function Update() { // Run several times per frame

    if (Input.GetKeyDown (KeyCode.W)) { // Forward key (W)
 
             client_linear = 1;
 
         }
 
         if (Input.GetKeyDown (KeyCode.S)) { // Backward key (S)
 
             client_linear = -1;
 
         }
 
         if (Input.GetKeyDown (KeyCode.A)) { // Left-hand rotation key (A)
 
             client_sideways= -1;
 
         }
 
         if (Input.GetKeyDown (KeyCode.D)) { // Right-hand rotation key (D)
 
             client_sideways = 1;
 
         }
 
        if (Input.GetKeyDown (KeyCode.Q)) { // Left sideway key (Q)
 
             client_sideways = -1;
 
         }
 
         if (Input.GetKeyDown (KeyCode.E)) { // Right sideway key (E)
 
             client_sideways = 1;
 
         }
         
         if (Input.GetKeyDown (KeyCode.LeftShift)) { // Shift
             speedMult = 2;       
 
         }
         
          if (Input.GetKeyUp (KeyCode.LeftShift)) { // Forward key (W)
 
             speedMult = 1;
 
         }
         
         if (Input.GetKeyUp (KeyCode.W)) { // Forward key (W)
 
             client_linear = 0;
 
         }
 
         if (Input.GetKeyUp (KeyCode.S)) { // Backward key (S)
 
             client_linear = 0;
 
         }
 
         if (Input.GetKeyUp (KeyCode.A)) { // Left-hand rotation key (A)
 
             client_sideways = 0;
 
         }
 
         if (Input.GetKeyUp (KeyCode.D)) { // Right-hand rotation key (D)
 
             client_sideways= 0;
 
         }
 
        if (Input.GetKeyUp (KeyCode.Q)) { // Left sideway key (Q)
 
             client_sideways = 0;
 
         }
 
         if (Input.GetKeyUp (KeyCode.E)) { // Right sideway key (E)
 
             client_sideways = 0;
 
         }
         
         
         // FUEL and ENERGY STUFF
         
         if(energy <= 0 && Time.timeScale == 1){
         	speedMult = 1;
         }
         
         if (speedMult == 2 && energy > 0 && Time.timeScale == 1){
         	energy = energy - 5;
         }
         
         if(energy < 1000 && Time.timeScale == 1){
         	energy = energy + 1;
         }
         
         if (fuel > 1000){
          	fuel = 1000;
          }
         
         fuel = fuel - .1 * Time.timeScale;
         //Debug.Log("Fuel: " + fuel);
         

		//AUDIO STUFF
         
         if( client_sideways == 0 && client_jump == 0 && client_linear== 0) {
         	audioMult = 0;
         } else {
         	audioMult = 1;
         }
 	     audio.volume = .24 * audioMult;
 	     audio.pitch = speedMult;
 	     
 	     //DO MOVEMENT 
 	     
         moveDir = Vector3(client_sideways, client_jump, client_linear); // Set the moveDir variable
         transform.Translate(speed * speedMult * moveDir * Time.deltaTime); // Perform the movement

         client_lastRotation = client_rotation; // Update variable
         faceDir = Vector3(0, client_rotation, 0); // set the faceDir variable
         transform.Rotate(rotateSpeed * faceDir * Time.deltaTime); // Perform the rotation
 
    
 
}

	
function getFuel() {
              return fuel;
}
function incFuel(x : int){
			  fuel = fuel + x;
}

function getspeedMult(){
	return speedMult;
}
function OnGUI () {
	// Make a background box
	var tex : Texture;
	GUI.Box (Rect (Screen.width / 2 , Screen.height / 2 , 25,25),reticule,GUIStyle.none);
	
	GUI.Box (Rect (Screen.width - 220,Screen.height - 30,(fuel+60)/5,20), "");
	GUI.TextField(Rect (Screen.width - 50,Screen.height - 50,100,20), "Fuel", GUIStyle.none);
	
	
	GUI.Box (Rect (10,Screen.height - 30,(energy+60)/5,20), "");
	GUI.TextField(Rect (10,Screen.height - 50,100,20), "Energy", GUIStyle.none);
	
	
}
