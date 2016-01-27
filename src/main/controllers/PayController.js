angular.module('bookstore')
    .controller('PayController', PayController);
    
function PayController($http, $rootScope, PaymentOptions) {
    var vm = this;
    vm.orderDetails = {};
    vm.saveOrder = saveOrderFn;
    vm.setOrderedProducts = setOrderedProductsFn;
    vm.isSelected = isSelected;
    vm.paymentTypes = ['card', 'money'];

    
    function saveOrderFn() {
        vm.orderDetails.date = moment().format('YYYY:MM:DD HH:mm');
        $rootScope.$broadcast('saveOrder', [vm.orderDetails.name, vm.orderDetails.date]);
    }
    
    function setOrderedProductsFn(productList) {
        vm.orderDetails.products = productList;
    }
    
    function isSelected(paymentType) {
        if(PaymentOptions.defaultPaymentType === paymentType) {
          return true;
        }
        return false;
    }

}