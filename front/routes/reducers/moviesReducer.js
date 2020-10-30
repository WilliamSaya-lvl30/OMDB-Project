const initialState = {
  listMovies: [],
  selectedMovie: {}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case 'RECEIVE_MOVIE':
      return Object.assign({}, state, { selectedMovie: action.movie });
    case 'RECEIVE_MOVIES':
      return Object.assign({}, state, { listMovies: action.movies });
    default:
      return state;
  }
}