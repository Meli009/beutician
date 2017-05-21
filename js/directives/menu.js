app.directive('menu', function () {
    function link(scope, element, attr) {

        scope.left = [
            {name: "Főoldal", url:"#/index"},
            {name: "Szolgáltatások", url:"#/prices"},
            {name: "Időpontfoglalás", url:"#/calendar"},
            {name: "Tanácsadás", url:"#/form"}
        ]
    }
    return {
        link: link,
        restrict: 'E',
        scope: {

        },
        templateUrl: 'views/menu.html'
    };
});

