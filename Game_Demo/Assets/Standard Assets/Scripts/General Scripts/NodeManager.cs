using UnityEngine;
using System.Collections;

public class NodeManager : MonoBehaviour {
	public Node destination;
	public Node firstnode;
	//used to speed up/slow down depending on runtime (will move to another class later)
	float factor = 5;
	int scentTrack;
	//sets the ai nodes
	void Start (){
		destination = firstnode;
	}
	
	// Update is called once per frame
	void Update () {

		if(Mathf.Sqrt(Mathf.Pow(transform.position.z-destination.getCoordinates()[1],2) + Mathf.Pow(transform.position.x-destination.getCoordinates()[0],2)) > .5 ){

			if(Mathf.Abs(transform.position.z-destination.getCoordinates()[1]) > .25){
				if(transform.position.z<destination.getCoordinates()[1])
					transform.Translate(Vector3.forward*factor*Time.deltaTime,Space.World);
				else
					transform.Translate(Vector3.back*factor*Time.deltaTime,Space.World);
			}


			if(Mathf.Abs(transform.position.x-destination.getCoordinates()[0]) > .25){
			if(transform.position.x<destination.getCoordinates()[0])
				transform.Translate(Vector3.right*factor*Time.deltaTime,Space.World);
			else 
				transform.Translate(Vector3.left*factor*Time.deltaTime,Space.World);
			}

		}else{destination = destination.getNext();}

	}
	public bool caught(){
		return false;
	}
	
}