function storeCataloque(params) {

    let arr = params.sort();
    let groups = [];

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];

        let [product, price] = element.split(' : ');


        let letter = element[0]

        if (!groups[letter]) {
            groups[letter] = {};
        }

        groups[letter][product] = Number(price);
    }

    for (const [letter, info] of Object.entries(groups)) {
        
        console.log(letter);

        for (const [product, price] of Object.entries(info)) {
            
            console.log(`${product}: ${price}`);
        }
    }
}
storeCataloque(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)
// A
// Anti-Bug Spray: 15
// Apple: 1.25
// Appricot: 20.4
// B
// Boiler: 300
// D
// Deodorant: 10
// F
// Fridge: 1500
// T
// T-Shirt: 10
// TV: 1499