// 16.More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.

var friendArr: string[] = ["Alexa", "Anna", "Seiraa"];
var newFriendArr: string[] = [...friendArr, "Sarah"];
newFriendArr.unshift("Sam");
newFriendArr.push("Jane");
var arrIndex = Math.round(newFriendArr.length / 2);
newFriendArr[arrIndex] = "stella";

console.log("newFriendArr", newFriendArr);
const dinnerInvitation = (friend: string) => {
  console.log(
    `Hey ${friend}! I would like to invite you for a dinner tonight.`
  );
};
for (var i = 0; i < newFriendArr.length; i++) {
  if (i == 5) {
    console.log(`Sorry! ${newFriendArr[i]} won't be joing us for dinner`);
  } else {
    dinnerInvitation(newFriendArr[i]);
  }
}
