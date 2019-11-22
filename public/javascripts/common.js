const randomFloat = (min, max) => Math.random() * (max - min) + min;
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const shuffle = array => array.sort(() => Math.random() - 0.5);

function cleanExoplanets(exoplanets, totalElements = 10) {
  exoplanets = exoplanets
    .filter(exoplanet => exoplanet.pl_radj !== null)
    .map(exoplanet => {
      return {
        size: exoplanet.pl_radj,
        name: exoplanet.pl_name
      };
    })
    .sort((a, b) => {
      if (a.size > b.size) return -1;
      if (a.size < b.size) return 1;
    });

  let chosenExoplanets = exoplanets.splice(0, totalElements);

  let smallestPlanet = Math.min(...chosenExoplanets.map(exoplanet => exoplanet.size));
  let largestPlanet = Math.max(...chosenExoplanets.map(exoplanet => exoplanet.size));

  let scale = d3
    .scaleLinear()
    .domain([smallestPlanet, largestPlanet])
    .range([100, 200]);

  return chosenExoplanets.map(exoplanet => {
    return {
      ...exoplanet,
      scaledSize: +scale(exoplanet.size).toFixed(2)
    };
  });
}
