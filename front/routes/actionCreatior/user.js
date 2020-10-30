import axios from 'axios'


const loginUserD= user =>({
    type:'LOGIN_USER',
    user
})

const logautUser=()=>({type:"LOGAUT_USER"})

const addMovie=(movie)=>({
    type:'ADD_MOVIE_FAVORITES',
    movie
})

const getFavorites=movies=>({
    type:'GET_MOVIE_FAVORITES',
    movies
})

const getUsers=users=>({
    type:'GET_USERS',
    users
})


const receiveUser= selectUser =>({
    type:'SELECT_USER',
    selectUser
})


export const createUserDB = (user)=>dispatch =>{
    return axios.post(`/api/register`,user)
    .then(res => console.log(res.data)
    )
    
}


export const logaut = (user)=>dispatch =>{
    
    return axios.post(`/api/logaut`,user)
    .then(res =>{
        console.log("logaut action",res)
        return dispatch(logautUser())
    } )
    .catch(e=>console.log(e))
}


export const loginUser = (user)=>dispatch =>{
    return axios.post(`/api/login`,user)
    .then(res => res.data)
    .then(user => dispatch(loginUserD(user))
    )
    .catch(e=>console.log(e))
    
}


export const removeMovieFavorite = (userId,movieId)=>dispatch =>{
    axios.delete(`/api/users/${userId}/movies/${movieId}`)
    .then(()=>{
       return axios.get(`/api/users/${userId}/movies`)
    })
    .then(res => res.data)
    .then(movies => dispatch(getFavorites(movies))
    )
    .catch(e=>console.log(e))
}




export const addMovieFavorite = (id,movie)=>dispatch =>{
    return axios.post(`/api/users/${id}/movies`,movie)
    .then(res => res.data)
    .then(movie => dispatch(addMovie(movie))
    )
    .catch(e=>console.log(e))
    
}


export const getMoviesFavorites = (id)=>dispatch =>{
    return axios.get(`/api/users/${id}/movies`)
    .then(res => res.data)
    .then(movies => dispatch(getFavorites(movies))
    )
    .catch(e=>console.log(e))
    
}


export const getUsersList = ()=>dispatch =>{
    return axios.get(`/api/users`)
    .then(res => res.data)
    .then(users => dispatch(getUsers(users))
    )
    .catch(e=>console.log(e))
    
}

export const loginSecccion = ()=>dispatch =>{
    console.log("seccion")
    return axios.get(`/api/me`)
    .then(res => res.data)
    .then(user =>{ 
        if(user.id){
             dispatch(loginUserD(user))
             getMoviesFavorites(user.id)
        }
       
        
    })
    .catch(e=>console.log(e))
    
}


export const selectUser = (id)=>dispatch =>{
    return axios.get(`/api/users/${id}`)
    .then(res => res.data)
    .then(selectUser => dispatch(receiveUser(selectUser))
    )
    .catch(e=>console.log(e))
}