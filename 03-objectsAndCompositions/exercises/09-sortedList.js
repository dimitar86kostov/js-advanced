function createSortedList() {

    let obj = {

        listArr: [],
        size: 0,

        add: function (element) {
            this.listArr.push(element);
            this.listArr.sort(this._comparor);
            this.size += 1;
            return obj
        },

        remove: function (index) {
            this._isValid(index);
            this.listArr.splice(index, 1);
            this.size -= 1;
            return obj
        },

        get: function (index) {
            this._isValid(index);
            return this.listArr[index];
        },

        _isValid: function (index,) {
            if (index < 0 || index >= this.listArr.length) {
                throw new Error("Index is out of bound");
            }
        },

        _comparor: function (a, b) {
            return a - b;
        }
    }

    return obj
}

let list = createSortedList();

console.log(list.add(5).listArr);

console.log(list.add(6).listArr);