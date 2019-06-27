// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
//
// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%
//
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6

function tipAmount(amount, service) {
  if (service === 'good'){
    return amount * 0.2
  } else if (service === 'fair') {
    return amount * 0.15
  } else if (service === 'poor') {
    return amount * 0.1
  }
}

tipAmount(100, 'good');
tipAmount(40, 'fair');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
//
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46

function totalAmount(amount, service) {
  if (service === 'good') {
    return amount * 1.2
  } else if (service === 'fair') {
    return amount * 1.15
  } else if (service === 'poor') {
    return amount * 1.1
  }
}

totalAmount(100, 'good');
totalAmount(40, 'fair');

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
//
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

function splitAmount(amount, service, party) {
  if (service === 'good') {
    return (amount * 1.2) / party
  } else if (service === 'fair') {
    return (amount * 1.15) / party
  } else if (service === 'poor') {
    return (amount * 1.10) / party
  }
}

splitAmount(100, 'good', 5);
splitAmount(40, 'fair', 2);