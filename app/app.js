'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

$http({
  method: 'GET',
  url: '/someUrl'
}).then(function successCallback(response) {
  // this callback will be called asynchronously
  // when the response is available
}, function errorCallback(response) {
  // called asynchronously if an error occurs
  // or server returns response with an error status.
});