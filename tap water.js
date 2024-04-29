var count=0;
function on() {
    var waterElement = document.getElementById("water");
    var can = document.getElementById("can");
    var tap =document.getElementById("tap-handle")
    var water=document.getElementById("water-flow")
    if(count%2===0){
      waterElement.style.backgroundColor="#d3d3d3"
      can.style.backgroundColor="#3498db"
    waterElement.style.animation = "water-on 15s linear forwards";
    tap.style.background="Green"
    water.style.background="#3498db"


    

  }
  else{
    waterElement.style.animationPlayState = "paused";
    tap.style.background="Red"
    water.style.background="White"
  }
  count++;
}
