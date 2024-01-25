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
      card.classList.remove("bg-success");
      card.classList.add("bg-white");
    }
  }

  function generatePokerHand() {
    const allCardsIndex = Math.floor(Math.random() * allCards.length);
    const allCardsIndexTwo = Math.floor(Math.random() * allCards.length);
    const allCardsIndexThree = Math.floor(Math.random() * allCards.length);
    const allCardsIndexFour = Math.floor(Math.random() * allCards.length);
    const allCardsIndexFive = Math.floor(Math.random() * allCards.length);
    const cardOneSuitOneElement = document.getElementById("cardOneSuitOne");
    const cardOneSuitTwoElement = document.getElementById("cardOneSuitTwo");
    const cardOneRankingElement = document.getElementById("cardOneRanking");
    const cardTwoSuitOneElement = document.getElementById("cardTwoSuitOne");
    const cardTwoSuitTwoElement = document.getElementById("cardTwoSuitTwo");
    const cardTwoRankingElement = document.getElementById("cardTwoRanking");
    const cardFourSuitOneElement = document.getElementById("cardFourSuitOne");
    const cardFourSuitTwoElement = document.getElementById("cardFourSuitTwo");
    const cardFourRankingElement = document.getElementById("cardFourRanking");
    const cardFiveSuitOneElement = document.getElementById("cardFiveSuitOne");
    const cardFiveSuitTwoElement = document.getElementById("cardFiveSuitTwo");
    const cardFiveRankingElement = document.getElementById("cardFiveRanking");
    const suitsElement = document.getElementById("suits");
    const suitsTwoElement = document.getElementById("suitsTwo");
    const cardsRankingElement = document.getElementById("cardsRanking");

    const suit = allCards[allCardsIndex][0];
    const suitResult2 = allCards[allCardsIndexTwo][0];
    const suitResult3 = allCards[allCardsIndexThree][0];
    const suitResult4 = allCards[allCardsIndexFour][0];
    const suitResult5 = allCards[allCardsIndexFive][0];
    const ranking = allCards[allCardsIndex][1];
    const rankingResult2 = allCards[allCardsIndexTwo][1];
    const rankingResult3 = allCards[allCardsIndexThree][1];
    const rankingResult4 = allCards[allCardsIndexFour][1];
    const rankingResult5 = allCards[allCardsIndexFive][1];

    cardOneSuitOneElement.textContent = suit;
    cardOneSuitTwoElement.textContent = suit;
    cardOneRankingElement.textContent = ranking;
    cardTwoSuitOneElement.textContent = suitResult2;
    cardTwoSuitTwoElement.textContent = suitResult2;
    cardTwoRankingElement.textContent = rankingResult2;
    cardFourSuitOneElement.textContent = suitResult3;
    cardFourSuitTwoElement.textContent = suitResult3;
    cardFourRankingElement.textContent = rankingResult3;
    cardFiveSuitOneElement.textContent = suitResult4;
    cardFiveSuitTwoElement.textContent = suitResult4;
    cardFiveRankingElement.textContent = rankingResult4;
    suitsElement.textContent = suitResult5;
    suitsTwoElement.textContent = suitResult5;
    cardsRankingElement.textContent = rankingResult5;

    if (suit === "♥" || suit === "♦") {
      cardOneSuitOneElement.style.color = "red";
      cardOneSuitTwoElement.style.color = "red";
      cardTwoSuitOneElement.style.color = "red";
      cardTwoSuitTwoElement.style.color = "red";
      suitsElement.style.color = "red";
      suitsTwoElement.style.color = "red";
      cardFourSuitOneElement.style.color = "red";
      cardFourSuitTwoElement.style.color = "red";
      cardFiveSuitOneElement.style.color = "red";
      cardFiveSuitTwoElement.style.color = "red";
    } else {
      cardOneSuitOneElement.style.color = "black";
      cardOneSuitTwoElement.style.color = "black";
      cardTwoSuitOneElement.style.color = "black";
      cardTwoSuitTwoElement.style.color = "black";
      suitsElement.style.color = "black";
      suitsTwoElement.style.color = "black";
      cardFourSuitOneElement.style.color = "black";
      cardFourSuitTwoElement.style.color = "black";
      cardFiveSuitOneElement.style.color = "black";
      cardFiveSuitTwoElement.style.color = "black";
    }

    generateButton.style.display = "none";

    console.log("this is it");

    return console.log([
      [suit, ranking],
      [suitResult2, rankingResult2],
      [suitResult3, rankingResult3],
      [suitResult4, rankingResult4],
      [suitResult5, rankingResult5]
    ]);
    // console.log("this is it")
    // const firstCardResult =
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
// 11. make a new function to pull a random card out of the new deck array. and place it to cardOne. Completed
// 11.B Create 5 Random cards at the same time. Completed
// 12. get the chosen 5 cards and put them into an array Completed
// 12. erase the 5 cards from deck. so that it can not be pulled a second time.
// 13. make Draw buttons under each card.
// 14. Cards are all turning red or black no just one need fix
