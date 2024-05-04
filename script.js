const h1 = document.createElement("h1");
const p = document.createElement("p");
const heading = document.createElement("div");
h1.innerHTML = "DOM Manipulation";
h1.id = "title";
p.innerHTML = "A simple calculator using DOM";
p.id = "description";
heading.classList = "heading";
heading.appendChild(h1);
heading.appendChild(p);
document.body.append(heading);

const outputScreen = document.createElement("div");
outputScreen.classList = "flexdisplay";
document.body.append(outputScreen);

const container = document.createElement("div");
container.classList = "head";
container.id = "keys";
outputScreen.append(container);

const inputDisplay = document.createElement("input");
inputDisplay.setAttribute("readonly", true);
inputDisplay.classList = "screen";
inputDisplay.id = "result";
inputDisplay.value = "0";
container.append(inputDisplay);


const clear = document.createElement("button");
clear.value = "c";
clear.classList = "operation";
clear.style.color = "red";
clear.innerHTML = "c";
clear.id = "clear";
container.append(clear);


const back = document.createElement("button");
back.value = "<-";
back.classList = "operation";
back.id = "back";
back.innerHTML = "←";
container.append(back);

const dot = document.createElement("button");
dot.value = ".";
dot.classList = "operation";
dot.id = "dot";
dot.innerHTML = ".";
container.append(dot);


const multi = document.createElement("button");
multi.value = "*";
multi.classList = "operation";
multi.id = "multi";
multi.innerHTML = "*";
container.append(multi);

const seven = document.createElement("button");
seven.value = "7";
seven.id = "7";
seven.innerHTML = "7";
container.append(seven);

const eight = document.createElement("button");
eight.value = "8";
eight.id = "8";
eight.innerHTML = "8";
container.append(eight);


const nine = document.createElement("button");
nine.value = "9";
nine.id = "9";
nine.innerHTML = "9";
container.append(nine);


const division = document.createElement("button");
division.value = "/";
division.classList = "operation";
division.id = "division";
division.innerHTML = "/";
container.append(division);


const four = document.createElement("button");
four.value = "4";
four.id = "4";
four.innerHTML = "4";
container.append(four);

const five = document.createElement("button");
five.value = "5";
five.id = "5";
five.innerHTML = "5";
container.append(five);

const six = document.createElement("button");
six.value = "6";
six.id = "6";
six.innerHTML = "6";
container.append(six);

const sub = document.createElement("button");
sub.value = "-";
sub.classList = "operation";
sub.id = "subtract";
sub.innerHTML = "-";
container.append(sub);

const one = document.createElement("button");
one.value = "1";
one.id = "1";
one.innerHTML = "1";
container.append(one);

const two = document.createElement("button");
two.value = "2";
two.id = "2";
two.innerHTML = "2";
container.append(two);

const three = document.createElement("button");
three.value = "3";
three.id = "3";
three.innerHTML = "3";
container.append(three);

const add = document.createElement("button");
add.value = "+";
add.classList = "operation";
add.id = "add";
add.innerHTML = "+";
container.append(add);

const zero = document.createElement("button");
zero.value = "0";
zero.id = "0";
zero.innerHTML = "0";
container.append(zero);

const dlZero = document.createElement("button");
dlZero.value = "00";
dlZero.id = "00";
dlZero.innerHTML = "00";
container.append(dlZero);

const equal = document.createElement("button");
equal.value = "=";
equal.classList = "operation";
equal.classList = "grid";
equal.id = "equal";
equal.innerHTML = "=";
container.append(equal);


//Calculator program

const result = document.querySelector("#result");
const buttons = document.querySelectorAll("button");
const specialChar = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  //console.log(btnValue);
  if (btnValue === "=" && btnValue !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "c") {
    output = "";
  } else if (btnValue === "<-") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChar.includes(btnValue)) return;
    output += btnValue;
  }
  result.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    calculate(e.target.value);
  });
});

document.keypress = function (e) {
  e = e || window.Event;
  if (
    e.key == "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "0" ||
    e.key === "00" ||
    e.key === "."
  ) {
    calculate(e.key);
  } else {
    alert("Only Numbers are valid");
  }
};
