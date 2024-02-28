import { SubscriberInterface } from "./subscriberInterface";

export interface PublisherInterface {
    subscribe(sub: SubscriberInterface): void;
    unsubscribe(sub: SubscriberInterface): void;
    notify(): void;
}