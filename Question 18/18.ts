// 18.Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.

var favPlaces = ["Amsterdam", "Spain", "China", "Ice Land", "Bora Bora"];
//Print your array in its original order.
console.log("Orginal Array", favPlaces);
// Print your array in alphabetical order without modifying the actual list.
console.log("Sort in Alphabetic order", favPlaces.slice(0).sort());
//Show that your array is still in its original order by printing it.
console.log("Orginal Array unchanged", favPlaces);
//Print your array in reverse alphabetical order without changing the order of the original list.
console.log(
  "Sort in Reverse Alphabetic order",
  favPlaces.slice(0).sort().reverse()
);
//Show that your array is still in its original order by printing it again.
console.log("Orginal Array", favPlaces);
//Reverse the order of your list.
favPlaces.reverse();
//Print the array to show that its order has changed.
console.log("Printing Orginal Array", favPlaces);
//Reverse the order of your list again.
favPlaces.reverse();
//Print the list to show it’s back to its original order.
console.log("Printing Orginal Array", favPlaces);
//Sort your array so it’s stored in alphabetical order.
favPlaces.sort();
// Print the array to show that its order has been changed.
console.log("Printing Orginal Sorted Array", favPlaces);
//Sort to change your array so it’s stored in reverse alphabetical order.
favPlaces.reverse();
//Print the list to show that its order has changed.
console.log("Printing Orginal Array", favPlaces);
