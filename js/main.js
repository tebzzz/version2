// Logic for showing ABOUT section
document.getElementById('aboutButton').addEventListener('click', showAboutText);
function showAboutText() {
  document.querySelector('.about-text').classList.toggle('hidden');

  if (!document.querySelector('.settings-section').classList.contains('hidden')) {
    document.querySelector('.settings-section').classList.toggle('hidden');
  }
}

// Logic for showing SETTINGS section
document.getElementById('settingsButton').addEventListener('click', showSettings);
function showSettings() {
  document.querySelector('.settings-section').classList.toggle('hidden');

  if (!document.querySelector('.about-text').classList.contains('hidden')) {
    document.querySelector('.about-text').classList.toggle('hidden');
  }
}

// Logic for toggling dark mode, setting up local storage to save setting
document.getElementById('darkModeCheckbox').addEventListener('change', toggleDarkMode);
let darkModeUserSetting = localStorage.getItem('darkMode');
if (darkModeUserSetting === 'true') {
  document.getElementById('darkModeCheckbox').checked = true;
  document.querySelector('body').classList.add('dark-mode');
  document.querySelector('body').classList.remove('light-mode');
} else if (darkModeUserSetting === 'false') {
  document.getElementById('darkModeCheckbox').checked = false;
  document.querySelector('body').classList.add('light-mode');
  document.querySelector('body').classList.remove('dark-mode');
}
function toggleDarkMode() {
  if (document.getElementById('darkModeCheckbox').checked) {
    document.querySelector('body').classList.toggle('light-mode');
    document.querySelector('body').classList.toggle('dark-mode');
    localStorage.setItem('darkMode', true);
  } else {
    document.querySelector('body').classList.toggle('light-mode');
    document.querySelector('body').classList.toggle('dark-mode');
    localStorage.setItem('darkMode', false);
  }
}

// Logic for toggling speech mode, setting up local storage to save setting
if (!navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/iPhone/i)) {
  document.getElementById('speechModeCheckboxMasc').addEventListener('change', toggleSpeechModeMasc);
  document.getElementById('speechModeCheckboxFem').addEventListener('change', toggleSpeechModeFem);

  let speechModeUserSetting = localStorage.getItem('speechMode');
  if (speechModeUserSetting === 'masc') {
    document.getElementById('speechModeCheckboxMasc').checked = true;
    document.getElementById('speechModeCheckboxFem').checked = false;
  } else if (speechModeUserSetting === 'fem') {
    document.getElementById('speechModeCheckboxMasc').checked = false;
    document.getElementById('speechModeCheckboxFem').checked = true;
  } else {
    document.getElementById('speechModeCheckboxMasc').checked = false;
    document.getElementById('speechModeCheckboxFem').checked = false;
  }
} else {
  document.querySelector('.speech-setting').classList.add('hidden');
}

function toggleSpeechModeMasc() {
  // Uncheck fembox
  if (document.getElementById('speechModeCheckboxFem').checked) {
    document.getElementById('speechModeCheckboxFem').checked = false;
  }
  // If the mascbox has been checked
  if (document.getElementById('speechModeCheckboxMasc').checked) {
    localStorage.setItem('speechMode', 'masc');
  } else { // If the mascbox has been unchecked
    localStorage.removeItem('speechMode');
  }
}
function toggleSpeechModeFem() {
  // Uncheck mascbox
  if (document.getElementById('speechModeCheckboxMasc').checked) {
    document.getElementById('speechModeCheckboxMasc').checked = false;
  }
  // If the fembox has been checked
  if (document.getElementById('speechModeCheckboxFem').checked) {
    localStorage.setItem('speechMode', 'fem');
  } else { // If the fembox has been unchecked
    localStorage.removeItem('speechMode');
  }
}
