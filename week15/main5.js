// P (Parameters: whats  coming into the function [input])
// R(Returns: what is the result, what do you end up wtih?)
// E(Examples: play with the idea, write down things that
//   can actually happen)
// P(Psuedo Code: plain English what you want to happen, step by
//   step... think of these questions: 1. What could the user do? 2. What does the user see? 3. What does the user expect?)
/*
link:
P num
R "It's hotter than the sun!! || "Help yourself to a honeycomb Yorkie for the glovebox."
E 2000 is greater than 1000
395 is less than 1000
Psuedo Code
number sqaured
number bigger than 1000 return "its hotter ...""
number less than 1000 return "helo yoursel..."
because im using exponents math.powe makes the most sense to use
*/

function apple(num){

  if (Math.pow(num,2) > 1000) {
    return "It's hotter than the sun!!";
  } else {
    return "Help yourself to a honeycomb Yorkie for the glovebox.";

  }
}
