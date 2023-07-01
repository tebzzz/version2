// Event listener for the buttons
document.getElementById("beginButton").addEventListener("click", breath1)
document.getElementById("restartButton").addEventListener("click", restart)

let seconds = 0;
let interval = 1000;
let breath1Timer, breath2Timer, breath3Timer, breath4Timer, breath5Timer, breath6Timer;

// Set up speech mode
let speech = new SpeechSynthesisUtterance();
let voices;
window.speechSynthesis.onvoiceschanged = function() {
  voices = window.speechSynthesis.getVoices();
  console.log(voices)
}

// ------------------------------------------------------------------------ //
// Function to begin the breathing chain (BREATH1) (fires on clicking Begin button)
function breath1() {
  // Check for speech mode
  speechModeUserSetting = localStorage.getItem('speechMode');
  if (speechModeUserSetting) {
    setVoice(speechModeUserSetting)
  }
  
  // Swap visibility of begin/restart buttons, but only if the timer is new
  if (!document.getElementById("beginButton").classList.contains("hidden")) {
    document.getElementById("beginButton").classList.toggle("hidden");
    document.getElementById("restartButton").classList.toggle("hidden");
  }

  // Put BREATHE IN instruction into the DOM
  document.getElementById("instructionDisplayArea").innerHTML = "in..."
  if (speechModeUserSetting) {
    speech.text = "in";
    window.speechSynthesis.speak(speech);
  }
  // Put seconds into the DOM to begin counting
  document.getElementById("breath1CountArea").innerHTML = "_";
  document.getElementById("breath2CountArea").innerHTML = "_";
  document.getElementById("breath3CountArea").innerHTML = "_";
  document.getElementById("breath4CountArea").innerHTML = "_";
  document.getElementById("breath5CountArea").innerHTML = "_";
  document.getElementById("breath6CountArea").innerHTML = "_";


  // Reset seconds
  seconds = 0;
  // Initialize the timer
  breath1Timer = setInterval(countBreath1, interval);
}
// Function to count the BREATHE IN and put seconds into the DOM
function countBreath1() {
  ++seconds;
  if (seconds !== 10) {
    document.getElementById("breath1CountArea").innerHTML = seconds;
    if (seconds === 5) {
      document.getElementById("instructionDisplayArea").innerHTML = "out..."
      if (speechModeUserSetting) {
        speech.text = "out";
        window.speechSynthesis.speak(speech);
      }
    }
  } else { // When 10 seconds have elapsed
    document.getElementById("breath1CountArea").innerHTML = "10";
    clearInterval(breath1Timer);
    breath2();
  }
}
// ------------------------------------------------------------------------ //
// Function to continue the breathing chain
function breath2() {
  // Check for speech mode
  speechModeUserSetting = localStorage.getItem('speechMode');
  if (speechModeUserSetting) {
    setVoice(speechModeUserSetting)
  }
  
  // Put HOLD instruction into the DOM
  document.getElementById("instructionDisplayArea").innerHTML = "in..."
  if (speechModeUserSetting) {
    speech.text = "in";
    window.speechSynthesis.speak(speech);
  }
  // Reset the counter in the DOM
  document.getElementById("breath2CountArea").innerHTML = "_";

  // Reset seconds
  seconds = 0;
  // Initialize the timer
  breath2Timer = setInterval(countBreath2, interval);
}
// Function to count the HOLD and put seconds into DOM
function countBreath2() {
  ++seconds;
  if (seconds !== 10) {
    document.getElementById("breath2CountArea").innerHTML = seconds;
    if (seconds === 5) {
      document.getElementById("instructionDisplayArea").innerHTML = "out..."
      if (speechModeUserSetting) {
        speech.text = "out";
        window.speechSynthesis.speak(speech);
      }
    }
  } else { // When 10 seconds have elapsed
    document.getElementById("breath2CountArea").innerHTML = "10";
    clearInterval(breath2Timer);
    breath3();
  }
}
// ------------------------------------------------------------------------ //
// Function to continue the breathing chain
function breath3() {
  // Check for speech mode
  speechModeUserSetting = localStorage.getItem('speechMode');
  if (speechModeUserSetting) {
    setVoice(speechModeUserSetting)
  }
  
  // Put HOLD instruction into the DOM
  document.getElementById("instructionDisplayArea").innerHTML = "in..."
  if (speechModeUserSetting) {
    speech.text = "in";
    window.speechSynthesis.speak(speech);
  }
  // Reset the counter in the DOM
  document.getElementById("breath3CountArea").innerHTML = "_";

  // Reset seconds
  seconds = 0;
  // Initialize the timer
  breath3Timer = setInterval(countBreath3, interval);
}
// Function to count the HOLD and put seconds into DOM
function countBreath3() {
  ++seconds;
  if (seconds !== 10) {
    document.getElementById("breath3CountArea").innerHTML = seconds;
    if (seconds === 5) {
      document.getElementById("instructionDisplayArea").innerHTML = "out..."
      if (speechModeUserSetting) {
        speech.text = "out";
        window.speechSynthesis.speak(speech);
      }
    }
  } else { // When 10 seconds have elapsed
    document.getElementById("breath3CountArea").innerHTML = "10";
    clearInterval(breath3Timer);
    breath4();
  }
}
// ------------------------------------------------------------------------ //
// Function to continue the breathing chain
function breath4() {
  // Check for speech mode
  speechModeUserSetting = localStorage.getItem('speechMode');
  if (speechModeUserSetting) {
    setVoice(speechModeUserSetting)
  }
  
  // Put HOLD instruction into the DOM
  document.getElementById("instructionDisplayArea").innerHTML = "in..."
  if (speechModeUserSetting) {
    speech.text = "in";
    window.speechSynthesis.speak(speech);
  }
  // Reset the counter in the DOM
  document.getElementById("breath4CountArea").innerHTML = "_";

  // Reset seconds
  seconds = 0;
  // Initialize the timer
  breath4Timer = setInterval(countBreath4, interval);
}
// Function to count the HOLD and put seconds into DOM
function countBreath4() {
  ++seconds;
  if (seconds !== 10) {
    document.getElementById("breath4CountArea").innerHTML = seconds;
    if (seconds === 5) {
      document.getElementById("instructionDisplayArea").innerHTML = "out..."
      if (speechModeUserSetting) {
        speech.text = "out";
        window.speechSynthesis.speak(speech);
      }
    }
  } else { // When 10 seconds have elapsed
    document.getElementById("breath4CountArea").innerHTML = "10";
    clearInterval(breath4Timer);
    breath5();
  }
}
// ------------------------------------------------------------------------ //
// Function to continue the breathing chain
function breath5() {
  // Check for speech mode
  speechModeUserSetting = localStorage.getItem('speechMode');
  if (speechModeUserSetting) {
    setVoice(speechModeUserSetting)
  }
  
  // Put HOLD instruction into the DOM
  document.getElementById("instructionDisplayArea").innerHTML = "in..."
  if (speechModeUserSetting) {
    speech.text = "in";
    window.speechSynthesis.speak(speech);
  }
  // Reset the counter in the DOM
  document.getElementById("breath5CountArea").innerHTML = "_";

  // Reset seconds
  seconds = 0;
  // Initialize the timer
  breath5Timer = setInterval(countBreath5, interval);
}
// Function to count the HOLD and put seconds into DOM
function countBreath5() {
  ++seconds;
  if (seconds !== 10) {
    document.getElementById("breath5CountArea").innerHTML = seconds;
    if (seconds === 5) {
      document.getElementById("instructionDisplayArea").innerHTML = "out..."
      if (speechModeUserSetting) {
        speech.text = "out";
        window.speechSynthesis.speak(speech);
      }
    }
  } else { // When 10 seconds have elapsed
    document.getElementById("breath5CountArea").innerHTML = "10";
    clearInterval(breath5Timer);
    breath6();
  }
}
// ------------------------------------------------------------------------ //
// Function to continue the breathing chain
function breath6() {
  // Check for speech mode
  speechModeUserSetting = localStorage.getItem('speechMode');
  if (speechModeUserSetting) {
    setVoice(speechModeUserSetting)
  }
  
  // Put HOLD instruction into the DOM
  document.getElementById("instructionDisplayArea").innerHTML = "in..."
  if (speechModeUserSetting) {
    speech.text = "in";
    window.speechSynthesis.speak(speech);
  }
  // Reset the counter in the DOM
  document.getElementById("breath6CountArea").innerHTML = "_";

  // Reset seconds
  seconds = 0;
  // Initialize the timer
  breath6Timer = setInterval(countBreath6, interval);
}
// Function to count the HOLD and put seconds into DOM
function countBreath6() {
  ++seconds;
  if (seconds !== 10) {
    document.getElementById("breath6CountArea").innerHTML = seconds;
    if (seconds === 5) {
      document.getElementById("instructionDisplayArea").innerHTML = "out..."
      if (speechModeUserSetting) {
        speech.text = "out";
        window.speechSynthesis.speak(speech);
      }
    }
  } else { // When 10 seconds have elapsed
    document.getElementById("breath6CountArea").innerHTML = "10";
    clearInterval(breath6Timer);

    // Clone current breathing cycle and put it in the DOM to keep track of cycles
    const clone = document.querySelector(".timer-display-area").cloneNode(true);
    document.querySelector(".timer-divs").appendChild(clone);
    
    // Restart the breathing cycle
    breath1();
  }
}



