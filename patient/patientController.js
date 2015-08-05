var app = angular.module('app');

app.controller('patientCtrl', function($scope, patientService){
 
  $scope.mileageCalc = function(miles) {
		$scope.reimbursement = patientService.mileageCalc(miles);
	};
  $scope.patientList = patientService.patientData;

$scope.findPatient = function(ptName){
      $scope.ptSearch = patientService.findPatient(ptName); 
      patientService.setPatient(ptName)
  };
$scope.date = new Date();

// $scope.selectPt = function(patient){
//   return  patient; 
// }
});
  
  // $scope.displayPtInfo = function(selection) {
  // 	console.log('before display ', selection);
  // 	$scope.ptInfo = patientService.displayPtInfo(selection)

  // }
    // $scope.currentPerson = patientList[0].person