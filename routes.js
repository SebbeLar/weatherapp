// ROUTES

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {

    templateUrl: 'views/home.html',
    controller: 'homeController'
  })

  .when('/weather', {

    templateUrl: 'views/weather.html',
    controller: 'weatherController'
  })

  .when('/weather/:days', {

    templateUrl: 'views/weather.html',
    controller: 'weatherController'
  });

});
