var d = new Date();
var lastTime = d.getTime();
var avrBpm = 0
var avrInt = 0
var average = 0, last = 0, rounded = 0;

function newClick(){

  var d = new Date();
  var time = (d.getTime() - lastTime);
  var bpm = 60/(time/1000);
  if(time>2000 || avrBpm==0){avrBpm=bpm;avrInt=0; console.log("newAverage")}
  else{avrBpm = ((avrBpm*avrInt)+bpm)/(avrInt+1); avrInt=avrInt+1;}

  console.log(bpm, avrBpm, avrInt);
  
  average = "Average:<br>" + Math.round(avrBpm*100)/100 + " BPM";
  last = "Last:<br>" + Math.round(bpm*100)/100 + " BPM";
  rounded = "Rounded:<br>" + Math.round(avrBpm) + " BPM";
  document.getElementById("results-average").innerHTML = average;
  document.getElementById("results-last").innerHTML = last;
  document.getElementById("results-rounded").innerHTML = rounded;

  lastTime = d.getTime();
}

function spacePress(event){
  var key = event.which || event.keyCode; 
  if(key==32){newClick();}
}
