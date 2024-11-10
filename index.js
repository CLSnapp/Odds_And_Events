const addNumButton = document.querySelector("#addNum");
const sortOneButton = document.querySelector("#sortOne");
const sortAllButton = document.querySelector("sortAll");
const userInput = document.querySelector("#number");
const numberBankDisplay = document.querySelector("#numberBank output");

const state = {
  numberBank: [],
  oddNumbers: [],
  evenNumbers: [],
};

addNumButton.addEventListener("click", (event) => {
  //add number to state.numberBank
  //display number in numberBankDisplay

  event.preventDefault();
  const number = userInput.value;
  state.numberBank.push(number);
  console.log("numberBank" , state.numberBank);
  displayNumberBank();
  
});

function displayNumberBank() {
  numberBankDisplay.innerHTML = state.numberBank;
}

sortOneButton.addEventListener("click", (event) => {
  //add first number to state.numberBank


  event.preventDefault();

  console.log("sortOne click");

})


// function moveNumber() {
//   const number = state.start.pop();
//   state.target.push(number);
// }

// function renderStartNumber() {
//   const startingNumber = state.start.map("#numberBank") => {
//     const li = document.createElement("li");

//     const button = document.createElement("button");
//     button.textContent = "";
//     li.append(button);

//     button.addEventListener("click", () => {
//       moveNumber();
//       render();
//     });

//     return li;
//   });

//   const startingBank = document.querySelector("#numberBank");
//   startingBank.replaceChildren(...startingNumber);
// }

// sortOneButton.addEventListener("click", function (event) {
//     state.start.sort((a, b) => a - b);
//     render();
// });

// sortAllButton.addEventListener("click", function (event) {
//     state.start.sort((a, b) => a - b);
//     render();
// });
