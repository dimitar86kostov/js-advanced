(function () {

    Array.prototype.last = function () {
        return this[this.length - 1];
    }

    Array.prototype.skip = function (n) {
        return this.slice(n);
    }

    Array.prototype.take = function (n) {
        return this.slice(0, n);
    }

    Array.prototype.sum = function () {
        return this.reduce((acc, n) => acc + n);
    }

    Array.prototype.average = function() {
        return this.sum() / this.length;
    }
})()

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myArr);
console.log(myArr.sum());
console.log(myArr.average());
