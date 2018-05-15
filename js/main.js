//add event
document.getElementById('numberInput').addEventListener('input', function(e){
	//get value of input
	kgInput = e.target.value;

	//find items
	let gramsOutput = document.getElementById('gramsOutput');
	let poundsOutput = document.getElementById('poundsOutput');
	let ouncesOutput = document.getElementById('ouncesOutput');

	//change value of items
	gramsOutput.innerHTML = kgInput * 1000;
	poundsOutput.innerHTML = kgInput / 0.45359237;
	ouncesOutput.innerHTML = kgInput / 0.02834952;

});