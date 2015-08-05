app.service('medicationDosages', function($http, $q){


// this.addNewGame = function(gameObject) {//open bracket #1
//   var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
//   if(gameObj.homeTeamScore.parseInt() > gameObj.opponentScore.parseInt()) { //open bracket #2
//   	this.won = true;
//   } 
//   else { 
//   	this.won = false;
//   } 
//   return $http({
//   	method: 'POST',
//   	url: url,
//   	data: gameObject
//   })
// }

// this.getMedicationDosage = function(med){
// 	var deferred = $q.defer();
// 	console.log('medication = ', med);
// 	var url = 'https://mapi-us.iterar.co/api/' + med + '/doses.json';	
// 	$http({
// 		method: 'GET',
// 		url: url,
// 		headers: {
// 			'X-Mashape-Key': 'at8kvInJTSmshvdlZF2iI7o4nKEYp1LFhGMjsnAyq91nM7Sond',
// 			'Accept': 'application/json'
// 		}
// 	}).then(function(results) {
// 		console.log(results)
// 		debugger;
		
// 	    deferred.resolve(results);	
// 	})
// 	return deferred.promise;
// };
});