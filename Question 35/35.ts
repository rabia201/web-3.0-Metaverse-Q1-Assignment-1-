//35.Animals: Think of at least three different animals that have a common characteristic. Store the
//names of these animals in a list, and then use a for loop to print out the name of each animal.

var animals = ["cat", "dog", "horse"];

for (var i = 0; i < animals.length; i++) {
  //print out the name of each animal.
  // console.log(animals[i]);
  //print a statement about each animal, such as A dog would make a great pet.
  console.log(`A ${animals[i]} is very loyal by nature.`);

  if (i == animals.length - 1) {
    console.log("----All these animals make great pet-------");
  }
}
