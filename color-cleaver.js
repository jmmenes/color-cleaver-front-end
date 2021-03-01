const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");

const getInput = require("./get-input.js");

// Your code here!

/* 1. The first thing we need to do is grab our users' input. There might be as many as two, 
so grab two `getInput` return values and put them in variables.*/
const color1 = getInput(1);
const color2 = getInput(2);

/* 2. Now we'll need to take into account that some of those values might be `undefined`. 
Note that that's not the literal letters "undefined", it's a value--no quotes! We'll want 
to send them a message if BOTH are `undefined`; that means they didn't put even a single color in. */

if (color1 === undefined && color2 === undefined) {
  console.log("Need to input at least one valid color.");
}

/* 3.  If there is ONE color, we want to pass it to `colorDeconstructor`, take the return 
value (e.g., 'red and yellow'), and put it into a sentence that tells them the result 
in a user-friendly way. */

if (color1 === isValidPrimary && color2 === undefined) {
  console.log("Need to input at least one valid color.");
}

/* 4.  If there were TWO colors, then we want to get the return value from `colorCombinator` 
(passing in both of the users' colors) and put THAT in a sentence.



5.  Oh, but _of course_ there's one more thing: the user's input might not be `undefined`, 
but that doesn't mean they're _colors_. Use your `isValid` functions from the backend 
so that, if you're dealing with one color, you send them a message if it's not a 
primary color, and if you're dealing with two colors, you send them a message if 
EITHER isn't a secondary color. */
