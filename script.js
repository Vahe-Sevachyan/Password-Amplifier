const phraseInput = document.querySelector("#uniquePhrase");
const domainInput = document.querySelector("#domainName");
const generateBtn = document.querySelector(".generate");
const resetBtn = document.querySelector(".reset");

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
    alert("please enter value");
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
  // domainCheck(secretPhrase, urlValue);
};
//add a display message informing the user which domain was provided but which part of was used and for future reference they can only use strip down version.

//strips down url
const stripUrl = (url) => {
  let match = url.replace(/.+\/\/|www.|\..+/g, "");
  return match;
};

//adds numbers to begging and end of string
const scramble = (phrase, url) => {
  let passPhrase = phrase.split("").reverse();
  let URL = url.split("").reverse();
  const phraseLength = phrase.length * 7;
  const urlLength = url.length * 11;
  const combinedLength = urlLength * phraseLength;
  let phraseIndex0 = passPhrase[0];
  // URL[0] = phraseIndex0.toUpperCase();
  URL[1] = phraseIndex0.toUpperCase();
  let urlLastIndex = URL[URL.length - 1];
  // let urlSecLastIndex = URL[URL.length - 2];
  passPhrase[0] = urlLastIndex.toUpperCase();
  // passPhrase[1] = urlSecLastIndex.toLowerCase();
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
  // upperCase(obliterated);
  console.log(obliterated);
};

//refactor bottom two reverse functions into one forEach
// const reverseValues = (url, phrase) => {
//   const URL = url.split("").reverse().join("");
//   const passPhrase = phrase.split("").reverse().join("");
// };
// const reverseURL = (url) => {
//   const URL = url.split("").reverse().join("");
//   if (URL.length <= 2) {
//     const newURL = URL.slice(1) + url.slice(0, 1);
//     console.log(newURL);
//     // let finishedURL = newURL.split("").join("");
//     return newURL;
//   }
//   if (URL.length >= 3) {
//     let newURL = URL.slice(3) + URL.slice(0, 3);
//     // let finishedURL = newURL.split("").join("");
//     console.log(newURL);
//     // console.log(newURL);
//     return newURL;
//   }
// };
// const reversePhrase = (phrase) => {
//   const passPhrase = phrase.split("").reverse();
//   if (passPhrase.length <= 2) {
//     const newPhrase = passPhrase.slice(1) + passPhrase.slice(0, 1);
//     // let finishedPhrase = newPhrase.split("").join("");
//     // console.log(newPhrase);
//     return newPhrase;
//   }
//   if (passPhrase.length >= 3) {
//     const newPhrase = passPhrase.slice(3) + passPhrase.slice(0, 3);
//     console.log(newPhrase);
//     // let finishedPhrase = newPhrase.split("").join("");
//     return newPhrase;
//   }
// };
// let newPhrase = "!" + passPhrase.slice(0, 3) + "$" + passPhrase.slice(3);
// newPhrase = newPhrase.split("");
// const toUpperCase = (url) => {
//   let URL = url;
//   for (let i = 0; i < URL.length; i += 2) {
//     let UcaseUrl = URL[i].toUpperCase;
//     return UcaseUrl;
//   }
// };

// const upperCase = (phrase) => {
//   let passPhrase = phrase;
//   for (let i = 0; i < passPhrase.length; i += 2) {
//     if (passPhrase[i].typeof === "string") {
//       return passPhrase[i].toUpperCase;
//     }
//     console.log(passPhrase);
//   }
// };

// const injectingValues = (phrase) => {
//   let passPhrase = phrase;
//   passPhrase = passPhrase[2].toUpperCase();
// };

// const indexFunction = (phrase, url) => {
//   let index0ofDomain = url.charAt(0).toLowerCase();
//   let index1ofDomain = url.charAt(1).toUpperCase();
//   let secretPhrase = phrase.split("");
//   let split = secretPhrase.splice(0, 3);
//   let split2 = secretPhrase.splice(3, 5);
//   secretPhrase = split2 + split;
//   //   secretPhrase[0] = `${index0ofDomain}$${secretPhrase.length * 1}`;
//   secretPhrase[1] = `${index1ofDomain}&*${secretPhrase.length * 2}`;
//   secretPhrase[2] = `${index0ofDomain}!%${secretPhrase.length * 3}`;
//   secretPhrase[3] = `${index1ofDomain}@#${secretPhrase.length * 4}`;
//   reverse(secretPhrase);
// };

// let secretPhrase = combinedLength + phrase.concat(phraseLength, urlLength);
// secretPhrase = combinedLength + phrase.concat(phraseLength, urlLength);
//  secretPhrase =
// secretPhrase = secretPhrase.split("").reverse();
// console.log(secretPhrase);
//   secretPhrase = phraseLength + secretPhrase;
// indexFunction(secretPhrase, url);
//   console.log(secretPhrase);
// empty string or string with white space
// function hasWhiteSpace(value) {
//   return /^$|\s+/.test(value);
// }

// function consoleLog(value) {
//   console.log(value);
// }
// const reverse = (phrase) => {
//   let revPhrase = phrase.reverse().join("");
//   revPhrase[0] + `#${phrase.length * 2}`;
//   revPhrase[1] + `@${phrase.length * 4}`;
//   revPhrase[3] + `$${phrase.length * 6}`;

//   console.log(revPhrase);
// };
