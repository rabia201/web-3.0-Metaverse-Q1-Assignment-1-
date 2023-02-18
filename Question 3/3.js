// 3.Name Cases: Store a person’s name in a variable, and then print
//  that person’s name in lowercase, uppercase, and titlecase.
var myName = "Rabia";
console.log("My Name lowerCase: ", myName.toLowerCase());
console.log("My Name uppercase: ", myName.toUpperCase());
console.log("My Name titlecase: ", myName.charAt(0).toUpperCase() + myName.substr(1).toLowerCase());
