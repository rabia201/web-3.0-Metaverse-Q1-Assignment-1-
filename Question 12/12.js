//12.Greetings: Start with the array you used in Exercise 11, but instead of just
//printing each person’s name, print a message to them. The text of each message
//should be the same, but each message should be personalized with the person’s
//name.
var friendArr = ["Alexa", "Anna", "Seiraa"];
var message = "Hello World!, She is ".concat(0, " my best friend");
for (var i = 0; i <= friendArr.length - 1; i++) {
    console.log("Hello World!, She is ".concat(friendArr[i], " my best friend."));
}
