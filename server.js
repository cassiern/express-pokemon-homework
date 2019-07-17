const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// If you need to delete something 
//const methodOverride = require('method-override');

const pokemon = require('./pokemon.js')
app.get('/pokemon', (req, res) => {
	res.render('./index.ejs', {
			Pokemon: pokemon
		})
})

app.get('/pokemon/:index', (req, res) => {
	res.render('./show.ejs', {
		eachPokemon: pokemon[req.params.index]
	})
});











app.get('/', (req, res) => {
	res.send('Welcome')
});





//listener
app.listen(3000, () => {
	console.log('server is running on port 3000')
});