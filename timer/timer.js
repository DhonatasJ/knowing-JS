let btn = document.getElementById(`btnStart`);
let result = document.getElementById(`result`)
let sTime;
let pTime;
let gTime;
let mTime;
let sTimeInSeconds = 0;
let pTimeInSeconds = 0;
let mTimeInSeconds = 0;
let gTimeInSeconds = 0;
let timerIdS;
let timerIdP;
let timerIdM;
let timerIdG;

function convertTimeToSeconds(time) {
  if(typeof sTimeInSeconds !== `string` || isNaN(sTimeInSeconds)){
    clearInterval(timerIdS);
    
  }
  
  const [hours, minutes, seconds] = time.split(":");
  const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  return totalSeconds;
}
function convertTimeToSeconds(time) {
  if (!/^\d{2}:\d{2}:\d{2}$/.test(time)) {
    return NaN;
  }
  const [hours, minutes, seconds] = time.split(":");
  const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
  return totalSeconds;
}


studyTime.addEventListener(`input`, (e) => {
  var value = e.target.value.replace(/\D/g,``);
  value = value.replace(/^(\d{2})(\d{0,2})(\d{0,2}).*/,"$1:$2:$3");
  e.target.value = value;
  sTime = value;
  sTimeInSeconds = convertTimeToSeconds(value);
  return sTimeInSeconds
});

procrastinationTime.addEventListener(`input`, (e) => {
    var value = e.target.value.replace(/\D/g,``);
    
    value = value.replace(/^(\d{2})(\d{0,2})(\d{0,2}).*/,"$1:$2:$3");
    e.target.value = value;
    pTime = value;
    pTimeInSeconds = convertTimeToSeconds(value);
})

medidate.addEventListener(`input`, (e)=>{
    var value = e.target.value.replace(/\D/g,``);
    value = value.replace(/^(\d{2})(\d{0,2})(\d{0,2}).*/,"$1:$2:$3")
    e.target.value = value;
    mTime = value;
    mTimeInSeconds = convertTimeToSeconds(value);
});

getUp.addEventListener(`input`, (e)=>{
    var value = e.target.value.replace(/\D/g,``);
    value = value.replace(/^(\d{2})(\d{0,2})(\d{0,2}).*/,"$1:$2:$3")
    e.target.value = value;
    gTime = value;
    gTimeInSeconds = convertTimeToSeconds(value);
});

  function convertS(seconds = sTimeInSeconds){
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secRemaining = seconds % 60;
 
    cleanHourS = `${hours}:${minutes}:${secRemaining}`
  }
 convertS();

    function convertP(seconds = pTimeInSeconds){
      let hours = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds % 3600) / 60);
      let secRemaining = seconds % 60;
   
      cleanHourP = `${hours}:${minutes}:${secRemaining}`
    }
   convertP();

  
    function convertM(seconds = mTimeInSeconds){
      let hours = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds % 3600) / 60);
      let secRemaining = seconds % 60;
   
      cleanHourM = `${hours}:${minutes}:${secRemaining}`
    }
   convertM();


   function updateStudyTime() {
    if (sTimeInSeconds <= 0) {
      clearInterval(timerIdS);
      result.innerHTML = updateStudyTime();
      return;
    }

    const hours = Math.floor(sTimeInSeconds / 3600);
    const minutes = Math.floor((sTimeInSeconds % 3600) / 60);
    const seconds = sTimeInSeconds % 60;
    const timeStringS = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    result.textContent = timeStringS;
    sTimeInSeconds--;
  }
  
function updateProcastinationTime(){
  if(pTimeInSeconds <= 0){
    clearInterval(timerIdP);
    result.innerHTML = updateProcastinationTime();
    return;
  }

  const hours = Math.floor(pTimeInSeconds / 3600);
  const minutes = Math.floor((pTimeInSeconds % 3600) / 60);
  const seconds = pTimeInSeconds % 60;
  const timeStringP = `${hours.toString().padStart(2, `0`)}:${minutes.toString().padStart(2, `0`)}:${seconds.toString().padStart(2, `0`)}`;
  result.textContent = timeStringP;
  pTimeInSeconds--;
}

function updateMeditationTime(){
  if(mTimeInSeconds <= 0){
    clearInterval(timerIdM)
    result.innerHTML = updateMeditationTime();
    return;
  }

  const hours = Math.floor(mTimeInSeconds / 3600);
  const minutes = Math.floor((mTimeInSeconds % 3600) / 60);
  const seconds = mTimeInSeconds % 60;
  const timeStringM = `${hours.toString().padStart(2, `0`)}:${minutes.toString().padStart(2, `0`)}:${seconds.toString().padStart(2, `0`)}`;
  result.innerHTML = timeStringM;
  mTimeInSeconds--;
}

function updateGetUpTime(){
  if(gTimeInSeconds <= 0){
    clearInterval(timerIdG);
    result.innerHTML = updateGetUpTime();
    return;
  }

  const hours = Math.floor(gTimeInSeconds / 3600);
  const minutes = Math.floor((gTimeInSeconds % 60) / 60);
  const seconds = gTimeInSeconds % 60;
  const timeStringG = `${hours.toString().padStart(2, `0`)}:${minutes.toString().padStart(2, `0`)}:${seconds.toString().padStart(2, `0`)}`;
  result.innerHTML = timeStringG;
  gTimeInSeconds--;
}
function startTimer(timeInSeconds, nextTimerFunction) {
  let timerId = setInterval(() => {
    if (timeInSeconds <= 0) {
      clearInterval(timerId);
      nextTimerFunction();
      return;
    }function verify(time) {
      if (typeof time !== 'string' || time.trim() === '') {
        // código a ser executado caso a condição seja verdadeira
      }
    }
    

    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    result.textContent = timeString;
    timeInSeconds--;
  }, 1000);
}


btn.addEventListener(`click`, () => {
  startTimer(sTimeInSeconds, () => {
    startTimer(pTimeInSeconds, () => {
      startTimer(mTimeInSeconds, () => {
        startTimer(gTimeInSeconds, () => {
        });
      });
    });
  });
});

