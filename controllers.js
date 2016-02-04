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

app.controller('weatherController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService) {

  $scope.city = cityService.city;

  $scope.days = $routeParams.days || '3';

  $scope.weatherResult = weatherService.getWeather($scope.city, $scope.days);

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
