import React from 'react'
import User from '../component/user'
import {connect} from 'react-redux'
import {getMoviesFavorites,removeMovieFavorite} from '../actionCreatior/user'


const mapStateToProps =(state)=>({
    user:state.user.user,
    movieFavorites:state.user.movieFavorites
})

const mapDispatchToProps=(dispatch,ownProps)=>({
    getMoviesFavorites:(id)=>dispatch(getMoviesFavorites(id)),
    removeMovieFavorite:(userId,movieId)=>dispatch(removeMovieFavorite(userId,movieId))
})

class UserContainer extends React.Component{

    constructor(){
        super()

        this.eventRemoveF=this.eventRemoveF.bind(this) 
    }

    componentDidMount(){
        if(this.props.user.id){
            this.props.getMoviesFavorites(this.props.user.id)
            } 
    }

    eventRemoveF (movieid){
        const userId=this.props.user.id
        const movieId=movieid
        this.props.removeMovieFavorite(userId,movieId)
    }
   
    render(){
        return (
            <User
            user={this.props.user}
            favoritesMovies={this.props.movieFavorites}
            eventRemoveF={this.eventRemoveF}
            
            />
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)