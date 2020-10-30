import React from 'react';
import Form from '../component/form'
import {connect} from 'react-redux'
import {loginUser,getMoviesFavorites} from "../actionCreatior/user"



const mapStateToProps = (state,ownProps) =>({
    user:state.user.user,
    movieFavorites:state.user.movieFavorites
})
const mapDispatchToProps = (dispatch,ownProps) =>({
    loginUser:(user)=> dispatch(loginUser(user)),
    getMoviesFavorites:(id)=> dispatch(getMoviesFavorites(id)),
    history:ownProps.history
})

class LoginContainer extends React.Component {
    constructor(){
        super()

        this.state={
            email:'',
            password:''
        }
        this.hanledEmailinput=this.hanledEmailinput.bind(this)
        this.hanledPasswordinput=this.hanledPasswordinput.bind(this)
        this.hanledSumit=this.hanledSumit.bind(this)
    }

    hanledEmailinput(email){
        this.setState({email})
    }
    hanledPasswordinput(password){
        this.setState({password})
    }

    hanledSumit(event){
        event.preventDefault()
        console.log("login attempt...")
      
        this.props.loginUser(this.state)
        .then((res)=>{
           
            console.log("login successful")
            this.props.history.push(`/users/${res.user.id}`)
           return this.props.getMoviesFavorites(res.user.id) 
        })
        
        this.setState({email:'',password:''})
    }

    render(){
        return <Form 
                    formTitle="Login Form"
                    hanledEmailinput={this.hanledEmailinput}
                    hanledPasswordinput={this.hanledPasswordinput}
                    hanledSumit={this.hanledSumit}
                    password={this.state.password}
                    email={this.state.email}
                
                />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)