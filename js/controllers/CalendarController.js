app.controller('CalendarController', function($scope, $compile, $timeout, uiCalendarConfig) {
    /* config object */
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    $scope.changeTo = 'Hungarian';
    /* event source that pulls from google.com */
    $scope.eventSource = {
        url: "http://www.google.com/calendar/feeds/usa__en%40holiday.calendar.google.com/public/basic",
        className: 'gcal-event',           // an option!
        currentTimezone: 'Hungary/Budapest' // an option!
    };
    /* event source that contains custom events on the scope */
    $scope.events = [
        {title: 'Délelőtt',start: new Date(y, m, 2), end: new Date(y, m, 6)},
        {title: 'Délután',start: new Date(y, m, 8), end: new Date(y, m, 13)},
        {title: 'Délelőtt',start: new Date(y, m, 15), end: new Date(y, m, 20)},
        {title: 'Délután',start: new Date(y, m, 22), end: new Date(y, m, 27)},
        {title: 'Délelőtt',start: new Date(y, m, 29), end: new Date(y, m, 34)}


    ];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
        var s = new Date(start).getTime() / 1000;
        var e = new Date(end).getTime() / 1000;
        var m = new Date(start).getMonth();
        var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
        callback(events);
    };

    /* Change View */
    $scope.changeView = function(view,calendar) {
        uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalendar = function(calendar) {
        if(uiCalendarConfig.calendars[calendar]){
            uiCalendarConfig.calendars[calendar].fullCalendar('render');
        }
    };
    /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) {
        element.attr({'tooltip': event.title,
            'tooltip-append-to-body': true});
        $compile(element)($scope);
    };

    $scope.uiConfig = {
        calendar:{
            firstDay: 1,
            height: 450,
            editable: true,
            header:{
                left: '',
                center: 'title',
                right: 'today prev,next'
            },

            columnFormat: 'dddd',
            displayEventTime: false,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            eventRender: $scope.eventRender
        }
    };
    /*$scope.changeLang = function() {
        if($scope.changeTo === 'Hungarian'){ */
            $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
            $scope.uiConfig.calendar.monthNames = ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"];
            $scope.uiConfig.calendar.buttonText = {
                today:    'ma',
                month:    'hónap',
                week:     'hét',
                day:      'nap',
            }
            $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
            /*
            $scope.changeTo= 'English';
        } else {
            $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            $scope.changeTo = 'Hungarian';
        }
    }; */
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.eventsF, $scope.events];
});