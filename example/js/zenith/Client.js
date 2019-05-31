
export class Client {

    constructor() {
        this.subscribers = [];
    }

    add(subscriber) {
        this.subscribers.push(subscriber);
    }

    work() {
        this.subscribers.forEach((item, index) => {
            item.subscribe();
        });
    }
}
