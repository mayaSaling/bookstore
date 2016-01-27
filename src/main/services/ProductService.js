angular.module('bookstore')
  .factory('ProductService', ProductService);
  
  function ProductService($http) {
    
      return {
          getProducts: getProductsFn
      };
      
      function getProductsFn() {
          return $http.get('json/products.json')
                      .then(successHandler, errorHandler);
                      
          function successHandler(reply) {
              return reply.data;
          }
          
          function errorHandler(error) {
              return error.data;
          }
      }
  }
  