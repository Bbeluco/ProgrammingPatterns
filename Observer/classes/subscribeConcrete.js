"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeConcrete = void 0;
var SubscribeConcrete = /** @class */ (function () {
    function SubscribeConcrete() {
    }
    SubscribeConcrete.prototype.update = function () {
        console.log("The publisher called me, i'll do something");
    };
    return SubscribeConcrete;
}());
exports.SubscribeConcrete = SubscribeConcrete;
