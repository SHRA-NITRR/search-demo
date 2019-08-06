import fetch from 'isomorphic-fetch';


export const getProducts = () => {
    const endpoint = 'https://api.myjson.com/bins/109m7i';

    return fetch(endpoint)
        .then((response) => {
            return response.json();
        })
};