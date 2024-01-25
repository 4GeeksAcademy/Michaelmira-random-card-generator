/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateCard() {
    const suite = ["♥", "♠", "♦", "♣"];
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
      "J",
      "Q",
      "K",
      "A"
    ];
    const suiteIndex = Math.floor(Math.random() * suite.length);
    const cardIndex = Math.floor(Math.random() * card.length);

    const suitElement = document.getElementById("suit");
    const suitTwoElement = document.getElementById("suitTwo");

    suitElement.style.color = "black";
    suitTwoElement.style.color = "black";

    suitElement.textContent = suite[suiteIndex];
    suitTwoElement.textContent = suite[suiteIndex];

    const cardRankingElement = document.getElementById("cardRanking");
    cardRankingElement.textContent = card[cardIndex];

    if (suite[suiteIndex] === "♥" || suite[suiteIndex] === "♦") {
      suitElement.style.color = "red";
      suitTwoElement.style.color = "red";
    }
    return console.log(
      [suite[suiteIndex]],
      [card[cardIndex]],
      [suite[suiteIndex]]
    );
  }
  generateCard();
  const generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", generateCard);
};

// 1. make 2 arrays one with card suites and one identifying cards Complete
// 2. write a code function using math random to randomly pick a suit. 4 options. Complete
// 2b. test and return results to console. Complete
// 3. write a code function using math random to randomly pick a card. 14 options. Complete
// 4. write another function to input results into a sample function. return suitA cardB suitA. Complete
// 5. transfer results to html using id. Complete
// 6. upload suite icons Complete
// 6b. Make the Heart and Diamond show up as red BEFORE printing Complete
// 7. create button to continue randomizing more cards instead of refreshing page
