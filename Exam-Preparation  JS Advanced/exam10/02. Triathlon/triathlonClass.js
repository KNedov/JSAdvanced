export class Triathlon{
    participants={}
    listOfFinalists=[]
    constructor(competitionName){
        this.competitionName=competitionName
    }
    addParticipant (participantName, participantGender){
        let person=Object.getOwnPropertyDescriptor(this.participants,participantName)
        if (person) {
            return `${participantName} has already been added to the list`
        }else{
            this.participants[participantName]={participantName,
              participantGender}
              return `A new participant has been added - ${participantName}`
            

            
        }

    }
    completeness (participantName, condition){
        let person=Object.getOwnPropertyDescriptor(this.participants,participantName)
        if (!person)throw new Error (`${participantName} is not in the current participants list`)
        if (condition<30) throw new Error (`${participantName} is not well prepared and cannot finish any discipline`)
            let completedCount=condition/30
        completedCount=completedCount.toFixed(0)
        completedCount=Number(completedCount)
        let result =condition-(completedCount*30)
        if (completedCount<=2) {
            return`${participantName} could only complete ${completedCount} of the disciplines` 
        }else {
            delete this.participants[participantName]
           this.listOfFinalists.push(person.value) 
           return `Congratulations, ${participantName} finished the whole competition`
        }

       
    }
    rewarding (participantName){
        let person=Object.getOwnPropertyNames(this.listOfFinalists,participantName)
        if(!person) throw new Error `${participantName} is not in the current finalists list`
        return `${participantName} was rewarded with a trophy for his performance`
        
    }
    showRecord (criteria){
        if(criteria=='all'){
            let result=`List of all ${this.competitionName} finalists:\n`
            result+=this.listOfFinalists.map(({participantName,participantGender})=>`${participantName}`).join('\n')
            return result
          }
      if(this.listOfFinalists.length==0) return  `There are no finalists in this competition`
      let person=this.listOfFinalists.find(x=>x.participantGender==criteria)
      if (!person) return `There are no ${criteria}'s that finished the competition`
      let index=this.listOfFinalists.indexOf(person)
      if(index==0) return `${person.name} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
      
    }
}



