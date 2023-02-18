var userNames: string[] = [];

if (userNames.length == 0) {
  console.log("We need to find some users!");
} else {
  for (var username of userNames) {
    if (username == "admin") {
      console.log(`Hello ${username}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${username}, thank you for logging in again.`);
    }
  }
}
