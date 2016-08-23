console.log("Solar System ", SolarSystem);
console.log("Solar System modified", SolarSystem.modified_Date);
console.log(SolarSystem.setPlanets("moon"));
console.log("Solar System + moon", SolarSystem.getPlanets());
console.log("Planets Landed", SolarSystem.setPlanetsLandedOn(5));
console.log("SolarSystem Landed", SolarSystem.getPlanetsLandedOn());
console.log("Solar System Closest Stars", SolarSystem.getClosestStars());