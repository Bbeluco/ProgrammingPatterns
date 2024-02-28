import { PublisherInterface } from "../interfaces/publisherInterface";
import { SubscriberInterface } from "../interfaces/subscriberInterface";

export class PublisherConcrete implements PublisherInterface {
    private _subs: SubscriberInterface[] = [];

    subscribe(sub: SubscriberInterface): void {
        let index: number = this._subs.indexOf(sub);
        if(index !== -1) {
            return console.log("Subscriber already on the list");
        }

        this._subs.push(sub);
        console.log("Subscriber added to the list");
    }

    unsubscribe(sub: SubscriberInterface): void {
        let index: number = this._subs.indexOf(sub);
        if(index === -1) {
            return console.log("Subscriber already not on the list");
        }

        this._subs.splice(index, 1);
        console.log("Subscriber removed from the list");
    }

    notify(): void {
        this._subs.forEach(element => {
            element.update();
        });
    }

    public someLogic(): void {
        console.log("Trigger some logic");
        this.notify();
    }
}
