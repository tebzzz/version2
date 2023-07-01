// Event listener for the buttons
document.getElementById("beginButton").addEventListener("click", breatheIn)
document.getElementById("restartButton").addEventListener("click", restart)

let seconds = 0;
let interval = 1000;
let breatheInTimer, holdInTimer, breatheOutTimer, holdOutTimer;

// Set up speech mode
let speech = new SpeechSynthesisUtterance();
let voices;
window.speechSynthesis.onvoiceschanged = function() {
  voices = window.speechSynthesis.getVoices();
  console.log(voices)
}


// ------------------------------------------------------------------------ //
// Function to begin the breathing chain (BREATHE IN) (fires on clicking Begin button)
function breatheIn() {
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
  document.getElementById("breatheInCountArea").innerHTML = "_";
  document.getElementById("holdInCountArea").innerHTML = "_";
  document.getElementById("breatheOutCountArea").innerHTML = "_";
  document.getElementById("holdOutCountArea").innerHTML = "_";

  // Reset seconds
  seconds = 0;
  // Initialize the timer
  breatheInTimer = setInterval(countBreatheIn, interval);
}
// Function to count the BREATHE IN and put seconds into the DOM
function countBreatheIn() {
  ++seconds;
  if (seconds !== 4) {
    document.getElementById("breatheInCountArea").innerHTML = seconds;
  } else { // When 3 seconds have elapsed
    document.getElementById("breatheInCountArea").innerHTML = "4";
    clearInterval(breatheInTimer);
    holdIn();
  }
}
// ------------------------------------------------------------------------ //
// Function to continue the breathing chain (HOLD)
function holdIn() {
  // Check for speech mode
  speechModeUserSetting = localStorage.getItem('speechMode');
  if (speechModeUserSetting) {
    setVoice(speechModeUserSetting)
  }

  // Put HOLD instruction into the DOM
  document.getElementById("instructionDisplayArea").innerHTML = "hold..."
  if (speechModeUserSetting) {
    speech.text = "hold";
    window.speechSynthesis.speak(speech);
  }
  // Reset the counter in the DOM
  document.getElementById("holdInCountArea").innerHTML = "_";

  // Reset seconds
  seconds = 0;
  // Initialize the timer
  holdInTimer = setInterval(countHoldIn, interval);
}
// Function to count the HOLD and put seconds into DOM
function countHoldIn() {
  ++seconds;
  if (seconds !== 4) {
    document.getElementById("holdInCountArea").innerHTML = seconds;
  } else { // When 4 seconds have elapsed
    document.getElementById("holdInCountArea").innerHTML = "4";
    clearInterval(holdInTimer);
    breatheOut();
  }
}
// ------------------------------------------------------------------------ //
// Function to continue the breathing chain (BREATHE OUT)
function breatheOut() {
  // Check for speech mode
  speechModeUserSetting = localStorage.getItem('speechMode');
  if (speechModeUserSetting) {
    setVoice(speechModeUserSetting)
  }

  // Put BREATHE OUT instruction into the DOM
  document.getElementById("instructionDisplayArea").innerHTML = "out..."
  if (speechModeUserSetting) {
    speech.text = "out";
    window.speechSynthesis.speak(speech);
  }
  // Reset the counter in the DOM
  document.getElementById("breatheOutCountArea").innerHTML = "_";

  // Reset seconds
  seconds = 0;
  // Initialize the timer
  breatheOutTimer = setInterval(countBreatheOut, interval);
}
function countBreatheOut() {
  ++seconds;
  if (seconds !== 4) {
    document.getElementById("breatheOutCountArea").innerHTML = seconds;
  } else { // when 5 seconds have elapsed
    document.getElementById("breatheOutCountArea").innerHTML = "4";
    clearInterval(breatheOutTimer);
    holdOut();
  }
}
// ------------------------------------------------------------------------ //
// Function to continue the breathing chain (HOLDOUT)
function holdOut() {
  // Check for speech mode
  speechModeUserSetting = localStorage.getItem('speechMode');
  if (speechModeUserSetting) {
    setVoice(speechModeUserSetting)
  }

  // Put HOLD instruction into the DOM
  document.getElementById("instructionDisplayArea").innerHTML = "hold..."
  if (speechModeUserSetting) {
    speech.text = "hold";
    window.speechSynthesis.speak(speech);
  }
  // Reset the counter in the DOM
  document.getElementById("holdOutCountArea").innerHTML = "_";

  // Reset seconds
  seconds = 0;
  // Initialize the timer
  holdOutTimer = setInterval(countHoldOut, interval);
}
// Function to count the HOLD and put seconds into DOM
function countHoldOut() {
  ++seconds;
  if (seconds !== 4) {
    document.getElementById("holdOutCountArea").innerHTML = seconds;
  } else { // When 4 seconds have elapsed
    document.getElementById("holdOutCountArea").innerHTML = "4";
    clearInterval(holdOutTimer);
    
    // Clone current breathing cycle and put it in the DOM to keep track of cycles
    const clone = document.querySelector(".timer-display-area").cloneNode(true);
    document.querySelector(".timer-divs").appendChild(clone);
    
    // Restart the breathing cycle
    breatheIn();
  }
}



// Function to reset the process using the Reset button
function restart() {
  // Swap visibility of begin/restart buttons
  document.getElementById("beginButton").classList.toggle("hidden");
  document.getElementById("restartButton").classList.toggle("hidden");

  // Reset the seconds/instructions in the DOM
  document.getElementById("instructionDisplayArea").innerHTML = "...";
  document.getElementById("breatheInCountArea").innerHTML = "_";
  document.getElementById("holdInCountArea").innerHTML = "_";
  document.getElementById("breatheOutCountArea").innerHTML = "_";
  document.getElementById("holdOutCountArea").innerHTML = "_";

  // Reset second count
  seconds = 0;

  // Stop the timer variable
  clearInterval(breatheInTimer);
  clearInterval(holdInTimer);
  clearInterval(breatheOutTimer);
  clearInterval(holdOutTimer);

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