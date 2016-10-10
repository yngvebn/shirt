function NumbersController(){

    var vm = this;
    vm.numbers = fibonacci(8);

    function fibonacci(max){
        var i;
        var fib = []; // Initialize array!

        fib[0] = 0;
        fib[1] = 1;
        for(i=2; i<=max; i++)
        {
            // Next fibonacci number = previous + one before previous
            // Translated to JavaScript:
            fib[i] = fib[i-2] + fib[i-1];
        }
        fib.shift()
        return getUnique(fib);
    }

     function getUnique(arr){
    var u = {}, a = [];
    for(var i = 0, l = arr.length; i < l; ++i){
        if(u.hasOwnProperty(arr[i])) {
            continue;
        }
        a.push(arr[i]);
        u[arr[i]] = 1;
    }
    return a;
    }
}

angular.module('tse').component('numbers', {
    templateUrl: '/app/numbers/numbers.tpl.html',
    controller: NumbersController
});