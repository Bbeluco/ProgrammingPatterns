"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublisherConcrete = void 0;
var PublisherConcrete = /** @class */ (function () {
    function PublisherConcrete() {
        this._subs = [];
    }
    PublisherConcrete.prototype.subscribe = function (sub) {
        var index = this._subs.indexOf(sub);
        if (index !== -1) {
            return console.log("Subscriber already on the list");
        }
        this._subs.push(sub);
        console.log("Subscriber added to the list");
    };
    PublisherConcrete.prototype.unsubscribe = function (sub) {
        var index = this._subs.indexOf(sub);
        if (index === -1) {
            return console.log("Subscriber already not on the list");
        }
        this._subs.splice(index, 1);
        console.log("Subscriber removed from the list");
    };
    PublisherConcrete.prototype.notify = function () {
        this._subs.forEach(function (element) {
            element.update();
        });
    };
    PublisherConcrete.prototype.someLogic = function () {
        console.log("Trigger some logic");
        this.notify();
    };
    return PublisherConcrete;
}());
exports.PublisherConcrete = PublisherConcrete;
