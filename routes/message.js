var models = require('../model.js');

exports.send = function(req, res) {

	var newSchema = new models.Message({
		"email": req.body.email,
		"content": req.body.content,
		"created": Date.now()
	});
	newSchema.save(afterSaving);

	function afterSaving(err){
		if(err) { 
			console.log(err);
			res.send(500);
		}
		res.redirect('/');
	}

};