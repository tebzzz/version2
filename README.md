# Breath Guide
Simple, light-weight web app that guides users through multiple different breathing techniques whether on desktop or mobile browsers.

**Link to project:** https://kiefer-dev.github.io/BreathGuide/

![.gif of the 3-4-5 Breath page, showing basic functionality of the web app](https://github.com/kiefer-dev/breath-guide/blob/main/assets/345breathreadme.gif?raw=true)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

As someone who finds great benefit in practicing different types of breathing exercises, I wanted to build a simple web app that offered guided practice of different exercises in the browser. I knew I wanted it lightweight and simple to use, as well as providing a streamlined experience on mobile devices. Having a calming color scheme and the ability to set different options to suit the user was also important to me. I implemented a settings section that allows the user to toggle dark-mode and, if the browser supports it, to turn on synthesized masculine or feminine speech for the breathing instructions. This allows the user to not have to keep their eyes on their screen to be guided in their breaths, but rather have the browser speak the simple instructions to them in real-time. These settings use local storage to remain constant throughout their navigation of the site and if they leave/come back.

## Optimizations

Over time I plan on adding new breathing exercises, and more detailed descriptions of the exercises and their benefits. The JavaScript is spread out over individual files for each different breathing exercise; there is definitely some optimization possible with the logic behind the exercises. Having recently started learning about SOLID principles of programming, I know there are ways that I'd be able to implement these principles into this app's design. Ideally, the breathe-in / hold / breathe-out instructions would be standardized functions in order to be used repeatedly instead of having specific changes per exercise - this is something I plan on returning to at a later date.
I also did all of the layout and design myself - I'm not a designer, so I definitely could have done a better job at styling and layout). I plan on returning to the UI and utilizing React.js components once I have more experience with React.

## Lessons Learned:

JavaScript is an inherently synchronous language, so using intervals/timeouts (asynchronous functions) was a good learning experience. Speech synthesis via the browser is very exciting to me, and implementing it through this web app has given me ideas on how to utilize it in future apps. However, using vanilla JS to accomplish speech synthesis is fairly limited in functionality and I'm excited to delve deeper into more advanced speech synthesis techniques using different technology (such as AWS). I also learned a simple way to detect if the user is accessing the website from a mobile device, using navigator.userAgent.
