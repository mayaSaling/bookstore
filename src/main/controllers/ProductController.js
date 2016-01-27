angular.module('bookstore')
  .controller('ProductController', ProductController);
  
    function ProductController(ProductService, $state) {
        var vm = this;
        vm.isAvailable =isAvailableFn;
        vm.openSearchPage = openSearchPageFn;
        
        ProductService.getProducts().then(function(data) {
            vm.products = data;
        });
        
        function isAvailableFn(product) {
            return product.quantity > 0;
        }
        
        function openSearchPageFn() {
            $state.go('search');
        }
      
    }