const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const serveStatic = require('serve-static')
// If you need to delete something 
//const methodOverride = require('method-override');

app.use(express.static('public'));




const pokemon = require('./pokemon.js')
app.get('/pokemon', (req, res) => {
	res.render('./index.ejs', {
			Pokemon: pokemon
		})
})

app.get('/pokemon/:id', (req, res) => {
	res.render('./show.ejs', {
		eachPokemon: pokemon[req.params.id]
	})
});











app.get('/', (req, res) => {
	res.send('Welcome')
});





//listener
app.listen(3000, () => {
	console.log('server is running on port 3000')
});