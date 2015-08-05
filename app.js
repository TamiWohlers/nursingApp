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
            .when('/DME', {
                templateUrl: 'durableMedicalEquipment/DMETemplate.html',
                controller: 'DMEcontroller'
            })
            .when('/hospiceName',{
                templateUrl: '/directives/hospiceName.html'
            })
            .when('/getDate',{
                templateUrl: 'directives/getDate.html',
            })
            .when('/medications', {
                templateUrl: 'medications/medicationsTemplate.html',
                controller: 'medicationsController'
            })
            .otherwise({
                redirectTo: '/patient'
            })
    });
