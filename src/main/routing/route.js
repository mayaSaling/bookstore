angular.module('bookstore')
  .config(config);
  
function config($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('test', {
            url: 'testpage',
            templateUrl: 'index.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'templates/ProductList.html'
        })
        .state('finish', {
            url: '/finish',
            templateUrl: 'templates/FinishShopping.html'
        })
        .state('delivery', {
          url: '/deliverydetails',
          templateUrl: 'templates/DeliveryDetails.html',
          controller: 'PayController',
          controllerAs: 'payCtrl'
        })
        .state('search', {
            url: '/search',
            templateUrl: 'templates/Search.html',
            controller: 'SearchController',
            controllerAs: 'searchCtrl'
        })
}