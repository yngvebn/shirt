"use strict";
var Fibonacci = (function () {
    function Fibonacci() {
    }
    Fibonacci.prototype.sequence = function (number) {
        if (number < 2) {
            return number;
        }
        else {
            return this.sequence(number - 1) + this.sequence(number - 2);
        }
    };
    Fibonacci.prototype.run = function (times) {
        var sequence = new Array(times);
        for (var x = 0; x <= times; x++) {
            sequence[x] = this.sequence(x);
        }
        return sequence;
    };
    return Fibonacci;
}());
exports.Fibonacci = Fibonacci;
//# sourceMappingURL=Fibonacci.js.map