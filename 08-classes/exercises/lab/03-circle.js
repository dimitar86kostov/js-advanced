class Circle {
    constructor(radius) {
        this.radius = radius
    }

    get area(){
        return Math.PI * (this.radius = this.radius ** 2);

    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        this.radius = value / 2;
    }
}

const myCircle = new Circle(2);
console.log(myCircle);
console.log(myCircle.radius);
console.log(myCircle.area);
console.log(myCircle.diameter);