import { PublisherConcrete } from "./classes/publisherConcrete";
import { SubscribeConcrete } from "./classes/subscribeConcrete";

let publisher: PublisherConcrete = new PublisherConcrete();
let sub1: SubscribeConcrete = new SubscribeConcrete();
let sub2: SubscribeConcrete = new SubscribeConcrete();

publisher.subscribe(sub1);
publisher.subscribe(sub1);

publisher.subscribe(sub2);

publisher.unsubscribe(sub1);

publisher.someLogic();

publisher.subscribe(sub1);
publisher.someLogic();