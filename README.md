# Lab 11 - Adding to an Array

_Add elements to an array interactively. Comment a sketch_


In this lab you will modify a sample sketch so that each time the mouse is clicked inside the canvas, a new moving dot appears. Initially, there is a single dot that starts at the center of the canvas and then starts moving and bouncing off the walls. This sketch looks like some of the other examples and is based on a very simple class constructor called "Dot." The array in this sketch is called "dots" and starts off with only one element. 

If you scroll down (in `script.js`), you will find the function `mousePressed()`. Inside that function's curly brackets you will see a line of code that generates a `new Dot()` based on the current location of the mouse `(mouseX, mouseY)`. This code will execute ***once*** each time the mouse is clicked. 

The problem is that nothing interesting happens yet. Your job is to **add** that new Dot object to the "`dots`" array by adding one line to the `mousePressed()` function. 

There is a built-in method for all arrays that will append a new element to an array, called `.push()`. You may need to read some JavaScript documentation on the `Array.push()` method to make sure you are using it properly: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

**NOTE:** the `Array.push()` method is different from the P5 `push()` function (which creates a drawing layer and is paired with `pop()`). This method is appended to the _name_ of the array and takes as an _argument_ something to add to the array.

## Instructions

1. **Add a line of code to `mousePressed()`** that appends a new Dot object to the array. There is already a line that creates a new Dot.
2. **Add comments to each line of this sketch** explaining what is happening. **Seriously**, add a comment to _every_ line of code.

### When you're done

* **Commit** your changes on GitHub as "Lab 11 submitted"
* download as .zip, attach and include link on **Sakai**.