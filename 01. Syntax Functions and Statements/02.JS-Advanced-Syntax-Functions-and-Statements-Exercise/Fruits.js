function fruits(fruit, weight, price) {
  let weightkg = weight / 1000;
  let money = price * weightkg;

  console.log(
    `I need $${money.toFixed(2)} to buy ${weightkg.toFixed(
      2
    )} kilograms ${fruit}.`
  );
}
fruits("orange", 2500, 1.8);
