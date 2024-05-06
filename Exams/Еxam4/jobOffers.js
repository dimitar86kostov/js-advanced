class JobOffers {

    constructor(employer, position) {
        this.employer = employer,
            this.position = position,
            this.jobCandidates = [];
    }

    jobApplication(candidates) {

        for (const candidat of candidates) {
            let [name, education, yearsExp] = candidat.split('-');
            yearsExp = Number(yearsExp);
            let existingPerson = this.jobCandidates.find(person => person.name === name);

            if (existingPerson) {
                let curYearsExp = yearsExp;

                if (existingPerson.yearsExp < curYearsExp) {
                    existingPerson.yearsExp = curYearsExp
                }

            } else {
                this.jobCandidates.push({
                    name,
                    education,
                    yearsExp,
                });
            }
        }
        let result = "You successfully added candidates: ";
        let names = [];
        for (const person of this.jobCandidates) {

            names.push(person.name)
        }


        return `${result}${names.join(', ')}.`;
    }

    jobOffer(chosenPerson) {

        let [currPerson, minExp] = chosenPerson.split('-');
        minExp = Number(minExp);
        let names = [];

        for (const candidate of this.jobCandidates) {

            names.push(candidate.name);
        }

        let index = names.indexOf(currPerson);

        if (!names.includes(currPerson)) {
            throw new Error(`${currPerson} is not in the candidates list!`)
        }
        if (minExp > this.jobCandidates[0].yearsExp) {
            throw new Error(`${currPerson} does not have enough experience as ${this.position}, minimum requirement is ${minExp} years.`)

        } else {

            this.jobCandidates[index].yearsExp = 'hired';

        }
        return `Welcome aboard, our newest employee is ${currPerson}.`
    }

    salaryBonus(name) {
        let names = [];
        this.jobCandidates.forEach((person) => names.push(person.name));
        let index = names.indexOf(name);

        if (!names.includes(name)) {
            throw new Error(`${currPerson} is not in the candidates list!`)
        }

        if (this.jobCandidates[index].education == 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;

        } else if (this.jobCandidates[index].education == 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!"`;

        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
        }
    }

    candidatesDatabase() {
        let arr = [];

        if (this.jobCandidates.length == 0) {
            throw new Error("Candidate Database is empty!")

        }
        arr.push("Candidates list:");

        for (const candidate of this.jobCandidates) {

            arr.push(`${candidate.name}-${candidate.yearsExp}`);
        }
        arr.sort();
        return arr.join('\n');

    }

}

// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.jobOffer("John Jones-8"));

// let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
//  console.log(Jobs.jobOffer("John Doe-8"));
//  console.log(Jobs.jobOffer("Peter Parker-4"));
//  console.log(Jobs.salaryBonus("John Doe"));
//  console.log(Jobs.salaryBonus("Peter Parker"));


let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "John Doe-Bachelor-50", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-11"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());



