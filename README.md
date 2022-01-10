# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/coding-bootcamp-testimonials-slider-HN5rRWM6z](https://www.frontendmentor.io/solutions/coding-bootcamp-testimonials-slider-HN5rRWM6z)
- Live Site URL: [coding-bootcamp-sliders.netlify.app](coding-bootcamp-sliders.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript


### What I learned

- Using Javascript to control the slider is a great way to add interactivity to your website.
- Using CSS Grid to create a responsive layout is a great way to create a flexible layout.
- The getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
- The addEventListener() method attaches an event handler to the specified element.
- The classList property returns the class name(s) of an element, as a DOMTokenList object.
- The previousElementSibling property returns the previous element of the specified element, in the same tree level.
- The nextElementSibling property returns the next element of the specified element, in the same tree level.
- The forEach() method calls a function for each element in an array.
- The forEach() method is not executed for empty elements.
- The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.


```js
window.onkeydown = function (e) {
  const key = e.keyCode;
  e.preventDefault();
  if (key === 37) {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
  } else if (key === 39) {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
  }
};

The onkeydown event occurs when the user is pressing a key (on the keyboard).
The preventDefault() method is used to prevent the browser from executing the default action of the selected element
The keyCode property returns the numeric value of the pressed key.
The if statement checks if the key pressed is the left arrow key.
The if statement checks if the key pressed is the right arrow key.
The strict equality operator (===) checks whether its two operands are equal, returning a Boolean result.



```


## Author

- Website - [scriptsandtags.com](https://www.scriptsandtags.com/)
- Frontend Mentor - [@whoiskekeanyway](https://www.frontendmentor.io/profile/whoiskekeanyway)
- Twitter - [@scriptsandtags](https://www.twitter.com/scriptsandtags)



