import React from 'react';
import { fetchMovie } from '../actionCreatior/Movies';
import Movie from '../component/movie';
import {connect} from 'react-redux'
import {addMovieFavorite} from '../actionCreatior/user'



const mapStateToProps = (state,ownProps) =>({
    selectedMovie:state.movies.selectedMovie,
    user:state.user.user
})
const mapDispatchToProps = (dispatch,ownProps) =>({
    fetchMovie:(id)=> dispatch(fetchMovie(id)),
    id:ownProps.match.params.id,
    addMovieFavorite:(id,movie)=>dispatch(addMovieFavorite(id,movie))
})

class MovieContainer extends React.Component {
    componentDidMount(){
        this.props.fetchMovie(this.props.id)
    }

    render(){
        return <Movie 
        selectedMovie={this.props.selectedMovie} 
        userId={this.props.user.id}
        addMovieFavorite={this.props.addMovieFavorite}
        />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)

