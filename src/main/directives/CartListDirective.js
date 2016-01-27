angular.module('bookstore')
    .directive('bsCartList', CartList);
    
    function CartList() {
      return {
          restrict: 'E',
          templateUrl: 'templates/CartList.html'
      };
    }