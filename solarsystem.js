var SolarSystem = (function(){
	var planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Neptune', 'Uranus', 'Pluto'];
	var activeSpacecrafts = ['Millenium Falcon', 'Voyager II', 'Cantebury', 'Mars Rover'];
	var planetsLandedOn = 0;
	return {
		modified_date: new Date(document.lastModified),
		getPlanets: function() {
			return planets;
		},
		setPlanets: function(newPlanet) {
			planets.push(newPlanet);
		},
		getActiceSpacecrafts: function() {
			return activeSpacecrafts;
		},
		setActiveSpacecrafts: function(newSpacecraft) {
			activeSpacecrafts.push(newSpacecraft);
		},
		getPlanetsLandedOn: function() {
			return planetsLandedOn;
		},
		setPlanetsLandedOn: function(newPlanetLanded) {
			planetsLandedOn += newPlanetLanded;
		}
	}
})();