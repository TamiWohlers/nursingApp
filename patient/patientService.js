app.service('patientService', function() {
            this.patientData = [
            {
                ID: 0,
                person: 'Wanda Smith',
                diagnosis: 'lung cancer'
            }, {
                ID: 1,
                person: 'Clyde Brothers',
                diagnosis: 'AIDS'
            }, {
                ID: 2,
                person: 'Larry Olsen',
                diagnosis: 'liver failure'
            },
                {
                ID: 3,
                person: 'Hillary Buck',
                diagnosis: 'melanoma'
                },
                {
                ID: 4,
                person: 'May Hoppe',
                diagnosis: "CHF"
                }
            ];

            this.mileageCalc = function(numMiles) {
                    var reimbursement = numMiles * .50;
                    return reimbursement;
                }
                // this.displayPtInfo = function(selection) {
                // 	return this.patientData[id];
                // }

            this.findPatient = function(ptName) {
            	var found = false;	

                for (var i = 0; i < this.patientData.length; i++) {
                	found = false;
                    //console.log("patientData", this.patientData[i])
                    console.log("ptName", ptName)
                    if(ptName == this.patientData[i].person) {
                    	found = true;
          				return ptName;
                    }

                    
               }
               if(found === false) {
               	return "pt not found";
               }
            }
        });
