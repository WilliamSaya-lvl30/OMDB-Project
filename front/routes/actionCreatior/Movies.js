import axios from 'axios'

const receiveMovies= movies =>({
    type:'RECEIVE_MOVIES',
    movies
})


const receiveMovie= movie =>({
    type:'RECEIVE_MOVIE',
    movie
})

export const fetchMovies = (query)=>dispatch =>{
    return axios.get(`http://www.omdbapi.com/?apikey=20dac387&s=${query}`)
    .then(res => res.data)
    .then(movies => dispatch(receiveMovies(movies.Search)));
}

export const fetchSeries = (query)=>dispatch =>{
    return axios.get(`http://www.omdbapi.com/?apikey=20dac387&s=${query}&type=series`)
    .then(res => res.data)
    .then(series => dispatch(receiveMovies(series.Search)));
}


export const fetchMovie = (id)=>dispatch =>{
    return axios.get(`http://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then(res => res.data)
    .then(album => dispatch(receiveMovie(album)));
}