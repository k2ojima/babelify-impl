
export class ProductSubscriber {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    subscribe() {
        console.log('the '+this.name+' price is '+this.price);
    }
}
