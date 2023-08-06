
// useful string methods in javascript

let username = "EddMichira";
let phoneNumber = "254-702-66-8083";

console.log(username.length);
console.log(username.charAt(1));
console.log(username.indexOf("M"));
console.log(username.lastIndexOf("i"));
// console.log(username.trim());
username = username.toUpperCase();
console.log(username);
username = username.toLowerCase();
console.log(username);

phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber);