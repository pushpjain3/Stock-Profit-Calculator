const button = document.querySelector("#input-button");
const inputOldPrice = document.querySelector("#input-old-price");
const inputNewPrice = document.querySelector("#input-curr-price");
const inputQuantity = document.querySelector("#input-number");
const errMsg = document.querySelector(".err");
const resMsg = document.querySelector(".result-text");
var rupee = "\u20B9";

const diffCalculator = (op, np, q) => (np - op) * q;
const percCalculator = (tot, diff) => (diff / tot) * 100;

const clickHandler = () => {
  resMsg.innerText = "The result will appear here.";
  var oldPrice = Number(inputOldPrice.value);
  var newPrice = Number(inputNewPrice.value);
  var quantity = Number(inputQuantity.value);
  if (oldPrice > 0 && newPrice > 0 && quantity > 0) {
    errMsg.innerText = "";
    if (oldPrice == newPrice) {
      resMsg.innerText = "No Gains or Losses";
      return;
    }
    const diff = diffCalculator(oldPrice, newPrice, quantity);
    if (diff > 0) {
      const percentage = percCalculator(oldPrice * quantity, diff);
      resMsg.innerText = `You have gained ${percentage.toFixed(
        2
      )}% Profit of ${rupee}${diff}`;
    } else {
      const percentage = percCalculator(oldPrice * quantity, -1 * diff);
      resMsg.innerText = `You have got ${percentage.toFixed(
        2
      )}% Loss of ${rupee}${-1 * diff}`;
    }
  } else {
    errMsg.innerText = "!! Please Enter valid values !!";
  }
};

button.addEventListener("click", clickHandler);
