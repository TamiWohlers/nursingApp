app.service('patientService', function() {
            this.patientData = [
            {
                ID: 0,
                person: 'Wanda Smith',
                diagnosis: 'lung cancer',
                ICD9code: '162.3'
            }, {
                ID: 1,
                person: 'Clyde Brothers',
                diagnosis: 'AIDS',
                ICD9code: '042'
            }, {
                ID: 2,
                person: 'Larry Olsen',
                diagnosis: 'liver failure',
                ICD9code:  '571.2'
            },
                {
                ID: 3,
                person: 'Hillary Buck',
                diagnosis: 'brain cancer',
                ICD9code: '191.7'
                },
                {
                ID: 4,
                person: 'May Hoppe',
                diagnosis: "CHF",
                ICD9code: '428.0'
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
          				return this.patientData[i];
                    }

                    
               }
               if(found === false) {
               	return "pt not found";
               }
            }
            var currentPatient;

            this.setPatient = function(ptName){
                currentPatient = ptName;
            }
            this.getPatient = function(){
                return(currentPatient)
            }
        });
