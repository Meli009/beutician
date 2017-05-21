app.directive('prices', function () {
    function link(scope, element, attr) {

        scope.service = [
            {title: "Szemöldökszedés", price: "750 Ft"},
            {title: "Szempillafestés", price: "900 Ft"},
            {title: "Arcmassszázs", price: "2500 Ft"},
            {title: "Arckezelés", price: "3000 Ft"},
            {title: "Smink", price: "4500 Ft"},
            {title: "Gyanta", price: "500 Ft"},
            {title: "Tetoválás", price: "25000 Ft"},
            {title: "Smink", price: "4500 Ft"},
            {title: "Smink", price: "4500 Ft"},
            {title: "Smink", price: "4500 Ft"}
        ]
    }

    return {
        link: link,
        restrict: 'E',
        scope: {

        },
        templateUrl: 'views/pricetable.html'
    };
});