function extensibleObject() {

    let parent = {};
    let child = Object.create(parent);

    child.extend = function (obj) {
        let arrObj = Object.entries(obj);
        for (let [key, value] of arrObj) {
            if (typeof (value) == 'function') {
                parent[key] = value;
            } else {
                child[key] = value;
            }
        }
    }

    return child
}
const myObj = extensibleObject();
const template = {

    extensionMethod: function () { },

    extensionProperty: 'someString'

}

myObj.extend(template);
console.log(myObj);