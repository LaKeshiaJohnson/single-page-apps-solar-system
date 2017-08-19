console.log("solar system");

var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var element = document.getElementById("planets");

planets.forEach(function(planet) {
	//console.log("current planet", planet);
	element.innerHTML += `<p>${planet}</p>`;
})


// Use the map method to create a new array where the first letter of each planet is capitalized

//.map - do something to each item in the array, and return a brand new array
//.slice- include only one # in slice(), it will start from that # and continue to the end of the string
//capitalize only 1st letter each string and add it to the slice

let capitals = planets.map(function(planet) {
	return planet[0].toUpperCase() + planet.slice(1);

})
	console.log("capitalized", capitals);

element.innerHTML += `<p>Planets capitalized: ${capitals}</p>`;

// Use the filter method to create a new array that contains planets with the letter 'e'

//.filter returns a brand new array
//.test - w3schools: The test() method tests for a match in a string. returns true if it finds a match, otherwise it returns false.
let filtered = planets.filter(function(planet) {
	return /e/.test(planet);	
})
console.log("Planets containing the letter 'e': ", filtered);

element.innerHTML += `<p>Planets containing the letter 'e': ${filtered}</p>`;


// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var sentence = words.reduce(function(x, y){
    return x + " " + y;
    });
console.log("new sentence: ", sentence);

element.innerHTML += `<p>Reduce method: ${sentence}</p>`;


