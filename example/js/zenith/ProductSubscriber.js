
export class ProductSubscriber {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    subscribe() {
        console.log('the '+name+' price is '+price);
    }
}
