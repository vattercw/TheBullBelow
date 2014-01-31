#pragma strict

function Start () {

}

function Update () {
     transform.Rotate(Vector3.up *30* Time.deltaTime);
}