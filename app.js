var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {


    $routeProvider
        .when('/patient', {
            templateUrl: 'patient/patientTemplate.html',
            controller: 'patientCtrl'
        })
        .when('/assessment', {
            templateUrl: 'assessment/assessmentTemplate.html',
            controller: 'assessmentCtrl'
                // resolve: {
                // 	  teamData: function(teamService, $route) {
                // 	  return teamService.getTeamData($route.current.params.team);
                //   }
        })
        .otherwise({
            redirectTo: '/patient'
        });
});
