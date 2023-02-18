// 37.Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
// that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a
// shirt of any size with a different message.

var shirtSize: string = "Medium";
var message: string = "Be your own hero";

var make_shirt = (size: string, message: string) => {
  if (size == "Large" || size == "Medium") {
    console.log(
      `We are making shirt having size ${size} and the message on shirt will be "I love Javascript"`
    );
  } else {
    console.log(
      `We are making shirt having size ${size} and the message on shirt will be "${message}"`
    );
  }
};

make_shirt(shirtSize, message);
make_shirt("Large", message);
