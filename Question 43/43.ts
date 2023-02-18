// 43.Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
// with a copy of the array of magicians’ names. Because the original array will be unchanged,
// return the new array and store it in a separate array. Call show_magicians() with each array
// to show that you have one array of the original names and one array with the Great added to
// each magician’s name.

var magicians: string[] = ["zack", "sia", "atrio"];
var newMagiciansArr = [...magicians];
var make_great = (magicians: string[]) => {
  newMagiciansArr.forEach(
    (magician, index) => (magicians[index] = `the Great ${magician}`)
  );
};
var show_magicians = (magicians: string[]) => {
  for (var i = 0; i < magicians.length; i++) {
    console.log(`I'am ${magicians[i]}`);
  }
  console.log("------loop End-------");
};
make_great(magicians);
show_magicians(magicians);
show_magicians(newMagiciansArr);
