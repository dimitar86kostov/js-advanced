function solve(arr) {
let groups = {};

    for (const el of arr) {
        
        let [product, price] = el.split(' : ');
price = Number(price);
        let letter = product.charAt(0);

if (letter in groups) {
    
    groups[letter][product] = price;

}else{
groups[letter] = {[product]: price};
}
    }

    for (const [letter, obj] of Object.entries(groups)) {
        console.log(letter);

let sorted = Object.entries(obj).sort();

for (const [product, price] of Object.entries(obj)) {
    
    console.log(`  ${product}: ${price}`);
}
    }
}
solve(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])
    // A Anti-Bug Spray: 15 
    //   Apple: 1.25
    //   Appricot: 20.4 
    // B Boiler: 300 
    // D Deodorant: 10 
    // F Fridge: 1500 
    // T T-Shirt: 10 TV: 1499
    
