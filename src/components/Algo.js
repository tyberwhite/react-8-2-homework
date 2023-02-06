export default function ValidCard(cardNumber) {
  // 1. Convert card number to a string.
  // 2. Convert string to an array of characters.
  // 3. Convert each character to a number using map().
  const cardNumberArray = Array.from(cardNumber.toString()).map(Number);

  // Double the digit.
  for (let i = cardNumberArray.length - 2; i >= 0; i -= 2)
    cardNumberArray[i] = cardNumberArray[i] * 2;

  // Convert double digit numbers to single digits
  const newCardArray = [];
  cardNumberArray.forEach(function (num) {
    if (num > 9) {
      let digits = num.toString().split("");
      newCardArray.push(Number(digits[0]));
      newCardArray.push(Number(digits[1]));
    } else {
      newCardArray.push(num);
    }
  });

  // Sum the array
  const cardArraySum = newCardArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  // Check if sum is a multiple of 10
  if (cardArraySum % 10 === 0) {
    return true;
  }
  return false;
}
