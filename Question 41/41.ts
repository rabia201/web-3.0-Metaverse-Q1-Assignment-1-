//41.Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//which prints the name of each magician in the array.

var magicians: string[] = ["zack", "sia", "atrio"];
var show_magicians = (magicians: string[]) => {
  for (var i = 0; i < magicians.length; i++) {
    console.log(`I'am ${magicians[i]} at ${i} number`);
  }
};

show_magicians(magicians);
