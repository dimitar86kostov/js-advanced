class OnlineShop {

    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
    }
    products = [];
    sales = [];

    loadingStore(product, quantity, spaceRequired) {
        quantity = Number(quantity);
        spaceRequired = Number(spaceRequired);

        if (this.warehouseSpace < spaceRequired) {
            throw new Error("Not enough space in the warehouse.");
        } else {
            this.products.push(product);
            this.products.push(quantity);
            this.warehouseSpace -= spaceRequired;
        }
        return `The ${product} has been successfully delivered in the warehouse.`
    }

    quantityCheck(product, minimalQuantity) {
        let index = this.products.indexOf(product);
        if (index == -1) {
            throw new Error(`There is no ${product} in the warehouse.`)
        } else {
            index = index + 1
        }

        minimalQuantity = Number(minimalQuantity);

        // if (!this.products.includes(product)) {
        //     throw new Error(`There is no ${product} in the warehouse.`)
        // }
        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.")
        }
        if (minimalQuantity <= this.products[index]) {
            return `You have enough from product ${product}.`
        }

        let difference = minimalQuantity - this.products[index];
        this.products[index] = minimalQuantity;
        return `You added ${difference} more from the ${product} products.`
    }

    sellProduct(product) {

        let index = this.products.indexOf(product);
        if (index == -1) {
            throw new Error(`There is no ${product} in the warehouse.`)
        } else {
            index = index + 1
        }

        this.products[index]--;
        this.sales.push(product);
        this.sales.push(1);
        return `The ${product} has been successfully sold.`
    }

    revision() {
        if (this.sales == 0) {
            throw new Error('There are no sales today!')
        } else {

            let res = [];

            let buff = '';
            res.push(`You sold ${this.sales.length / 2} products today!`);
            res.push("Products in the warehouse:");

            for (let i = 0; i < this.products.length; i += 2) {
                let product = this.products[i];
                let quantity = this.products[i + 1];
                res.push(`${product}-${quantity} more left`);
            }


            return res.join('\n');
        }
    }
}

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());
