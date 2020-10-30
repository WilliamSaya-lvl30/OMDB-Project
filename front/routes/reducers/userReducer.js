const initialState = {
    users:[],
    user:{},
    selectUser:{},
    movieFavorites:[],
    friends:[],
  }
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case 'LOGIN_USER':
        return {...state,user:action.user}
      case 'LOGAUT_USER':
        return {...state,user:{}}
      case 'SELECT_USER':
          return {...state,selectUser:action.selectUser}
      case 'ADD_MOVIE_FAVORITES':
        const newState={...state}
            newState.movieFavorites=newState.movieFavorites.slice(0)
            newState.movieFavorites.push(action.movie)
            return newState
      case 'ADD_FRIENDS':
        const newStateF={...state}
            newStateF.friends=newStateF.friends.slice(0)
            newStateF.friends.push(action.friend)
            return newStateF
      case "GET_MOVIE_FAVORITES":
        return {...state,movieFavorites:action.movies}
      case "GET_USERS":
        return {...state,users:action.users}
      default:
        return state;
    }
  }