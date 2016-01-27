angular.module('bookstore')
      .provider('PaymentOptions', PaymentOptionsProvider);
      
      function PaymentOptionsProvider() {
          
          var defaultPaymentType;
          
          var provider = {
              configure: configure,
              $get: ['$http', $get]
          };
          return provider;
          
          function configure(config) {
              if(config.defaultPaymentType) {
                defaultPaymentType = config.defaultPaymentType;
              }
          }
          
          function $get($http){
              
              return {
                  defaultPaymentType: defaultPaymentType,
                  getShopAddresses: getShopAddresses
              };
              
              function getShopAddresses() {
                  return $http.get('shopaddresses.json')
                          .then(successHandler, errorHandler);
                          
                  function successHandler(reply) {
                      return reply.data;
                  }
                  
                  function errorHandler(error) {
                      return error.data;
                  }
              }
          }
      }