// @ts-nocheck
function centsToDollars(cents) {
  const centsAsNumber = parseInt(cents, 10);
  if (isNaN(centsAsNumber)) {
    throw new Error("Invalid input: not a valid number");
  }
  const dollars = centsAsNumber / 100;
  return parseFloat(dollars.toFixed(2));
}

function dollarsToCents(dollars) {
  const dollarsAsNumber = parseInt(dollars, 10);
  if (isNaN(dollarsAsNumber)) {
    throw new Error("Invalid input: not a valid number");
  }
  return Math.round(dollarsAsNumber * 100);
}

export { centsToDollars, dollarsToCents };
