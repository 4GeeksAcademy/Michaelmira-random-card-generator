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
    const cardsRankingElement = document.getElementById("cardsRanking");

    suitsElement.style.color = "black";
    suitsTwoElement.style.color = "black";

    suitsElement.textContent = suits[suitsIndex];
    suitsTwoElement.textContent = suits[suitsIndex];
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
  let deck = allCards;

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
  pokerButton.addEventListener("click", turnDrawOn);

  function toggleCard() {
    for (const cardId of cardIds) {
      const card = document.getElementById(cardId);
      card.classList.remove("bg-success");
      card.classList.add("bg-white");
    }
  }

  const drawIds = [
    "drawConfirm",
    "cardCounterZone",
    "drawButtonOne",
    "drawButtonTwo",
    "drawButtonThree",
    "drawButtonFour",
    "drawButtonFive"
  ];

  function turnDrawOn() {
    for (const drawId of drawIds) {
      const card = document.getElementById(drawId);
      card.classList.remove("d-none");
    }
  }

  function drawCard() {
    if (allCards.length === 0) {
      const confirmResponse = confirm(
        "No more cards to draw. Would you like to open a new deck?"
      );

      if (confirmResponse) {
        refillDeck();
        return drawCard();
      } else {
        const byeResponse = confirm("Are you sure you want to leave?");

        if (byeResponse) {
          window.close();
        }
      }
    }

    const drawIndex = Math.floor(Math.random() * allCards.length);
    const drawResult = allCards[drawIndex].slice(0, 2);

    allCards.splice(drawIndex, 1);

    return drawResult;
  }

  function refillDeck() {
    allCards = [];
    for (let suit of suits) {
      for (let card of cards) {
        allCards.push(`${suit}${card}`);
      }
    }
  }

  function drawFive() {
    const resultArray = [];

    for (let i = 0; i < 5; i++) {
      const drawnArray = drawCard();
      console.log(resultArray + "resultArray");
      console.log(drawnArray + "drawnArray");
      resultArray.push(drawnArray);
    }

    return resultArray;
  }

  // console.log(resultArray[] )

  function generatePokerHand() {
    const resultArray = drawFive();

    const cardOneSuitOneElement = document.getElementById("cardOneSuitOne");
    const cardOneSuitTwoElement = document.getElementById("cardOneSuitTwo");
    const cardOneRankingElement = document.getElementById("cardOneRanking");
    const cardTwoSuitOneElement = document.getElementById("cardTwoSuitOne");
    const cardTwoSuitTwoElement = document.getElementById("cardTwoSuitTwo");
    const cardTwoRankingElement = document.getElementById("cardTwoRanking");
    const suitsElement = document.getElementById("suits");
    const suitsTwoElement = document.getElementById("suitsTwo");
    const cardsRankingElement = document.getElementById("cardsRanking");
    const cardFourSuitOneElement = document.getElementById("cardFourSuitOne");
    const cardFourSuitTwoElement = document.getElementById("cardFourSuitTwo");
    const cardFourRankingElement = document.getElementById("cardFourRanking");
    const cardFiveSuitOneElement = document.getElementById("cardFiveSuitOne");
    const cardFiveSuitTwoElement = document.getElementById("cardFiveSuitTwo");
    const cardFiveRankingElement = document.getElementById("cardFiveRanking");

    const suitResult = resultArray[0][0];
    const suitResult2 = resultArray[1][0];
    const suitResult3 = resultArray[2][0];
    const suitResult4 = resultArray[3][0];
    const suitResult5 = resultArray[4][0];

    const rankingResult = resultArray[0][1];
    const rankingResult2 = resultArray[1][1];
    const rankingResult3 = resultArray[2][1];
    const rankingResult4 = resultArray[3][1];
    const rankingResult5 = resultArray[4][1];

    console.log(suitResult);

    if (suitResult === "♥" || suitResult === "♦") {
      cardOneSuitOneElement.style.color = "red";
      cardOneSuitTwoElement.style.color = "red";
    } else {
      cardOneSuitOneElement.style.color = "black";
      cardOneSuitTwoElement.style.color = "black";
    }
    console.log(suitResult);
    console.log(suitResult2);

    if (suitResult2 === "♥" || suitResult2 === "♦") {
      cardTwoSuitOneElement.style.color = "red";
      cardTwoSuitTwoElement.style.color = "red";
    } else {
      cardTwoSuitOneElement.style.color = "black";
      cardTwoSuitTwoElement.style.color = "black";
    }

    console.log(suitResult2);
    console.log(suitResult3);

    if (suitResult3 === "♥" || suitResult3 === "♦") {
      suitsElement.style.color = "red";
      suitsTwoElement.style.color = "red";
    } else {
      suitsElement.style.color = "black";
      suitsTwoElement.style.color = "black";
    }
    console.log(suitResult3);
    console.log(suitResult4);

    if (suitResult4 === "♥" || suitResult4 === "♦") {
      cardFourSuitOneElement.style.color = "red";
      cardFourSuitTwoElement.style.color = "red";
    } else {
      cardFourSuitOneElement.style.color = "black";
      cardFourSuitTwoElement.style.color = "black";
    }
    console.log(suitResult4);
    console.log(suitResult5);

    if (suitResult5 === "♥" || suitResult5 === "♦") {
      cardFiveSuitOneElement.style.color = "red";
      cardFiveSuitTwoElement.style.color = "red";
    } else {
      cardFiveSuitOneElement.style.color = "black";
      cardFiveSuitTwoElement.style.color = "black";
    }

    console.log(suitResult5);
    cardOneSuitOneElement.textContent = suitResult;
    cardOneSuitTwoElement.textContent = suitResult;
    cardOneRankingElement.textContent = rankingResult;
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

    const cardCounterElement = document.getElementById("cardCounter");
    cardCounterElement.textContent = `${allCards.length}`;

    generateButton.style.display = "none";

    const drawButtonOne = document.getElementById("drawButtonOne");
    const drawButtonTwo = document.getElementById("drawButtonTwo");
    const drawButtonThree = document.getElementById("drawButtonThree");
    const drawButtonFour = document.getElementById("drawButtonFour");
    const drawButtonFive = document.getElementById("drawButtonFive");
    const drawConfirmButton = document.getElementById("drawConfirm");

    // Function to handle the button click and toggle the "clicked" state
    function handleButtonClickOne() {
      drawButtonOne.classList.toggle("clicked");
      // Call your function here that should release the button // For example: releaseButtonTwo();
    }
    function handleButtonClickTwo() {
      drawButtonTwo.classList.toggle("clicked");
      // Call your function here that should release the button // For example: releaseButtonTwo();
    }
    function handleButtonClickThree() {
      drawButtonThree.classList.toggle("clicked");
      // Call your function here that should release the button // For example: releaseButtonTwo();
    }
    function handleButtonClickFour() {
      drawButtonFour.classList.toggle("clicked");
      // Call your function here that should release the button // For example: releaseButtonTwo();
    }
    function handleButtonClickFive() {
      drawButtonFive.classList.toggle("clicked");
      // Call your function here that should release the button // For example: releaseButtonTwo();
    }

    function drawOne() {
      const cardOneDrawResultArray = [];
      const cardOneDrawnArray = drawCard();
      cardOneDrawResultArray.push(cardOneDrawnArray);
      const suitResultDrawCardOne = cardOneDrawResultArray[0][0];
      const rankingResultDrawCardOne = cardOneDrawResultArray[0][1];

      if (suitResultDrawCardOne === "♥" || suitResultDrawCardOne === "♦") {
        cardOneSuitOneElement.style.color = "red";
        cardOneSuitTwoElement.style.color = "red";
      } else {
        cardOneSuitOneElement.style.color = "black";
        cardOneSuitTwoElement.style.color = "black";
      }

      cardOneSuitOneElement.textContent = suitResultDrawCardOne;
      cardOneSuitTwoElement.textContent = suitResultDrawCardOne;
      cardOneRankingElement.textContent = rankingResultDrawCardOne;
      cardCounterElement.textContent = `${allCards.length}`;

      return cardOneDrawResultArray;
    }
    function handleDrawConfrimButton() {
      if (drawButtonOne.classList.contains("clicked")) {
        drawOne();
      }

      drawButtonOne.classList.remove("clicked");

      drawButtonTwo.classList.remove("clicked");
      drawButtonThree.classList.remove("clicked");
      drawButtonFour.classList.remove("clicked");
      drawButtonFive.classList.remove("clicked");
    }

    // Attach the click event listener to the button
    drawButtonOne.addEventListener("click", handleButtonClickOne);
    drawButtonTwo.addEventListener("click", handleButtonClickTwo);
    drawButtonThree.addEventListener("click", handleButtonClickThree);
    drawButtonFour.addEventListener("click", handleButtonClickFour);
    drawButtonFive.addEventListener("click", handleButtonClickFive);
    drawConfirmButton.addEventListener("click", handleDrawConfrimButton);
  }

  // 1.make draw card function Complete
  // 2.have draw card pull a random card out from deck Complete
  // 3. have same function delete card from deck Complete
  // 4. drawCard 5times using a loop.Complete
  // 5. seperate each card into 5 variables Complete
  // 6. send each card to the hmtl Using Old code send each card to HTML
  // 7. Troubleshoot Why is generate poker button not generating again with multiple clicks
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
// 13. Cards are all turning red or black no just one need fix  <STILL NOT WORKING>
// 14. erase the 5 cards from deck. so that it can not be pulled a second time. Completed
// 15. make Draw buttons under each card. Completed
// 16. card counter complete new deck function completed
// 17. make new draw selected button
// 18. make draw buttons be pressed and stay highlighted
// 19. make function to draw all cards when button is pressed
// 20. drawConfrim button create and have this unclick all draw buttons that are clicked.
// 21. Create a function that when user clicks the drawConfrim button each draw button that is in Clicked state will turn to unclick.
// 22. Have drawConfrim use existing functions to pull and post a new card to the corresponding card above.
