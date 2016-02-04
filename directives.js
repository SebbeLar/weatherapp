// DIRECTIVES

app.directive('weatherReport', function() {

  return {
    restrict: 'E',
    templateUrl: 'directives/weatherReport.html',
    replace: true,
    scope: {
      weatherDay: '=',
      convertCelsius: '&',
      convertDate: '&',
      dateFormat: '@'
    }
  };
});
