#pragma strict
@script RequireComponent(ParticleSystem)
var ps : ParticleSystem;
var player : GameObject;
var fuel   : int;

function Start () {
	ps.emissionRate = 300;
}

function Update () {
  	fuel = player.GetComponent(Movement).getFuel();
  	
  	if( fuel < 300 ) 
  		ps.emissionRate = fuel;
  	else 
  		ps.emissionRate = 300;
  		
  	//Debug.Log(ps.emissionRate);

}