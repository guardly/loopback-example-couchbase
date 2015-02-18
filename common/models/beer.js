module.exports = function(Beer) {
	Beer.destroyAll = function(filter,cb) {
		Beer.destroyAll();  //do not pass any parameters or callback function, will not be called


		//cb(null, {"result":"good"});

	};

	Beer.remoteMethod(
		'destroyAll', {
			accepts: [{
				arg: 'filter',
				type: 'object'}],
			returns: {
				arg: 'mesg',
				type: 'class'
			},
			http: {
				path: '/',
				verb: 'delete'
			}
		}
	);


};
