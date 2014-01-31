@script RequireComponent(Light)
var script1;
var minIntensity = 5f;
var maxIntensity = 7f;
var fuel_from_player : int;
private var random : float;  
var player : GameObject;
var lightMult: float;
 
random = Random.Range(0.0f, 65535.0f);

function Start(){
   //script1 = player.GetComponent(Movement);
   fuel_from_player = 0;
}
function Update()
{
   
    var noise = Mathf.PerlinNoise(random, Time.time);
    
    if(fuel_from_player < 300){
   			 lightMult = fuel_from_player/300.0;
    } else {
             lightMult = 1;
    }
    
    fuel_from_player = player.GetComponent(Movement).getFuel();
    
    
    light.intensity = Mathf.Lerp(minIntensity*lightMult, maxIntensity*lightMult, noise*lightMult);
}