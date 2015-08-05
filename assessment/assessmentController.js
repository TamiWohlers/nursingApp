var app = angular.module('app');

app.controller('assessmentCtrl', function($scope, assessmentService, patientService){
  $scope.date = new Date();
  $scope.saveData = function(assessment) {
  	console.log(assessment)
  	assessmentService.patientData(assessment);
  }
  $scope.getPatient = patientService.getPatient();	
   console.log($scope.getPatient);	
  });