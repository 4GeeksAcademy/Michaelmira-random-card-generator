/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateCard() {}

  const suite = ["hearts", "spade", "diamond", "clubs"];
  const card = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "jack",
    "queen",
    "king",
    "ace"
  ];
  const suiteIndex = Math.floor(Math.random() * suite.length);

  return console.log(suite[suiteIndex]);
};

// 1. make 2 arrays one with card suites and one identifying cards
// 2. write a code function using math random to randomly pick a suit. 4 options.
// 3. write a code function using math random to randomly pick a card. 14 options.
// 4. write another function to input results into a sample function. return suitA cardB suitA.
// 5. transfer results to html using id.
// 6. upload suite icons
