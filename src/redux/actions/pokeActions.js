import { FETCH_POKES } from '../actionTypes';

export const fetchPokes = () => dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=964&offset=0')
    .then(res => res.json())
    .then(pokemons => dispatch({
      type: FETCH_POKES,
      pokemons
    }))
}
