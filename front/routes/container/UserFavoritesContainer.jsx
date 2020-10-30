import React from 'react'
import User from '../component/user'
import {connect} from 'react-redux'


const mapStateToProps =(state)=>({
    user:state.user.selectUser,
    
})

const mapDispatchToProps=(dispatch,ownProps)=>({
    
})

class UserFavoritesContainer extends React.Component{

    render(){
        return (
            <User
            user={this.props.user}
            favoritesMovies={this.props.user.favorites}
            userLogger={true}
            />
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserFavoritesContainer)