function argumentsInfo() {
  let mapData = new Map();
  for (const el of arguments) {
    let type = typeof el;
    console.log(`${type}: ${el}`);
    if (mapData.get(type)) {
      mapData.set(type, mapData.get(type) + 1);
    } else mapData.set(type, 1);
  }
  mapData = Array.from(mapData).sort((a, b) => b[1] - a[1]);
  mapData.forEach((element) => {
    console.log(`${element[0]} = ${Number(element[1])}`);
  });
}

// argumentsInfo("cat", 42, function () {
//   console.log("Hello world!");
// });
argumentsInfo({ name: "bob" }, 3.333, 9.999);
