let foo = function() {	try {		return 1;	} catch(err) {		return 2;	} finally {		return 3;	}};foo();let fool = function() {	try {		return 1;	} catch(err) {		return 2;	} finally {		throw new Error;	}};fool();