// {
//     weight: Number,
//     experience: Number,
//     levelOfHydrated: Number,
//     dizziness: Boolean
//   }
function constructionCrew(obj) {
  let newObj = {};
  let weight = obj.weight;
  let experience = obj.experience;
  let levelOfHydrated = obj.levelOfHydrated;
  let dizziness = obj.dizziness;
  if (dizziness === true) {
    levelOfHydrated += weight * 0.1 * experience;
    dizziness = false;
    obj.weight = weight;
    obj.experience = experience;
    obj.levelOfHydrated = levelOfHydrated;
    obj.dizziness = dizziness;
  }
 return obj
}
constructionCrew({
  weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true,
});
