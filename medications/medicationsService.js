app.service('medicationsService', function() {

	var medications = [
		{
		brandName: 'ativan',
		genericName: 'lorazepam'
		},
		{
		 brandName: 'morphine',
		 genericName: 'roxanol'
		},
		 {
		 brandName: 'imodium',
		 genericName: 'loperamide'
		},
		{
		  brandName: 'valium',
		  genericName: 'diazepam'
		},
		{
		  brandName: 'lasix',
		  genericName: 'furosamide' 
		},
		{
		  brandName: 'benadryl',
		  genericName: 'diphenhydramine'
		}
	]
	this.getMeds = function()
	{
	  return medications;
	}
});