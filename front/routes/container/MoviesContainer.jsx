import React from 'react';
import { fetchMovies } from '../actionCreatior/Movies';
import Movies from '../component/Movies';
import {connect} from 'react-redux'



const mapStateToProps = (state,ownProps) =>({
    movies:state.movies.listMovies
})
const mapDispatchToProps = dispatch =>({
    fetchMovies:()=> dispatch(fetchMovies())
})

class MoviesContainer extends React.Component {
    

    render(){
        return <Movies movies={this.props.movies}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer)

