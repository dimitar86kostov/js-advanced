function breakfastRobot() {

    let store = {
        carbohydrate: 0,
        protein: 0,
        flavour: 0,
        fat: 0
    };

    let recipe = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            carbohydrate: 10,
            protein: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function solution(data) {

        let [action, type, qty] = data.split(" ");
        qty = Number(qty);

        if (action == 'restock') {
            return restock(type, qty);
        } else if (action == 'prepare') {
            return prepare(type, qty);
        } else if (action == 'report') {
            return report();
        }

    }

    function restock(type, qty) {
        
        store[type] += Number(qty);
        return 'Success'
        
    }

    function prepare(type, qty) {
        let prepareRecipe = {}

        for (const [el, value] of Object.entries(recipe[type])) {

            let neededEl = value * qty;
            if (store[el] < neededEl) {
                return `Error: not enough ${el} in stock`
            }
            prepareRecipe[el] = neededEl;
        }

        for (const [el, value] of Object.entries(prepareRecipe)) {
            
            store[el] -= value;
        }

        return 'Success'
    }
    
    function report(){
        
        return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavour}`
    }


}

let manager = breakfastRobot();

console.log(manager("restock flavour 50")); // Success

console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock

// console.log(manager('restock carbohydrate 10'));

// console.log(manager('restock flavour 10'));

// console.log(manager('prepare apple 1'));

// console.log(manager('restock fat 10'));


// console.log(manager('prepare burger 1'));

// console.log(manager('report'));



/*


    prepare apple 1 restock fat 10 prepare burger 1 report
*/