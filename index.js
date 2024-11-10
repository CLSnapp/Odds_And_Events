const addNumButton = document.querySelector("#addNum");
const sortOneButton = document.querySelector("#sortOne");
const sortAllButton = document.querySelector("#sortAll");
const userInput = document.querySelector("#number");
const numberBankDisplay = document.querySelector("#numberBank output");
const evenNumberDisplay = document.querySelector("#evens output");
const oddNumberDisplay = document.querySelector("#odds output");

const state = {
  numberBank: [],
  oddNumbers: [],
  evenNumbers: [],
};

addNumButton.addEventListener("click", (event) => {
  //add number to state.numberBank
  //display number in numberBankDisplay

  event.preventDefault();
  // const number = userInput.value;
  // state.numberBank.push(number);
  addNumToBank();
  displayNumberBank();
});

function addNumToBank() {
  const number = Number.parseInt(userInput.value);

  if (typeof number === "number" && !isNaN(number)) {
    state.numberBank.push(number);
  } else {
    alert("WHOOOAAA THERE NELLLYY, ENTER A VALID NUMBER.");
  }
}

function displayNumberBank() {
  numberBankDisplay.innerHTML = state.numberBank;
}

sortOneButton.addEventListener("click", (event) => {
  event.preventDefault();
  //remove first number from state.numberBank
  //figure out the number is odd or even
  //add to oddNumbers or evenNumbers
  const num = state.numberBank.shift();
  // if (num % 2 == 0) {
  //   state.evenNumbers.push(num);
  // } else {
  //   state.oddNumbers.push(num);
  // }
  sortNumber(num);
  render();
});

sortAllButton.addEventListener("click", (event) => {
  event.preventDefault();
  //move each number from state.numberBank to evenNumbers/oddNumbers
  while (state.numberBank.length > 0) {
    const num = state.numberBank.shift();
    sortNumber(num);
  }
  render();
});

function sortNumber(num) {
  if (num % 2 == 0) {
    state.evenNumbers.push(num);
  } else {
    state.oddNumbers.push(num);
  }
}

function displayEvenNumbers() {
  evenNumberDisplay.innerHTML = state.evenNumbers;
}

function displayOddNumbers() {
  oddNumberDisplay.innerHTML = state.oddNumbers;
}

function render() {
  // //update bankdisplay
  displayNumberBank();
  // update evendisplay
  displayEvenNumbers();
  // update odddisplay
  displayOddNumbers();
}
