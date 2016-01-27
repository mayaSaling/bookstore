angular.module('bookstore')
  .controller('SearchController', SearchController);
  
  function SearchController($state) {
      var vm = this;
      vm.searchText = '';
      vm.results = [];
      vm.showResults = false;
      vm.search = searchFn;
      vm.openHomePage = openHomePageFn;
      
      function searchFn(products) {
          vm.results= [];
          angular.forEach(products, function(product) {
              if(vm.searchText !== '' && product.title.indexOf(vm.searchText) > -1) {
                  vm.results.push(product);
              }
          });
          vm.showResults = true;
      }
      
      function openHomePageFn() {
          $state.go('home');
      }
  }