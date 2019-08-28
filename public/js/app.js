console.log('app.js loaded');


const findImage = () =>
{
	//e.preventDefault();
	console.log('button clicked');
	const imgURL = "http://img.pokemondb.net/artwork/" + document.getElementById('nameInput').value.toLowerCase() +'.jpg'
	document.getElementById('imgTag').src = imgURL;
	document.getElementById('nameInput').value = imgURL;
}