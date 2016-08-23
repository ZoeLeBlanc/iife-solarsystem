//1. public property for holding the last modified date - put in return statement 
//2. getter/setter for planets - variable array
//3. getter/setter for activeSpacecraft
//4. getter/setter for planets we've landed on
var SolarSystem = (function(){
	var planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Neptune", "Uranus", "Pluto"];
	var activeSpacecraft = ["Millenium Falcon", "Cantebury", "X-Wing", "Mars Rover", "Death Star"];
	var planetsLandedOn = 0;
	return {
		modified_Date: new Date(document.lastModified),
		getPlanet: function() {
			return planets;
		},
		setPlanet: function(newPlanet) {
			planets.push(newPlanet);
		},
		getActiveSpacecraft: function() {
			return activeSpacecraft;
		},
		setActiveSpacecraft: function(newSpacecraft) {
			activeSpacecraft.push(newSpacecraft);
		},
		getPlanetsLandedOn: function() {
			return planetsLandedOn;
		},
		setPlanetsLandedOn: function(newPlanetsLanded) {
			planetsLandedOn = newPlanetsLanded;
		}
	}

})();