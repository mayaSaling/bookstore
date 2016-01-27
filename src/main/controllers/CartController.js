angular.module('bookstore')
    .controller('CartController', CartController);
    
    function CartController($state) {
      
        var vm = this;
        vm.cart = [];
        vm.addToCart = addToCartFn;
        vm.finishShopping = finishShoppingFn;
        vm.getTotalPrice = getTotalPriceFn;
        vm.openDeliveryDetails = openDeliveryDetailsFn;
        
        function addToCartFn(product) {
            var index = _.findLastIndex(vm.cart, { title: product.title, author: product.author, price: product.price});
            if(index !== -1) {
                vm.cart[index].quantity++;
            }
            else {
                vm.cart.push( {
                    title: product.title,
                    author: product.author,
                    quantity: 1,
                    price: product.price
                });
            }
            decreaseQuantity();
            
            function decreaseQuantity() {
                product.quantity--;
            }
        }
        
        function finishShoppingFn() {
            $state.go('finish');
        }
        
        function getTotalPriceFn() {
          var totalprice = 0;
          angular.forEach(vm.cart, function(cartItem) {
              totalprice += cartItem.price * cartItem.quantity;
          });
          
          return totalprice;
        }
        
        function openDeliveryDetailsFn() {
          $state.go('delivery');
        }
    }