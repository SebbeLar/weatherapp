// SERVICES

app.service('cityService', function() {

  this.city = '';
});

app.service('weatherService', ['$resource', function($resource) {

  this.getWeather = function(city, days) {
    var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=0568ca30aa86d58697a56aa33f9ac370',
    { callback: 'JSON_CALLBACK' }, { get: { method: 'JSONP' }});

    return weatherAPI.get({ q: city, cnt: days });
};

}]);
