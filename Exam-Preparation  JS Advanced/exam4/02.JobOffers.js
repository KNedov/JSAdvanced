//          100/100
class JobOffers {
  jobCandidates = [];
  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
  }
  jobApplication(candidates) {
    let names=[]
    candidates.forEach(element => {
       let [name,education,yearsExperience]= element.split('-')
  
    let person=this.jobCandidates.find(person=>person.name==name)
       if (!person) {
        yearsExperience=Number(yearsExperience)
        this.jobCandidates.push({name,education,yearsExperience})
       }else {
        if (person.yearsExperience<yearsExperience) {
            person.yearsExperience=yearsExperience
        }else{
           this.jobCandidates= this.jobCandidates.filter(p=>p.name!==name)
            this.jobCandidates.push({name,education,yearsExperience})
            
        }

       }
       if (!names.includes(name)) {
        
        names.push(name)
       }
    });
    let result = "You successfully added candidates: ";
        result += this.jobCandidates.map(el => `${el.name}`).join(", ");
        result += ".";
        return result;

  }
  jobOffer(chosenPerson){
    let [name,minimalExperience]=chosenPerson.split('-')
    let data=this.jobCandidates.find(person=>person.name==name)
    if (!data) {
        throw new Error (`${name} is not in the candidates list!`)
    }else if (minimalExperience>data.yearsExperience){
        throw new Error (`${name} does not have enough experience as ${this.position}, minimum requirement is ${ minimalExperience} years."`)
    }else {
        data.yearsExperience='hired'
        return `Welcome aboard, our newest employee is ${name}.`
    }
  }
  salaryBonus(name){
    let person=this.jobCandidates.find(person=>person.name==name)
    if (!person) {
        throw new Error(`${name} is not in the candidates list!`)
    }else  {
        if (person.education=='Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        }else if (person.education=='Master'){
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        }else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    } 

    
  }
  candidatesDatabase(){
    if (this.jobCandidates.length==0) {
        throw new Error("Candidate Database is empty!")
    }else {
        let result=["Candidates list:"]
        this.jobCandidates=this.jobCandidates.sort((a,b)=>a.name.localeCompare(b.name))
        this.jobCandidates.forEach(element => {
            result.push(`${element.name}-${element.yearsExperience}`)
        });
        return result.join ('\n')
    }
  }
}

let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());


