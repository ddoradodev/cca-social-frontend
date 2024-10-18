import axios from "axios";
export const baserUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";
// con fetch api and promise
export const getPokemons3 = () => {
  return fetch(`https://pokeapi.co/api/v2/pokemon`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

// con fetch api and async await
export const getPokemons4 = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  const data = await response.json();
  return data;
};
// con axios y promise

export const getPokemons2 = () => {
  return axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
    return res.data;
  });
};
// con axios y async await
export const getPokemons = async () => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  return response;
};
