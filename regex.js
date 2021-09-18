// empty string or string with white space
function hasWhiteSpace(value) {
  return /^$|\s+/.test(value);
}
//empty string or white space
function hasWhiteSpace(value) {
  return /^\s*$/.test(value);
}

//checks if its a valid url
function validURL(url) {
  let pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(url);
}

const tearApartUrl = (url) => {
  if (url.includes(indexOf(".")) && url.includes(lastIndexOf("."))) {
    let match = url
      .substring(0, url.lastIndexOf("."))
      .substring(url.indexOf(".") + 1);
    return match;
  }
  if (url.includes(indexOf(".") + 1)) {
    let match = url.substring(url.indexOf(".") + 1);
    return match;
  }
  if (url.includes(lastIndexOf("."))) {
    let match = url.substring(0, url.lastIndexOf("."));
    return match;
  }
};

function wHostName(value) {
  return /[\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#\.]?[\w-]+)*\/?/gm.test(
    value
  );
}

let regex =
  /([\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#\.]?[\w-]+)*\/?/gm;

const stripUrl = (url) => {
  let match = url.replace(
    /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim,
    ""
  );
  return match;
};

function getHostName(url) {
  // let match = url.match(
  //   /[\w+]+\:\/\/)?([\w\d-]+\.)*[\w-]+[\.\:]\w+([\/\?\=\&\#\.]?[\w-]+)*\/?/gm
  // );
  let match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);

  if (
    match != null &&
    match.length > 2 &&
    typeof match[2] === "string" &&
    match[2].length > 0
  ) {
    let hostname = match[2].split(".");
    return hostname[0];
  }
}
////strips any URL BOMBAYYY
////strips any URL BOMBAYYY
const stripUrl = (url) => {
  let match = url.replace(/.+\/\/|www.|\..+/g, "");
  return match;
};
////strips any URL BOMBAYYY
////strips any URL BOMBAYYY
