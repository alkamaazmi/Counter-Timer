const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");


const second=1000;
const minute=60*second; 
const hour=60*minute;
const day=24*hour;
 
const timerFunction=()=>{
    let now=new Date();
    let dd=String(now.getDate()).padStart(2,"0");
    let mm=String(now.getMonth()+1).padStart(2,"0");
    let yyyy=now.getFullYear();
    now=`${mm}/${dd}/${yyyy}`;

    const enteredDay=prompt("enter day").padStart(2,"0");
    const enteredMonth=prompt("enter month").padStart(2,"0");
    let targetDate=`${enteredMonth}/${enteredDay}/${yyyy}`;
    if(now>targetDate){
        targetDate=`${enteredMonth}/${enteredDay}/${yyyy+1}`;
    }  

    const intervalId = setInterval(() => {
        // coverting targetDate in Miliseconds
        const timer = new Date(targetDate).getTime();
        // Taking current Date in Miliseconds
        const today = new Date().getTime();
    
        // Finding Difference target Date and today's date
        const difference = timer - today;
    
        // finding left days,hours,minutes,seconds
        const leftDay = Math.floor(difference / day);
        const leftHour = Math.floor((difference % day) / hour);
        const leftMinute = Math.floor((difference % hour) / minute);
        const leftSecond = Math.floor((difference % minute) / second);
    
        // Showing Timer in DOM
        daysElement.innerText = leftDay;
        hoursElement.innerText = leftHour;
        minutesElement.innerText = leftMinute;
        secondsElement.innerText = leftSecond;
    
        // Stop Set Interval after reaching the target time
        if (difference < 0) {
          counterTimer.style.display = "none";
          heading.innerText = "Time's Up";
          clearInterval(intervalId);
        }
      }, 0);
}
timerFunction();