var app = angular.module('app');

app.controller('medicationsController', function($scope, medicationsService, patientService, medicationDosages) {
   $scope.getMeds=medicationsService.getMeds();
   
   $scope.date = new Date();
   $scope.show = true;
   $scope.getPatient = patientService.getPatient();	
   console.log($scope.getPatient)
 //  $scope.getMedicationDosage = function(med) {
	//     medicationDosages.getMedicationDosage(med).then(function(data){
	//      	console.log(data)
	//     })
	// }	
});