const repeatString = function (str, repeat) {
  let repeatStr = "";
  if (repeat < 0) return "ERROR";
  for (let i = 0; i < repeat; i++) {
    repeatStr += str;
  }
  return repeatStr;
};

// Do not edit below this line
module.exports = repeatString;
