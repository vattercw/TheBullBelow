var object : GameObject;
var isQuit=false;

function OnMouseEnter(){
this.gameObject.guiText.material.color = Color.red;
}

function OnMouseExit(){
this.gameObject.guiText.material.color = Color.white;
}

function OnMouseUp(){
if (isQuit==true) {
Application.Quit();
}
else {
Application.LoadLevel(1);
}
}

function Update(){
if (Input.GetKey(KeyCode.Escape)) { Application.Quit();
}
}