#pragma strict
var hitObject : GameObject;
function Start () {
 
}

function Update () {

}

function OnCollisionEnter(collision : Collision) {
		//if(Collision.gameObject == player){
			//player.GetComponent(Movement).fuel = player.GetComponent(Movement).fuel + 100;
		//}
		
		//gameObject.GetComponent(Movement).incFuel(100);	
		Debug.Log(collision.gameObject);
		
		collision.gameObject.GetComponent(Movement).incFuel(500);
		Destroy (gameObject);
	}
	