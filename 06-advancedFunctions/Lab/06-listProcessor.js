function listProcessor(arr) {

    let list = [];

    function add(str) {
        list.push(str);

    };

    function remove(str) {
        if (list.includes(str)) {
            list.splice(list.indexOf(str), 1);
        }
    }

    function print() {
        console.log(list.join(','));
    }

    for (const el of arr) {
        let [command, str] = el.split(' ');

        switch (command) {
            case 'add': add(str); break;
            case 'remove': remove(str); break;
            case 'print': return print();
        }
    }
}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print'])