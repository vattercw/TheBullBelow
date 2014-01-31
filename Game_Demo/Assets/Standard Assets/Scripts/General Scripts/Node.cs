using UnityEngine;
using System.Collections;


public class Node : MonoBehaviour {
	//where the ai should move to
	public float[] target = {0,100};
	//0-3 NSEW
	int direction = 0;
	//used to fairly distribute the number of times a node is traversed
	int popularity = 1;
	// Use this for initialization of
	public Node n=null;
	public Node e=null;
	public Node s=null;
	public Node w=null;
	//sets the ai nodes
	void setNodes (Node n,Node e,Node s,Node w) {
		this.n = n;
		this.e = e;
		this.s = s;
		this.w = w;
	}
	void Start (){
		target[0] = transform.position.x;
		target[1] = transform.position.z;
	}
	
	// Update is called once per frame
	void Update () {
	}
	
	public Node getNext(){
		//transform.position=  new Vector3(0, target[0], target[1]);
		ArrayList list = new ArrayList ();
		ArrayList popularity = new ArrayList ();
		while (true) {
						int randomNumber = (int)Random.Range (0, 4);
			Debug.Log (randomNumber);
						if (n != null && randomNumber == 0) {
								list.Add (n);
								popularity.Add (n.popularity);
								return n;
						}
						if (e != null&& randomNumber == 1) {
								list.Add (e);
								popularity.Add (e.popularity);
								return e;
						}
						if (s != null&& randomNumber == 2) {
								list.Add (s);
								popularity.Add (s.popularity);
								return s;
						}
						if (w != null&& randomNumber == 3) {
								list.Add (w);
								popularity.Add (w.popularity);
								return w;
						}
				}
		return null;
		//perform the algorithm here, biased against turning around
		//for (int i=0; i<list.Count; i++) {
		//}
		//return null;

		
	}
	public void setCoordinates(float x, float y)
	{
		target[0] = x;
		target[1] = y;
	}
	
	public float[] getCoordinates(){
		return target;
	}
	public int getDirection(){
		return direction;
	}
	
}