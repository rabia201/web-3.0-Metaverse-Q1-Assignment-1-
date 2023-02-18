// 15.Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think
//  of someone else to invite.

var friendArr: string[] = ["Alexa", "Anna", "Seiraa"];
var newFriendArr: string[] = [...friendArr, "Sarah"];

console.log(
  `Hey ${newFriendArr[0]}! I would like to invite you for a dinner tonight.`
);
console.log(`Hey ${newFriendArr[1]}! Please for a dinner coming sunday.`);
console.log(`Sorry! ${newFriendArr[2]} won't be joing us for dinner`);
console.log(
  `Hey ${newFriendArr[3]}! My new guest, Would you like to join me for a dinner?`
);
