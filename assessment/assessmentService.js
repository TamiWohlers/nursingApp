app.service('assessmentService', function(patientService){
	var assessmentArray = [];
	this.patientData = function(assessment){
		console.log(assessment);
	    assessmentArray.push(assessment);
	}
	
	});