// Function to reset the process using the Reset button
function restart() {
  // Swap visibility of begin/restart buttons
  document.getElementById("beginButton").classList.toggle("hidden");
  document.getElementById("restartButton").classList.toggle("hidden");

  // Reset the seconds/instructions in the DOM
  document.getElementById("instructionDisplayArea").innerHTML = "...";
  document.getElementById("breath1CountArea").innerHTML = "_";
  document.getElementById("breath2CountArea").innerHTML = "_";
  document.getElementById("breath3CountArea").innerHTML = "_";
  document.getElementById("breath4CountArea").innerHTML = "_";
  document.getElementById("breath5CountArea").innerHTML = "_";
  document.getElementById("breath6CountArea").innerHTML = "_";

  // Reset second count
  seconds = 0;

  // Stop the timer variable
  clearInterval(breath1Timer);
  clearInterval(breath2Timer);
  clearInterval(breath3Timer);
  clearInterval(breath4Timer);
  clearInterval(breath5Timer);
  clearInterval(breath6Timer);

  // Clear the tower of cycles
  removeCycles();
}

// Function to reset the tower of previous cycles
function removeCycles() {
  let cycle = document.querySelector(".timer-divs");
  while (cycle.childElementCount > 1) {
    cycle.removeChild(cycle.lastChild);
  }
}

// Function to set the speechmode voice
function setVoice(setting) {
  if (setting === 'masc') {
    speech.voice = voices[4]
  } else {
    speech.voice = voices[5]
  }
}