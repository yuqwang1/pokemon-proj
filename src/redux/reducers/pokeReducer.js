import { FETCH_POKES } from '../actionTypes';


const initialState = {
  pokemons: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKES:
      return {
        pokemons: action.pokemons
      }

    default:
      return state;
  }
}
