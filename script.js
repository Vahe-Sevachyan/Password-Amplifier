const phraseInput = document.querySelector("#uniquePhrase");
const domainInput = document.querySelector("#domainName");
const generateBtn = document.querySelector(".generate");
const reset = document.querySelector(".reset");
const resetBtn = document.querySelector(".reset");
const cautionMessage = document.querySelector(".cautionMessage");
const passResult = document.getElementById("pass");
const input = document.querySelector("#myInput");
const copyBtn = document.querySelector(".copyBtn");
//regex for empty string or just white space
function hasWhiteSpace(value) {
  return /^\s*$/.test(value);
}
generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validate(phraseInput, domainInput);
});
//validates if empty string or white spaces only

const validate = (phrase, url) => {
  // checkLength(phrase);
  if (
    hasWhiteSpace(phrase.value) === true ||
    hasWhiteSpace(url.value) === true
  ) {
    cautionMessage.innerHTML = "Please provide a valid input";
    cautionMessage.style.color = "red";
    // alert("please enter value");
  } else if (
    hasWhiteSpace(phrase.value) === false &&
    hasWhiteSpace(url.value) === false
  ) {
    trim(phrase, domainInput);
  }
};
//trims down any white space
const trim = (phrase, url) => {
  const secretPhrase = phrase.value.replace(/ /g, "");
  const urlValue = url.value.replace(/ /g, "");
  lowerCase(secretPhrase, urlValue);
};
//converts all to lower case
const lowerCase = (phrase, url) => {
  const secretPhrase = phrase.toLowerCase();
  let urlValue = url.toLowerCase();
  scramble(secretPhrase, stripUrl(urlValue));
};

//strips down url
const stripUrl = (url) => {
  let match = url.replace(/.+\/\/|www.|\..+/g, "");
  return match;
};

//adds numbers to begging and end of string
const scramble = (phrase, url) => {
  cautionMsg(phrase, url);
  let passPhrase = phrase.split("").reverse();
  let URL = url.split("").reverse();
  const phraseLength = phrase.length * 7;
  const urlLength = url.length * 11;
  const combinedLength = urlLength * phraseLength;
  let phraseIndex0 = passPhrase[0];
  URL[1] = phraseIndex0.toUpperCase();
  let urlLastIndex = URL[URL.length - 1];
  passPhrase[0] = urlLastIndex.toUpperCase();
  if (passPhrase.length > 2 && URL.length > 2) {
    passPhrase[2] = URL[1];
    passPhrase[1] = URL[2];
    URL[URL.length - 1] = passPhrase[passPhrase.length - 1];
    URL[URL.length - 2] = passPhrase[passPhrase.length - 2];
  }
  let obliterated = [
    phraseLength,
    "$",
    ...passPhrase,
    "@",
    combinedLength,
    "#",
    ...URL,
    "!",
    urlLength,
    "%",
  ].join("");
  document.getElementById("myInput").value = obliterated;
};

const cautionMsg = (pass, url) => {
  cautionMessage.style.color = "white";
  cautionMessage.innerHTML = `Your password is based the values {${pass}} and {${url}}.
  To get the same results use those same exact values.`;
};

copyBtn.onclick = (e) => {
  e.preventDefault();
  input.select();
  input.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(input.value);
  alert("Copied: " + input.value);
};

reset.onclick = () => {
  input.value = null;
  phraseInput.value = null;
  domainInput.value = null;
  cautionMessage.innerHTML = "";
};
