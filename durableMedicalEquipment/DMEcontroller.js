var app = angular.module('app');

app.controller('DMEcontroller', function($scope, DMEservice, patientService){
 $scope.date = new Date();
 $scope.DME = DMEservice.DMEData;
 console.log($scope.DME);
 $scope.arr = [];
$scope.submit = function(){
        for(var i = 0; i < $scope.DME.length; i++){
            if($scope.DME[i].check){
                $scope.arr.push($scope.DME[i].itemName)
            }
        }
        console.log($scope.arr);
    }
    $scope.getPatient = patientService.getPatient();	
   console.log($scope.getPatient);

});