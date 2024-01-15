function createSortedList() {
    
    let instance = {
        size: 0,
        list: [],

        // methods
        add: function (element) {
            this.list.push(element);
            this.list.sort(this._comparor);
            this.size += 1;

            return instance
        },
        remove: function (index) {
            this._validator(index);
            this.list.splice(index, 1);
            this.size -= 1;

            return instance;
        },
        get: function (index) {
            this._validator(index);
            return this.list[index];
        },
        //Helper methods
        _validator: function (index) {
            if (index < 0 || index >= list.length) {
                throw new Error('Index is out of bands');
            }
        },
        _comparor: function (a, b) {
            return a - b;
        }
    }
    return instance;
}

let list = createSortedList();
console.log(list.add(5).list);
list.add(6);
