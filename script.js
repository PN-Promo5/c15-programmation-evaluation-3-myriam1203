 // 1.1 //


function presentationCinema()
{
	let divCinema = document.createElement('div');	// create a div container
	divCinema.id = 'cinemaPresentation';	// add an id to the container

	let titleCinema = document.createElement('h1');	// create a h1
	titleCinema.textContent = 'Cinéma Le Dauphin';

	let paragraphCinema = document.createElement('p');	// create a paragraph
	paragraphCinema.textContent = 'Une salle de cinéma grand confort, un restaurant et une sélection de vins de qualité. Des avant premières, des rencontres, des ciné-repas, des débats, des ateliers, des ciné-goûters, de 11h30 à 23h du mardi au dimanche (jusqu’à minuit le vendredi et le samedi).';

	let buttonCinema = document.createElement('button');// create a button
	buttonCinema.id = 'seeFilmsList';
	buttonCinema.textContent = 'Voir les films à l\'affiche cette semaine';

	divCinema.appendChild(titleCinema);		// append h1, paragraph, and button
	divCinema.appendChild(paragraphCinema);
	divCinema.appendChild(buttonCinema);

	document.body.appendChild(divCinema);	// append div
}

presentationCinema();		// use the function



// EXERCISE 1.2 //

let filmsList = 																	// create 2 arrays
[
	['Titre du film', 'Réalisateur', 'Nationalité', 'Année', 'Durée', 'Version'],
	['IN MY ROOM', 'Ulrich Köhler', 'Allemagne', '2019', '2h', 'vf'],
	['UN VIOLENT DÉSIR DE BONHEUR', 'Clément Schneider', 'France', '2018', '1h15', 'vf'],
	['WHAT YOU GONNA DO WHEN THE WORLD IS ON FIRE', 'Roberto Minervini', 'Etats-Unis/Italie', '2018', '2h03', 'vostfr'],
	['GRASS', 'Hong Sang-Soo', 'Corée du Sud', '2018', '1h06', 'vostfr']
];


// EXERCISE 1.3 //

function filmsTable(sequence)
{
	let divFilms = document.createElement('div');
	divFilms.id = 'divTable';

	let tableFilms = document.createElement('table');
	let tableFilmsHeader = document.createElement('thead');
	let tableFilmsBody = document.createElement('tbody');
	let tableFilmsTR = document.createElement('tr');

	divFilms.appendChild(tableFilms);
	tableFilms.appendChild(tableFilmsHeader);
	tableFilms.appendChild(tableFilmsBody);
	tableFilmsHeader.appendChild(tableFilmsTR);



let i = 0;
	let currentElement = sequence[0][i]
while (i < sequence[0].length){
	currentElement = sequence[0][i]
	let tableFilmsTH = document.createElement('th');
	tableFilmsTH.textContent = currentElement;
		tableFilmsTR.appendChild(tableFilmsTH);
	i += 1;
}


i = 0;
while (i < sequence.length) {
			let currentElement1 = sequence[i];
			i += 1
			let j = 0;

		tableFilmsTR = document.createElement('tr');
			while (j < currentElement1.length) {
						let currentElement2 = currentElement1[j];
						let tableFilmsTD = document.createElement('td');
						tableFilmsTD.textContent = currentElement2;
						tableFilmsTR.appendChild(tableFilmsTD);
						j += 1;
}
	tableFilmsBody.appendChild(tableFilmsTR);
}

	buttonFilms = document.createElement('button');
	buttonFilms.id = 'hideFilmsList';
	buttonFilms.textContent = 'Retour';

	divFilms.appendChild(buttonFilms);

	divFilms.hidden = 'true';
	return divFilms;
}

let tableDiv = filmsTable(filmsList);
document.body.appendChild(tableDiv);


// EXERCISE 1.4 //

let seeFilmsButton = document.getElementById('seeFilmsList');
let hideFilmsButton = document.getElementById('hideFilmsList');
let cinemaPresentationPage = document.getElementById('cinemaPresentation');
let filmsTableDiv = document.getElementById('divTable');

seeFilmsButton.addEventListener('click', function()
{
	cinemaPresentation.hidden = true;
	filmsTableDiv.hidden = false;
}, false);

hideFilmsButton.addEventListener('click', function()
{
	cinemaPresentation.hidden = false;
	filmsTableDiv.hidden = true;
}, false);


//EXERCISE 2.1 //

let substances =
[
	['SUBSTANCES', 'Température de fusion ou solidification en °C', 'Température d’ébullition en °C'],
	['acide acétique', '17', '118'],
	['acide nitrique', '-41', '86'],
	['acide sulfurique', '10', '290'],
	['alcool éthylique', '-114', '78'],
	['aluminium', '660', '2450']
];


// EXERCISE 2.2 //

function substancesTemperatures(sequence, degree)
{
	let returnedArray = [];
	let currentElement;
	let substanceNames;
	let substanceTemperatures;
	let	i = 1;



	while (i < sequence.length) {
		currentElement = sequence[i];
				i += 1
				substanceNames = currentElement[0];
				substanceTemperatures = parseInt(currentElement[2]);

				if (substanceTemperatures < degree)
				{
					returnedArray.push(substanceNames);
				}
}

	return returnedArray;
}

console.log(substancesTemperatures(substances, 300))
