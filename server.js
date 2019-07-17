const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const methodOverride = require('method-override');
const serveStatic = require('serve-static')
const Pokemon = require('./models/pokemon')
// If you need to delete something 
//const methodOverride = require('method-override');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(methodOverride('_method'))


//index route
const pokemon = require('./models/pokemon.js')
app.get('/pokemon', (req, res) => {
	res.render('index.ejs', {
			pokemon: Pokemon
		})
})


//new route...needs help
app.post('/pokemon', (req, res) => {
	Pokemon.push(req.body);
	res.redirect('/pokemon');
})
app.get('/pokemon/new', (req,res) => {
	res.render('new.ejs')
})
//show route
app.get('/pokemon/:id', (req, res) => {
	 res.render('show.ejs', {
	 	eachPokemon: Pokemon[req.params.id]
	 })
});

//edit route
app.get('/pokemon/:id/edit',(req, res)=> {
	res.render('edit.ejs', {
		eachPokemon: Pokemon[req.params.id],
		index: req.params.id
	})
})
app.put('/pokemon/:id', (req, res) => {
	Pokemon[req.params.id].name = req.body.name
	res.redirect('/pokemon')
})



//delete route
app.delete('/pokemon/:id', (req, res) => {
	Pokemon.splice(req.params.id, 1);
	res.redirect('/pokemon');
})



app.get('/', (req, res) => {
	res.send('Welcome')
});


//listener
app.listen(3000, () => {
	console.log('server is running on port 3000')
});