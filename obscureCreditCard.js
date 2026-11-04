function obscureCreditCard(cardNumber) {
  // Accept lengths from 12 through 16, inclusive.
  if (cardNumber.length < 12 || cardNumber.length > 16) {
    return "Invalid Credit Card";
  }

  // Hide every character except the last four.
  const lastFour = cardNumber.slice(-4);
  const maskedPart = "*".repeat(cardNumber.length - 4);

  return maskedPart + lastFour;
}

module.exports = obscureCreditCard;
