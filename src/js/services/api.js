const pokemonData = () => {
    return fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then(response => response.json()) 
      .then(data => {
        console.log(data);
            
        const promises = data.results.map(pokemon => {
          return fetch(pokemon.url).then(res => res.json(),);
        });      
        return Promise.all(promises);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  };
  
  export default pokemonData;
  