function loginEmployee(lastName, firstName) {
	console.log('call to loginEmployee');
	if (lastName === 'admin' || firstName === 'admin') {
		return false;
	}

	var e = ds.Employee({ lastName: lastName });
	console.log('loginEmployee', 'e', e);
	//if the user name does not exist in our datastore class
	if (e === null) {
		return false;
	} //let Wakanda try to find it in the internal directory
	else // the user name is known
	{
		if (e.firstName === firstName) //this is given to keep the example simple
		//we should have a more secured challenge here, for example 
		//by storing and comparing a hash key
		{
			var theGroups = ['Employee'];
			var connectTime = new Date();
			console.log('e.lastName', e.lastName, 'e.firstName', e.firstName, 'e.ID', e.ID);
			return {
				//ID: e.ID,//no need, wakanda server generates a UUID
				name: e.lastName,
				fullName: e.firstName + " " + e.lastName,
				belongsTo: theGroups,
				storage: {
					time: connectTime,
					access: "Guest access",
					//in the user session, sessionStorage.access
					//will contain "Guest access"
				},
			};
		}
		else {
			return { error: 1024, errorMessage: "invalid login" }
		}
	}
}
exports.login = loginEmployee;
