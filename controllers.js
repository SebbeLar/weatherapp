// CONTROLLERS

app.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService) {

  $scope.city = cityService.city;

  $scope.$watch('city', function() {
      cityService.city = $scope.city;
  });

  $scope.submit = function() {
    $location.path('/weather');
  };

}]);

app.controller('weatherController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

  $scope.city = cityService.city;

  $scope.days = $routeParams.days || '3';

  $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=0568ca30aa86d58697a56aa33f9ac370',
  { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' }});

  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

  $scope.convertToCelsius = function(kalvin) {
    return Math.round(kalvin - 272);
  };

  $scope.convertDate = function(date) {
    return new Date(date * 1000);
  };

  $scope.$watch('city', function() {
      cityService.city = $scope.city;

  });

}]);
