class List {

    constructor() {
        this.collection = [];
    }

    add(el) {
        this.collection.push(el);
        this.collection.sort((a, b) => a - b);
    }

    remove(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new error("Invalid index!")

        } else {
            this.collection.splice(index, 1)
        }
        this.collection.sort((a, b) => a - b);

    }

    get(index) {
        if (index < 0 || index >= this.collection.length) {
            throw new Error("Invalid index!")

        } else {
            this.collection.sort();

            return this.collection[index];
        }

    }


    size() {
        return this.collection.length;
    }
}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));
list.remove(6);
console.log(list.get(1));