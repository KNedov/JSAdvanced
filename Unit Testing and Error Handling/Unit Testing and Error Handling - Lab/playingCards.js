function playingCards(face, suit) {
  const validCardFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const validCardSuit = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };
  let obj;
  let newList = [];
  if (validCardFaces.includes(face)) {
    if (Object.keys(validCardSuit).includes(suit)) {
      suit = validCardSuit[suit];

      newList.push(face, suit);
    } else {
      throw new Error();
    }
  } else {
    throw new Error();
  }
  let result = newList[0] + newList[1];
  return result;
}

playingCards("2", "S");
