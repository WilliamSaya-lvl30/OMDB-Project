import React from 'react'
import Users from '../component/users'
import {connect} from 'react-redux'
import {getUsersList,selectUser} from '../actionCreatior/user'


const mapStateToProps =(state)=>({
    user:state.user.user,
    users:state.user.users
})

const mapDispatchToProps=(dispatch,ownProps)=>({
    getUsersList:()=>dispatch(getUsersList()),
    selectUser:(id)=>dispatch(selectUser(id))
})

class UsersContainer extends React.Component{

    componentDidMount(){
        if(this.props.user.id){
            this.props.getUsersList()
            } 
    }
   
    render(){
        return (
            <Users
            user={this.props.user}
            users={this.props.users}
            selectUser={this.props.selectUser}
            
            />
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)