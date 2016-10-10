function MainController(){
    var vm = this;
    var modes = {
        numbers: 0,
        tshirts: 1
    }
    
    vm.mode = modes.numbers;
}

angular.module('tse').component('mainComponent', {
    templateUrl: '/app/main.tpl.html',
    controller: MainController
});