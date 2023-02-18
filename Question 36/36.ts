// 36.T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that
// should be printed on the shirt. The function should print a sentence summarizing the size of the
// shirt and the message printed on it. Call the function.

var shirtSize: string = "Medium";
var message: string = "Be your own hero";

var make_shirt = (size: string, message: string) => {
  console.log(
    `We are making shirt having size ${size} and the message on shirt will be "${message}"`
  );
};

make_shirt(shirtSize, message);
