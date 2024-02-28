import { SubscriberInterface } from "../interfaces/subscriberInterface";

export class SubscribeConcrete implements SubscriberInterface {
    update(): void {
        console.log("The publisher called me, i'll do something")
    }
}