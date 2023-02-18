// 17.Shrinking Guest List: You just found out that your new dinner table won’t
//  arrive in time for the dinner, and you have space for only two guests.

var initialGuestArr: string[] = ["Alexa", "Anna", "Seiraa"];
var newGuestArr: string[] = [...initialGuestArr, "Sarah"];
newGuestArr.unshift("Sam");
newGuestArr.push("Jane");
var arrIndex = Math.round(newGuestArr.length / 2);
newGuestArr[arrIndex] = "stella";

console.log("Out Guest List", newGuestArr);
var newDinnerInvitation = (friend: string) => {
  console.log(
    `Hey ${friend}! I would like to invite you for a dinner tonight.`
  );
};
console.log("------We can only invite 2 guests now--------");
for (var i = newGuestArr.length - 1; i >= 0; i--) {
  if (i >= 2) {
    console.log(`Sorry! ${newGuestArr[i]} You won't be joing us for dinner`);
    newGuestArr.pop();
  } else {
    console.log(`Hey! ${newGuestArr[i]} you are still invited for dinner`);
  }
}
console.log("Out updated guests List", newGuestArr);
