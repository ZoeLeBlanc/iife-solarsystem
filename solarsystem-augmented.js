//1. getter/setter for closest stars to the sun
//2. getter/setter for age of solarsystem
//3. getter/setter for known dwarf planets
var SolarSystem = (function(newSolarSystem){
	var closestStars = ["Alpha Centauri", "Star Bright"];
	var ageSolarSystem = 0;
	var dwarfPlanets = ["Red Dwarf", "Dwarfy Dwarf"];

	//newSolarSystem.greeting ="hi";
	newSolarSystem.getClosestStars = function() {
		return closestStars;
	};
	newSolarSystem.setClosestStars = function(newClosestStar) {
		closestStars.push(newClosestStar);
	};
	newSolarSystem.getAgeSolarSystem = function() {
		return ageSolarSystem;
	};
	newSolarSystem.setAgeSolarSystem = function(newAgeSolarSystem) {
		ageSolarSystem = newAgeSolarSystem;
	};
	newSolarSystem.getDwarfPlanets = function() {
		return dwarfPlanets;
	};
	newSolarSystem.setDwarfPlanets = function(newDwarfPlanet) {
		dwarfPlanets.push(newDwarfPlanet);
	};
	return newSolarSystem; 
})(SolarSystem || {});