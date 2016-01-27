angular.module('bookstore', ['ui.router'])
  .constant('moment', moment)
  .config(['PaymentOptionsProvider', configFn])
  .run(runFn);
  
  function configFn(PaymentOptionsProvider) {
      PaymentOptionsProvider.configure({
          defaultPaymentType : 'money'
      })
  }
  
  function runFn($rootScope) {
      $rootScope.$on('saveOrder', saveOrderEventHandler);
      
      function saveOrderEventHandler(event, params) {
          alert('Köszi a ' + params[1] + ' időpontban történő vásárlásodat, ' + params[0] + '!');
      } 
  }