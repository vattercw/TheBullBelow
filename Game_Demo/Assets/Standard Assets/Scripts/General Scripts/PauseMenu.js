var isPause = false;
var MainMenu : Rect = Rect(10, 10, 200, 200);
 
function Update () {
 Screen.showCursor = isPause;
 if( Input.GetKeyDown(KeyCode.Escape))
   { 
      isPause = !isPause;
      
      if(isPause){
         
         Time.timeScale = 0;
      }   else  {
         Time.timeScale = 1;
      }
   }
}
 
function OnGUI()
{	
   if(isPause){
       GUI.Window(0, MainMenu, TheMainMenu, "Paused");
       Screen.showCursor = true;
       }
}
 
function TheMainMenu () {
if(GUILayout.Button("Main Menu")){
Application.LoadLevel("MainMenu");
Time.timeScale = 1;
}
if(GUILayout.Button("Restart")){
Application.LoadLevel(1);
Time.timeScale = 1;
//Application.loadedLevel("asdf");
}
if(GUILayout.Button("Quit")){
Application.Quit();
}
}