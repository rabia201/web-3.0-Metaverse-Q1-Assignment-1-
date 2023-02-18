let current_users: string[] = ["John", "Jane", "Michael", "Emily", "David"];
let new_users: string[] = ["john", "Sarah", "Michael", "Luke", "Jessica"];

for (let i = 0; i < new_users.length; i++) {
  let lowerCaseNewUser = new_users[i].toLowerCase();
  let isUserExist = false;
  for (let j = 0; j < current_users.length; j++) {
    let lowerCaseCurrentUser = current_users[j].toLowerCase();
    if (lowerCaseNewUser == lowerCaseCurrentUser) {
      isUserExist = true;
      break;
    }
  }
  if (isUserExist) {
    console.log(new_users[i] + " will need to enter a new username.");
  } else {
    console.log(new_users[i] + " username is available.");
  }
}
