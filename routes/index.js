var models = require('../model.js');

exports.view = function(req, res) {
	models.Message
	.find()
	.sort('-created')
	.exec(displayMessages);

	function displayMessages(err, message_posts){
		var data = {data: message_posts};
    	res.render("index", data);	

    	if(err) { 
			console.log(err);
			res.send(500);
		}
	}
    
}
