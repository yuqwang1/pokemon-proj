import { FETCH_POKES } from '../actionTypes';


const initialState = {
  pokes: null,
  poke: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POKES:
      return {
        ...state,
        pokes: action.pokemons
      }

    default:
      return state;
  }
}
