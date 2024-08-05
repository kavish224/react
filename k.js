let pass = "";
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let length = 10;
// if (numberAllowed) {
//   str += "1234567890";
// }
// if (characterAllowed) {
//     str += "!@#$^&*";
// }
for (let i = 0; i <= length; i++) {
  let char = Math.floor(Math.random() * str.length + 1);
  console.log(char);
  pass += str.charAt(char);
}