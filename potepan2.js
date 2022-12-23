const time;
const startButton;
const stopButton;
const resetButton;

let timer;
let countStart;
let countStop=0;
let countHold=0;

window.onload=function(){
  time=document.getElementById('counter');
  startButton=document.getElementById('start');
  stopButton=document.getElementById('stop');
  resetButton=document.getElementById('reset');
}

function pushStart(){
  countStart=Date.now();
  measureTime();
  startButton.disabled=true;
  stopButton.disabled=false;
  resetButton.disabled=false;
}

function pushStop(){
  clearInterval(timer);
  countHold+=Date.now()-countStart;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function pushReset(){
  clearInterval(timer);
  countStop = 0;
  countHold = 0;
  time.textContent = "0:0:0:0";
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

function measureTime() {
  timer = setTimeout(function () {
  countStop = Date.now() - countStart + countHold;
  time.textContent = new Date(countStop).toISOString().slice(14, 23);
  measureTime();
  }, 10);
}
