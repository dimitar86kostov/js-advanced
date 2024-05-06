class RefurbishedSmartphones {

    constructor(retailer) {
        this.retailer = retailer,
            this.availableSmartphones = [],
            this.soldSmartphones = [],
            this.revenue = 0
    }

    addSmartphone(model, storage, price, condition) {

        if (model == '' || storage < 0 || price < 0 || condition == '') {
            throw new Error("Invalid smartphone!")

        } else {
            price = Number(price);
            this.availableSmartphones.push({
                model,
                storage,
                price,
                condition
            })
        }
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
    }

    sellSmartphone(model, desiredStorage) {

        let foundModel = this.availableSmartphones.find(phone => phone.model == model);

        let soldPrice = 0;

        if (!foundModel) {
            throw new Error(`${model} was not found!`)

        } else {

            if (foundModel.storage >= desiredStorage) {
                soldPrice = foundModel.price;

            } else if (Math.abs(foundModel.storage - desiredStorage) <= 128) {
                foundModel.price *= 0.90;

            } else{
                foundModel.price *= 0.80;
            }
            soldPrice = foundModel.price;
            
        }

        this.availableSmartphones.splice(this.availableSmartphones.indexOf(foundModel), 1);
        this.soldSmartphones.push({
            model: foundModel.model,
            storage: foundModel.storage,
            soldPrice: Number(soldPrice)
        })
        this.revenue += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    upgradePhones() {

        let upgrade = [];
        let result = [];
        result.push("Upgraded Smartphones:")

        this.availableSmartphones.forEach(phone => upgrade.push(phone.storage))
        upgrade = upgrade.map((x) => x * 2)

        for (let i = 0; i < this.availableSmartphones.length; i++) {
            let tel = this.availableSmartphones[i];
            this.availableSmartphones[i].storage = upgrade[i];

            result.push(`${tel.model} / ${upgrade[i]} GB / ${tel.condition} condition / ${tel.price.toFixed(2)}$`)
        }

        return result.join('\n');
    }

    salesJournal(criteria) {

        if (criteria != 'model' && criteria != 'storage') {
            throw new Error("Invalid criteria!")
        }

        if (criteria == 'model') {

            this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));


        } else if (criteria == 'storage') {

            this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        }

        let result = [];
        result.push(`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`);
        result.push(`${this.soldSmartphones.length} smartphones sold:`);

        for (const tel of this.soldSmartphones) {

            result.push(`${tel.model} / ${tel.storage} GB / ${tel.soldPrice.toFixed(2)}$`)
        }

        return result.join('\n')
    }

}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));



// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());


// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// retailer.sellSmartphone('Samsung S20 Ultra', 256);
// retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
// console.log(retailer.salesJournal('model'));


