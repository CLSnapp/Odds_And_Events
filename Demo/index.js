const form = document.querySelector("form");
const clear = document.getElementById("clear");
const sort = document.getElementById("form");
const output = document.querySelector("#names output");
const arrNames = [];

const printAllNames = () => {
    output.innerHTML = arrNames;
};

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  // console.log(data.get("first_name"));
  // console.log(data.get("last_name"));
  arrNames.push(`${data.get("first_name")} ${data.get("last_name")}`);
  // console.log(arrNames);
  printAllNames();
});

clear.addEventListener("click", function (event) {
  output.innerHTML = "";
});

clear.addEventListener("click", function (event) {
  arrNames.sort();
  printAllNames();
});

const arr = [10, 9, 64, 430];
console.log(arr.sort((a, b) => a - b));
// if(a <= b){
//     return a
// }else{
//     return b
// }