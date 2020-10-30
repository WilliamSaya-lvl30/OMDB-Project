import React from 'react';
import FormRegister from '../component/formRegister'
import {connect} from 'react-redux'
import {createUserDB} from '../actionCreatior/user'


const mapStateToProps = (state,ownProps) =>({
    // user:state.user.user
})
const mapDispatchToProps = (dispatch,ownProps) =>({
    createUserDB:(user)=> dispatch(createUserDB(user)),
    // history:ownProps.history
})


class RegisterContainer extends React.Component {
    constructor(){
        super()

        this.state={
            email:'',
            password:'',
            imgProfile:'',
            nick:'',
            message:false
        }
        this.hanledEmailinput=this.hanledEmailinput.bind(this)
        this.hanledPasswordinput=this.hanledPasswordinput.bind(this)
        this.hanledSumit=this.hanledSumit.bind(this)
        this.hanledImginput=this.hanledImginput.bind(this)
        this.hanledNickinput=this.hanledNickinput.bind(this)
    }

    hanledEmailinput(email){
        this.setState({email,message:false})
    }
    hanledPasswordinput(password){
        this.setState({password,message:false})
    }
    hanledImginput(imgProfile){
        this.setState({imgProfile,message:false})
    }
    hanledNickinput(nick){
        this.setState({nick,message:false})
    }

    hanledSumit(event){
        event.preventDefault()
      
        this.props.createUserDB(this.state)
        .then((user)=>{
            console.log(user)
        })
       
       this.setState({email:'',password:'',nick:'',imgProfile:'',message:true})  
    }

    render(){
        return <FormRegister 
                    formTitle="Register Form"
                    hanledEmailinput={this.hanledEmailinput}
                    hanledPasswordinput={this.hanledPasswordinput}
                    hanledNickinput={this.hanledNickinput}
                    hanledImginput={this.hanledImginput}
                    hanledSumit={this.hanledSumit}
                    password={this.state.password}
                    email={this.state.email}
                    imgProfile={this.state.imgProfile}
                    nick={this.state.nick}
                    message={this.state.message}
                
                />
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)