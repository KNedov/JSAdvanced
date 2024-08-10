class footballTeam{
   
    invitedPlayers=[]
    constructor(clubName,country){
        this.clubName =clubName
        this.country=country
    }
    newAdditions(footballPlayers){
        let array=[]
        for (const player of footballPlayers) {
           let[name,age,playerValue]=player.split('/')
           age=Number(age)
           playerValue=Number(playerValue)
           let person=this.invitedPlayers.find(p=>p.name==name)
           if(person){
            if(playerValue>person.playerValue)person.playerValue=playerValue
           }
           if(!person){
            this.invitedPlayers.push({name,age,playerValue})
            if (!this.invitedPlayers.includes(name)) {
                array.push(name)
                }
        }
           
        }
      
    let result=`You successfully invite ${array.join(', ')}.` 
    return result
        
    }
    signContract(selectedPlayer){
           let [name,playerOffer]= selectedPlayer.split('/')
           playerOffer=Number(playerOffer)
           let person=this.invitedPlayers.find(p=>p.name==name)
           if(!person)throw new Error (`${name} is not invited to the selection list!`)
            
        if(playerOffer<person.playerValue){
            let priceDifference=person.playerValue-playerOffer
            throw new Error (`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)}
        if (playerOffer>person.playerValue) {
            person.playerValue="Bought"
           return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
        }    
        
    }
    ageLimit(name, age){
        let person=this.invitedPlayers.find(p=>p.name==name)
        if(!person)throw new Error (`${name} is not invited to the selection list!`)
         if(person){
            age=Number(age)
            if (person.age<age) {
                let difference=age-person.age
                if(difference<=5) return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
                if (difference>5) return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }else if (person.age>=age) return `${name} is above age limit!`
            
         }   
    }
    transferWindowResult(){
        let result =["Players list:"]
        for (const el of this.invitedPlayers) {
            result.push(`"Player ${el.name}-${el.playerValue}`) 
        }
        return result.join('\n')
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 28));
console.log(fTeam.transferWindowResult());
