/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const suits = ["♥", "♠", "♦", "♣"];
  const cards = [
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
  function generateCard() {
    const suitsIndex = Math.floor(Math.random() * suits.length);
    const cardsIndex = Math.floor(Math.random() * cards.length);

    const suitsElement = document.getElementById("suits");
    const suitsTwoElement = document.getElementById("suitsTwo");

    suitsElement.style.color = "black";
    suitsTwoElement.style.color = "black";

    suitsElement.textContent = suits[suitsIndex];
    suitsTwoElement.textContent = suits[suitsIndex];

    const cardsRankingElement = document.getElementById("cardsRanking");
    cardsRankingElement.textContent = cards[cardsIndex];

    if (suits[suitsIndex] === "♥" || suits[suitsIndex] === "♦") {
      suitsElement.style.color = "red";
      suitsTwoElement.style.color = "red";
    }
    return console.log(
      [suits[suitsIndex]],
      [cards[cardsIndex]],
      [suits[suitsIndex]]
    );
  }
  generateCard();
  const generateButton = document.getElementById("generateButton");
  generateButton.addEventListener("click", generateCard);

  let allCards = [];

  for (let suit of suits) {
    for (let card of cards) {
      allCards.push(`${suit}${card}`);
    }
  }
  console.log(allCards);

  const cardIds = ["myCardOne", "myCardTwo", "myCardFour", "myCardFive"];
  const pokerButton = document.getElementById("pokerButton");
  pokerButton.addEventListener("click", toggleCard);
  pokerButton.addEventListener("click", generatePokerHand);

  function toggleCard() {
    for (const cardId of cardIds) {
      const card = document.getElementById(cardId);
      card.classList.toggle("bg-success");
      card.classList.toggle("bg-white");
    }
  }

  function generatePokerHand() {
    const allCardsIndex = Math.floor(Math.random() * allCards.length);
    const allCardsIndexTwo = Math.floor(Math.random() * allCards.length);
    const allCardsIndexThree = Math.floor(Math.random() * allCards.length);
    const cardOneSuitOneElement = document.getElementById("cardOneSuitOne");
    const cardOneSuitTwoElement = document.getElementById("cardOneSuitTwo");
    const cardOneRankingElement = document.getElementById("cardOneRanking");
    const cardTwoSuitOneElement = document.getElementById("cardTwoSuitOne");
    const cardTwoSuitTwoElement = document.getElementById("cardTwoSuitTwo");
    const cardTwoRankingElement = document.getElementById("cardTwoRanking");
    const cardFourSuitOneElement = document.getElementById("cardFourSuitOne");
    const cardFourSuitTwoElement = document.getElementById("cardFourSuitTwo");
    const cardFourRankingElement = document.getElementById("cardFourRanking");

    const suit = allCards[allCardsIndex][0];
    const suitResult2 = allCards[allCardsIndexTwo][0];
    const suitResult3 = allCards[allCardsIndexThree][0];
    const ranking = allCards[allCardsIndex][1];
    const rankingResult2 = allCards[allCardsIndexTwo][1];
    const rankingResult3 = allCards[allCardsIndexThree][1];

    cardOneSuitOneElement.textContent = suit;
    cardOneSuitTwoElement.textContent = suit;
    cardOneRankingElement.textContent = ranking;
    cardTwoSuitOneElement.textContent = suitResult2;
    cardTwoSuitTwoElement.textContent = suitResult2;
    cardTwoRankingElement.textContent = rankingResult2;
    cardFourSuitOneElement.textContent = suitResult3;
    cardFourSuitTwoElement.textContent = suitResult3;
    cardFourRankingElement.textContent = rankingResult3;

    if (suit === "♥" || suit === "♦") {
      cardOneSuitOneElement.style.color = "red";
      cardOneSuitTwoElement.style.color = "red";
    } else {
      cardOneSuitOneElement.style.color = "black";
      cardOneSuitTwoElement.style.color = "black";
    }

    return console.log([allCards[allCardsIndex]]);
  }
};

// 1. make 2 arrays one with card suits and one identifying cards Complete
// 2. write a code function using math random to randomly pick a suit. 4 options. Complete
// 2b. test and return results to console. Complete
// 3. write a code function using math random to randomly pick a card. 14 options. Complete
// 4. write another function to input results into a sample function. return suitA cardB suitA. Complete
// 5. transfer results to html using id. Complete
// 6. upload suite icons Complete
// 6b. Make the Heart and Diamond show up as red BEFORE printing Complete
// 7. create button to continue randomizing more cards instead of refreshing page Completed
// 8. Lets make another button that says Draw Poker Completed
// 9. Refactor index.html to include 5 cards with 3rd card only visible until poker button pressed. Completed
// 10. Using card generator make arry with exact amount of cards in a deck. Completed
// 11. make a new function to pull a random card out of the new deck array. and place it to cardOne.
// 12. erase card from deck. so that it can not be pulled a second time.
// 13. make Draw buttons under each card.
