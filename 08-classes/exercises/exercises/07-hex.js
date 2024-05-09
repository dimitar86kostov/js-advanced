class Hex {
    constructor(value) {
        if (isNaN(value)) {
            throw new Error("Invalid input. Value must be a number.");
        }
        this.value = Number(value);
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return `0x${this.value.toString(16).toUpperCase()}`;
    }

    plus(numOrHex) {
        const val = numOrHex instanceof Hex ? numOrHex.value : numOrHex;
        return new Hex(this.value + val);
    }

    minus(numOrHex) {
        const val = numOrHex instanceof Hex ? numOrHex.value : numOrHex;
        return new Hex(this.value - val);
    }

    parse(string) {
        
        return parseInt(string, 16);
    }
}


let FF = new Hex(255);

console.log(FF.toString());

FF.valueOf() + 1 == 256;

let a = new Hex(10);

let b = new Hex(5);

console.log(a.plus(b).toString());

console.log(a.plus(b).toString()==='0xF');

console.log(FF.parse('AAA'));