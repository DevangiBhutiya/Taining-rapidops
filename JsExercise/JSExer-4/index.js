let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resumeBtn = document.getElementById('resume');
let resetBtn = document.getElementById('reset'); 

let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0;
// let timer= false


const updateClock = () => {
    const clockElement = document.getElementById('clock');
    const now = new Date();

    // Get the time in the user's locale and timezone
    const timeString = now.toLocaleTimeString();

    // Update the clock element
    clockElement.textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);


const updateDate = () => {
    const clockElement = document.getElementById('date');
    const now = new Date();

    // Get the time in the user's locale and timezone
    const datestring = now.toLocaleDateString();

    // Update the clock element
    clockElement.textContent = datestring;
}

// Update the clock every second
updateDate()

const setButtonStates = (start, stop, resume, reset) => {
    startBtn.disabled = start;
    stopBtn.disabled = stop;
    resumeBtn.disabled = resume;
    resetBtn.disabled = reset;
};

// Set initial button states
setButtonStates(false, true, true, true);

startBtn.addEventListener('click', function () { 
    timer = true; 
    setButtonStates(true, false, true, false);
    stopWatch(); 
}); 
  
stopBtn.addEventListener('click', function () { 
    setButtonStates(true, true, false, false);
    timer = false; 
}); 

resumeBtn.addEventListener('click', function () { 
    timer = true;
    setButtonStates(true, false, true, false);
    stopWatch();  
}); 
  

resetBtn.addEventListener('click', function () { 
    timer = false; 
    hour = 0; 
    minute = 0; 
    second = 0; 
    count = 0; 
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('count').innerHTML = "00"; 
    setButtonStates(false, true, true, true);
}); 


const stopWatch = () => {
    if (timer) { 
        count++; 

        if (count == 100) { 
            second++; 
            count = 0; 
        } 
  
        if (second == 60) { 
            minute++; 
            second = 0; 
        } 
  
        if (minute == 60) { 
            hour++; 
            minute = 0; 
            second = 0; 
        } 

        let hrString = hour; 
        let minString = minute; 
        let secString = second; 
        let countString = count; 
  
        if (hour < 10) { 
            hrString = "0" + hrString; 
        } 
  
        if (minute < 10) { 
            minString = "0" + minString; 
        } 
  
        if (second < 10) { 
            secString = "0" + secString; 
        } 
  
        if (count < 10) { 
            countString = "0" + countString; 
        } 
  
        document.getElementById('hr').innerHTML = hrString; 
        document.getElementById('min').innerHTML = minString; 
        document.getElementById('sec').innerHTML = secString; 
        document.getElementById('count').innerHTML = countString; 
        setTimeout(stopWatch, 10); 
    } 

}