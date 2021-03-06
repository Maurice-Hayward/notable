// routes/note_routes.js



//ID object that converts id strings to an object readable by db
var ObjectID = require('mongodb').ObjectID; 



module.exports = function(app, db){
	//CRUD - Create - Read - Update - Delete
	
	//CREATE Note 
	app.post('/notes', (req,res)=>{
		const note = {text:req.body.body, title:req.body.title};
		db.collection('notes').insert(note, (err,results)=>{
			if(err){
				res.send({'error':'An error has occured'});
			}
			else{
				res.send(results.ops[0]);
			}
		});
	});

	//READ Note
	app.get('/notes/:id', (req,res)=>{
		const id = req.params.id;
    	const details = { '_id': new ObjectID(id) };

		db.collection('notes').findOne(details, (err,item)=>{
			if (err){
				res.send({'error':'An error has occured'});
			}
			else{

				res.send(item);
			}
		});
	});

	//UPDATE Note
	app.put('/notes/:id', (req,res)=>{
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};
		const note = {text:req.body.body, title:req.body.title};
		db.collection('notes').update(details,note,(err,results)=>{

		if(err){
			res.send({'error':'An error has occured'});
		}
		else{
			res.send(note);
		}
		})

	})

	//DELETE Note
	app.delete('/notes/:id', (req,res)=>{
		const id = req.params.id;
		const details = {'_id': new ObjectID(id)};

		db.collection('notes').remove(details, (err,item)=>{
			if(err){
				res.send({'error':'An error has occured'});
			}else{
				res.send('Note ' + id + ' deleted!');
			}
		})
	})



}