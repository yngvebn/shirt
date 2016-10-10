function ShirtsController(){
    this.sizes = ['XS', 'S', 'M', 'L', 'XL']
}

angular.module('tse').component('shirts', {
    templateUrl: '/app/shirts/shirts.tpl.html',
    controller: ShirtsController
});