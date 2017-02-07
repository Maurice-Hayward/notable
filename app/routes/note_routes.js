// routes/note_routes.js
module.exports = function(app, db){
	//CRUD - Create - Read - Update - Delete
	
	//CREATE Note 
	app.post('/notes', (req,res)=>{
		console.log(req.body);
		res.send('Hello');
	});


}