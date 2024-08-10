class SmartHike {
  goals = {};
  listOfHikes = [];
  resources = 100;
  constructor(username) {
    this.username = username;
  }
  addGoal(peak, altitude) {
    altitude = Number(altitude);
    if (this.goals.hasOwnProperty(peak))return `${peak} has already been added to your goals`;
    this.goals[peak] = { altitude };
    return `You have successfully added a new goal - ${peak}`;
  }
  hike(peak, time, difficultyLevel) {
    time = Number(time)
    if (!this.goals.hasOwnProperty(peak))throw new Error(`${peak} is not in your current goals`);
    if(this.goals.hasOwnProperty(peak)&&this.resources==0) throw new Error (`${peak} is not in your current goals`)
    let difference=this.resources-(time*10)
    if (difference<0) return ("You don't have enough resources to complete the hike")
    this.resources=this.resources-(time*10)
    this.listOfHikes.push({peak,time,difficultyLevel})
    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`
    
  }
  rest (time){
    time=Number(time)
    this.resources=this.resources*time
    if(this.resources>=100){
        this.resources=100
        return `Your resources are fully recharged. Time for hiking!`}

    return `You have rested for ${time} hours and gained ${time*10}% resources`
    
  }
  showRecord (criteria){
    if(this.listOfHikes.length==0) return `${this.username} has not done any hiking yet`
    let searchedCriteria=this.listOfHikes.find(s=>s.difficultyLevel==criteria)
    
    if (criteria=='all') {
        let result="All hiking records:\n"
        result+=(this.listOfHikes.map(({peak,time,difficultyLevel})=>`${this.username} hiked ${peak} for ${time} hours`).join('\n'))
        return result
    }
    if(!searchedCriteria) return `${this.username} has not done any ${criteria} hiking yet`
    let data=this.listOfHikes.filter(c=>c.difficultyLevel==criteria)
    if(data.length>1)data=data.sort((a,b)=>b.time-a.time)
   data=data[0]
 return `${this.username}'s best ${criteria} hike is ${data.peak} peak, for ${data.time} hours`

  }

}
const user = new SmartHike('Vili');
user.addGoal('Musala', 2925);
user.hike('Musala', 8, 'hard');
console.log(user.showRecord('easy'));
user.addGoal('Vihren', 2914);
user.hike('Vihren', 4, 'hard');
console.log(user.showRecord('hard'));
user.addGoal('Rui', 1706);
user.hike('Rui', 3, 'easy');
console.log(user.showRecord('all'));




