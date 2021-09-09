const phraseInput = document.querySelector("#uniquePhrase");
const domainInput = document.querySelector("#domainName");
const generateBtn = document.querySelector(".generate");
const resetBtn = document.querySelector(".reset");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  trim(phraseInput, domainInput);
});
//removes all spaces
const trim = (phrase, url) => {
  const secretPhrase = phrase.value.replace(/ /g, "");
  const urlValue = url.value.replace(/ /g, "");
  lowerCase(secretPhrase, urlValue);
};
//makes inputs all lower case
const lowerCase = (phrase, url) => {
  const secretPhrase = phrase.toLowerCase();
  const urlValue = url.toLowerCase();
  lengthFunction(secretPhrase, urlValue);
};
//adds numbers to begging and end of string
const lengthFunction = (phrase, url) => {
  const phraseLength = phrase.length;
  const urlLength = url.length;
  const combined = urlLength * phraseLength;
  let secretPhrase = phrase.concat(combined);
  console.log(secretPhrase);
  //   secretPhrase = phraseLength + secretPhrase;
  indexFunction(secretPhrase, url);
  //   console.log(secretPhrase);
};

const indexFunction = (phrase, url) => {
  let index0ofDomain = url.charAt(0).toLowerCase();
  let index1ofDomain = url.charAt(1).toUpperCase();
  let secretPhrase = phrase.split("");
  let split = secretPhrase.splice(0, 3);
  let split2 = secretPhrase.splice(3, 5);
  secretPhrase = split2 + split;
  //   secretPhrase[0] = `${index0ofDomain}$${secretPhrase.length * 1}`;
  secretPhrase[1] = `${index1ofDomain}&*${secretPhrase.length * 2}`;
  secretPhrase[2] = `${index0ofDomain}!%${secretPhrase.length * 3}`;
  secretPhrase[3] = `${index1ofDomain}@#${secretPhrase.length * 4}`;
  reverse(secretPhrase);
};

const reverse = (phrase) => {
  let revPhrase = phrase.reverse().join("");
  revPhrase[0] + `#${phrase.length * 2}`;
  revPhrase[1] + `@${phrase.length * 4}`;
  revPhrase[3] + `$${phrase.length * 6}`;

  console.log(revPhrase);
};
