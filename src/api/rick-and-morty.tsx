import axios from "axios";

// import axios from "axios";
export const baserUrl = "https://rickandmortyapi.com/api/character";
// con fetch api and promise
export const getCharacters1 = (page: number) => {
  return fetch(`${baserUrl}/?page=${page}`)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });
};
// con fetch api and async await
export const getCharacters2 = async () => {
  const response = await fetch(`${baserUrl}`);
  const data = await response.json();
  return data;
};
// con axios y promise

export const getCharacters3 = () => {
  return axios.get(`${baserUrl}`).then((res) => {
    return res.data;
  });
};
// con axios y async await
export const getCharacters4 = async () => {
  const response = await axios.get(`${baserUrl}`);
  return response;
};

//get character by id
export const getCharactersById = async (id: string | undefined) => {
  const response = await axios.get(`${baserUrl}/${id}`);
  return response;
};
