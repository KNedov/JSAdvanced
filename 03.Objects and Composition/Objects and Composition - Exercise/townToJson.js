function townToJson(input) {
  let headings = input.shift();
  let rows = input;
  let newArray = [];
  let [headingTown, headingLatitude, headingLongtitude] = headings.split(" | ");
  headingTown = headingTown.split("| ");
  headingTown = headingTown[1];
  headingLongtitude = headingLongtitude.split(" |");
  headingLongtitude = headingLongtitude[0];

  for (const town of rows) {
    let [name, latitude, longitude] = town.split(" | ");
    name = name.split("| ");
    name = name[1];
    latitude = Number(latitude)
    longitude = longitude.split(" |")
    longitude = Number(longitude[0]);

    let newObj = {};
    newObj = {
      Town: name,
      Latitude: Number(latitude.toFixed(2)),
      Longitude: Number(longitude.toFixed(2)),
    };
    newArray.push(newObj);
  }
  console.log(JSON.stringify(newArray));
}
townToJson(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']);
