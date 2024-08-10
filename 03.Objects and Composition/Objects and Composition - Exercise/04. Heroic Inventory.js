function heroicInvertory(array) {
  let newHero = [];
  for (let hero of array) {
    hero = hero.split(" / ");
    let [name, level, items] = hero;
    level = Number(level);
    items = items ? items.split(", ") : [];
    if (name !== "") {
      let object = {};

      object = { name: name, level: level, items: items };

      newHero.push(object);
    }
  }

  console.log(JSON.stringify(newHero));
}
heroicInvertory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
  "Isacc / 25 / Apple, GravityGun",
]);
// [{"name":"Isacc","level":25,"items":["Apple","GravityGun"]},{"name":"Derek","level":12,"items":["BarrelVest","DestructionSword"]},{"name":"Hes","level":1,"items":["Desolator","Sentinel","Antara"]}]
