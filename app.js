var app = angular.module ('Cosmetics', ['ngRoute', 'ui.calendar']);



app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: "MenuController",
            templateUrl: "views/main.html"
        })
        .when ('/prices', {
        controller: 'PriceController',
        templateUrl: 'views/prices.html'
    })
        .when ('/calendar', {
        controller: 'CalendarController',
        templateUrl: 'views/calendar.html'
    })
        .when ('/form', {
        controller: 'FormController',
        templateUrl: 'views/form.html'
    })
        .otherwise({
            redirectTo: '/'
        });
});

