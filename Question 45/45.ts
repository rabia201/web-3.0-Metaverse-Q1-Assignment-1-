// 45.Cars: Write a function that stores information about a car in a Object. The
// function should always receive a manufacturer and a model name. It should then
// accept an arbitrary number of keyword arguments. Call the function with the'
// required information and two other name-value pairs, such as a color or an
// optional feature. Print the Object that’s returned to make sure all the
// information was stored correctly.

type Car = {
  manufacturer: string;
  model: number;
  color?: string;
  make?: number;
};

var Car_info = (
  manufacturer: string,
  model: number,
  color?: string,
  make?: number
) => {
  var carObject: Car = {
    manufacturer: "China",
    model: 2023,
  };

  if (color) {
    carObject.color = color;
  }
  if (make) {
    carObject.make = make;
  }

  return carObject;
};
//Without Optional values
let car1 = Car_info("China", 2023);
//With Optional values
let car2 = Car_info("USA", 2001, "red", 2000);

console.log("car1", car1);
console.log("car2", car2);
