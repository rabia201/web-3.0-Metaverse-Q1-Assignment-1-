// Names: Store the names of a few of your friends in a array called names.
// Print each person’s name by accessing each element in the list, one at a time.

var friendArr: string[] = ["Alexa", "Anna", "Seiraa"];

//1st Method
console.log(friendArr[0]);
console.log(friendArr[1]);
console.log(friendArr[2]);
console.log("\n---------2nd Method-----------\n");
//2nd Method
for (var i = 0; i <= friendArr.length - 1; i++) {
  console.log(friendArr[i]);
}
