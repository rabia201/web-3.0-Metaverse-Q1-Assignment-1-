// 42.Great Magicians: Start with a copy of your program from Exercise 39. Write a function called
//  make_great() that modifies the array of magicians by adding the phrase the Great to each
//  magician’s name. Call show_magicians() to see that the list has actually been modified.

var magicians: string[] = ["zack", "sia", "atrio"];
var make_great = (magicians: string[]) => {
  magicians.forEach(
    (magician, index) => (magicians[index] = `the Great ${magician}`)
  );
};
var show_magicians = (magicians: string[]) => {
  for (var i = 0; i < magicians.length; i++) {
    console.log(`I'am ${magicians[i]} at ${i} number`);
  }
};
make_great(magicians);
show_magicians(magicians);
