# Fade-In-On-Scroll 

## This is a JavaScript application that adds a "hidden" class to HTML elements, and then uses an Intersection Observer to add a "show" class to them when they come into view.

### Functionality
- The initHiddenElements function selects all elements with the class fade-in-on-scroll and adds the class hidden to them. It then sets up an Intersection Observer to observe these elements and adding the class show to them when they reach 50% visibility.

- The oneSecondDelay function sets a delay of 1 second before calling initHiddenElements. This allows the effect to be triggered at a more controlled rate. 

### Usage
To use this application, add the class fade-in-on-scroll to the HTML section elements you want to add the "hidden" and "show" classes to.

### Dependencies
This application uses the Intersection Observer API, which is supported in modern browsers. https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

### License
This project is licensed under the MIT License - see the LICENSE.md file for details

### Note
The app is in development stage and the final version may be different from the current one.

### See more of my apps and projects at 
https://www.jawaragordon.com/
