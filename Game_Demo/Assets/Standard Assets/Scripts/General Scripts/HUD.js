var reticule : Texture;
var width: int;

function OnGUI () {
	// Make a background box
	var tex : Texture;
	GUI.Box (Rect (Screen.width / 2 , Screen.height / 2 , 15,15),reticule);
	GUI.Box (Rect (10,Screen.height - 30,100,20), "Energy");
	
	
}