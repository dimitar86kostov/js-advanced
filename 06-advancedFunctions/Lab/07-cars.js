function solution() {
    let cars = {};

    function create(name) {
        cars[name] = {};
    }

    function createInherits(name, parentName) {
        cars[name] = Object.create(cars[parentName]);
    }

    function set(name, key, value) {
        cars[name][key] = value;
    }

    function print(name) {

        for (const [key, value] of Object.entries(cars[name])) {
            console.log(`${key}:${value}`);



            console.log(Object.getPrototypeOf(cars[name]));



        }
    }

    return (arr) => {

        for (const el of arr) {
            // 'create c2 inherit c1',

            let [action, name, key, value] = el.split(' ');


            switch (action) {
                case 'create':

                    if (key) {

                        createInherits(name, value); break;
                    } else {
                        create(name); break;
                    }
                case 'set':

                    set(name, key, value); break;
                case 'print':
                    print(name); break;
                default:
                    break;
            }
        }
    }
}

let call = solution();
call(['create c1',

    'create c2 inherit c1',

    'set c1 color red',

    'set c2 model new',

    'print c1',

    'print c2'])
