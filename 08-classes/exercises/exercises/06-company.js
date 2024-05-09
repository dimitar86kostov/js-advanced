class Company {

    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        salary = Number(salary);

        if (name == '' || salary == null || position == '' || department == '') {
            throw new Error("Invalid input!")
        } else if (salary < 0) {
            throw new Error("Invalid input!")
        }
        if (!this.departments[department]) {

            this.departments[department] = {
                avg: 0,
                sumSalary: 0,
                employee: []
            };
        }

        this.departments[department].employee.push({ name, salary, position });



        return `New employee is hired. Name: ${name}. Position: ${position}`

    }

    _findBestDep(entries) {

        return entries.sort((a, b) => b[1].avg - a[1].avg)
    }

    bestDepartment() {
        let entries = Object.entries(this.departments);

        for (const [key, value] of entries) {

            let arr = value.employee;

            for (const worker of arr) {

                this.departments[key].sumSalary += worker.salary;
            }

            this.departments[key].avg = this.departments[key].sumSalary / this.departments[key].employee.length
        }

        let best = this._findBestDep(entries)[0];

        let buff = '';
        let workers = best[1].employee

        buff += `Best Department is: ${best[0]}\n`;
        buff += `Average salary: ${(best[1].avg).toFixed(2)}\n`
        workers.sort((w1, w2) => {
            return w2.salary - w1.salary || w1.name.localeCompare(w2.name)
        }).forEach(emp => buff += `${emp.name} ${emp.salary} ${emp.position}\n`);

        return buff.trim();
    }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");

c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");

c.addEmployee("Slavi", 500, "dyer", "Construction");

c.addEmployee("Stan", 2000, "architect", "Construction");

c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");

c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");

c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());