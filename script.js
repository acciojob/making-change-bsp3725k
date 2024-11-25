
const makeChange = (c) => {
  // your name here
	// Convert the input to an integer, just in case
  c = parseInt(c);

  // Initialize the object to store the counts of each coin
  let change = {
    q: 0, // quarters
    d: 0, // dimes
    n: 0, // nickels
    p: 0  // pennies
  };

  // Calculate the number of quarters
  change.q = Math.floor(c / 25);
  c %= 25; // Get the remaining amount

  // Calculate the number of dimes
  change.d = Math.floor(c / 10);
  c %= 10;

  // Calculate the number of nickels
  change.n = Math.floor(c / 5);
  c %= 5;

  // The remainder is the number of pennies
  change.p = c;

  return change;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
