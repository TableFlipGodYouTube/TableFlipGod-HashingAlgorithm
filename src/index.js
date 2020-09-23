const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  ".",
  ",",
  "/",
  "?",
  "]",
  "[",
  "{",
  "}",
  "\\",
  "|",
  "=",
  "+",
  "-",
  "_",
  "0",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  ")",
  "(",
  "*",
  "&",
  "^",
  "%",
  "$",
  "#",
  "@",
  "!",
  "`",
  "~",
  " "
];

const input = "";
function generateHash(salt) {
  let hashedsalt = "";
  if (salt != null) {
    for (var i = 0; i < salt.length; i++) {
      let temp = "";
      if (letters.indexOf(salt[i]) * 2 > letters.length) {
        temp = letters.indexOf(salt[i]) * 2 - letters.length;
        console.log("Temp: " + temp);
        while (temp > letters) {
          temp = temp - letters.length;
          console.log("Overflow temp: " + temp);
        }
        console.log("newdata: " + temp);
      } else {
        temp = letters.indexOf(salt[i]) * 2;
        console.log("Ok: " + salt[i] + " - " + temp);
      }
      hashedsalt = hashedsalt + letters[temp];
    }
    return hashedsalt;
  }
}
console.log("hashed " + generateHash("kjasdfjlasdkfj"));

function encode(f, salt) {
  let final = "";
  for (var i = 0; i < salt.length; i++) {
    for (var ii = 0; ii < f.length; ii++) {
      let temp = "";
      if (letters.indexOf(f[ii]) * 2 > letters.length) {
        temp = letters.indexOf(f[ii]) * 2 - letters.length;
        console.log("Temp: " + temp);
        while (temp > letters) {
          temp = temp - letters.length;
          console.log("Overflow temp: " + temp);
        }
        console.log("newdata: " + temp);
      } else {
        temp = letters.indexOf(f[ii]) * 2;
        console.log("Ok: " + f[ii] + " - " + temp);
      }
      final = final + letters[temp] + salt[i];
    }
  }
  return final;
}

console.log("Hashed with salt " + encode("hi my name is aiden", "hello"));
