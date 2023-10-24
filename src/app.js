import "bootstrap";
import "./style.css";

window.onload = function() {
  randomCard();
};

function randomCard() {
  const cardNumber = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const cardSuit = ["♦", "♥", "♠", "♣"];
  document.getElementById("randomNumber").innerHTML =
    cardNumber[Math.floor(Math.random() * cardNumber.length)];
  let suit = cardSuit[Math.floor(Math.random() * cardSuit.length)];
  document.getElementById("randomSuitTop").innerHTML = suit;
  document.getElementById("randomSuitBottom").innerHTML = suit;
  if (suit == "♥" || suit == "♦") {
    return [
      (document.getElementById("randomSuitTop").style.color = "red"),
      (document.getElementById("randomSuitBottom").style.color = "red")
    ];
  } else {
    return [
      (document.getElementById("randomSuitTop").style.color = "black"),
      (document.getElementById("randomSuitBottom").style.color = "black")
    ];
  }
}

window.createRandom = function() {
  randomCard();
};
window.changeSize = function() {
  document.getElementById("cardWhole").style.width =
    document.getElementById("cardWidth").value + "px";
  document.getElementById("cardWhole").style.height =
    document.getElementById("cardHeight").value + "px";
};

setInterval(randomCard, 10000);
