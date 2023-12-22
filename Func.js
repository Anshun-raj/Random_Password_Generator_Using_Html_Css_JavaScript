const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/-";

const passBox = document.getElementById("passBox");
const totalChar = document.getElementById("totalChar");
const upperInput = document.getElementById("upper");
const lowerInput = document.getElementById("lower");
const numberInput = document.getElementById("number");
const symbolInput = document.getElementById("symbol");

const getRandomInfo = (dataVal) => {
  return dataVal[Math.floor(Math.random() * dataVal.length)];
};

const generatePass = (password = "") => {
  if (upperInput.checked) {
    password += getRandomInfo(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomInfo(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomInfo(numberSet);
  }
  if (symbolInput.checked) {
    password += getRandomInfo(symbolSet);
  }
  if (password.length < totalChar.value) {
    return generatePass(password);
  }
  passBox.innerText = truncateString(password, totalChar.value);
};

generatePass();

document.getElementById("btn").addEventListener("click", function () {
  generatePass();
});

function truncateString(str, num) {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
}
