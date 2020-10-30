import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form,FormControl, Button ,ToggleButtonGroup,ToggleButton} from 'react-bootstrap';
import {connect} from 'react-redux'
import { fetchMovies,fetchSeries } from '../actionCreatior/Movies';
import {logaut} from '../actionCreatior/user'
import {loginSecccion} from '../actionCreatior/user'

const mapStateToProps = (state) =>({
    movies:state.movies.listMovies,
    user:state.user.user
})
const mapDispatchToProps = (dispatch,ownProps) =>({
    fetchMovies:(query)=> dispatch(fetchMovies(query)),
    fetchSeries:(query)=> dispatch(fetchSeries(query)),
    history:ownProps.history,
    logaut:(user)=>dispatch(logaut(user)),
    loginSecccion:()=>dispatch(loginSecccion())
})

const isLogged= user => user.id ? true :false


class NavBar extends React.Component {
    constructor(){
        super()
        this.state={
            moviesQuery:"",
            type:"movie"
        }
    }

    componentDidMount(){
        this.props.loginSecccion()
    }
   

    hanledType(type){
        console.log(type)
        this.setState({type})
    }

    hanledMoviesinput(movie){
        this.setState({moviesQuery:movie})
    }

    hanledSumit(event){
        event.preventDefault()
       if(this.state.moviesQuery){
        if(this.state.type==="movie"){
            this.props.fetchMovies(this.state.moviesQuery)
           } else{
            this.props.fetchSeries(this.state.moviesQuery)
           }
           this.state.moviesQuery=""
           this.props.history.push("/movies")
           console.log(this.props.history)
       }
       
    }

    hanledLogaut (event){
        event.preventDefault()
        this.props.logaut(this.props.user)
        this.props.history.push("/")
    }
   

    render(){
        const isLoggedIn =isLogged(this.props.user)
        return (
            <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">React-OMDB Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/">
                        <Nav.Link href="/">Home</Nav.Link>
                    </Link>
                    <Link to="/movies">
                        <Nav.Link href="/movies">Movies</Nav.Link>
                    </Link>
                    {isLoggedIn && <>
                    <Link to="/users">
                        <Nav.Link href="/users">Users</Nav.Link>
                    </Link> 
                    <Link to={`/users/${this.props.user.id}`}>
                    <Nav.Link href={`/users/${this.props.user.id}`}>Profile</Nav.Link>
                    </Link></>}
                </Nav>

               <Form onClick={e=>this.hanledType(e.target.value)} className="radioboton">
                <Form.Check 
                    name="type"
                    type="radio"
                   value="movie"
                    label="movie"
                />
                <Form.Check 
                name="type"
                    type="radio"
                   value="serie"
                    label="serie"
                />
               </Form>

                <Form inline onSubmit={(e)=>this.hanledSumit(e)}>
                <FormControl 
                    type="text" 
                    placeholder="Search" 
                    className="mr-sm-2" 
                    value={this.state.moviesQuery}
                    onChange={(e)=>this.hanledMoviesinput(e.target.value)}
                />
                <Button variant="outline-success" type="submit" className='boton'>Search</Button>
                </Form>
                {isLoggedIn ? (
                    <Link to="/">
                        <Button 
                        bg='danger' 
                        variant="outline-danger" 
                        onClick={e=>this.hanledLogaut(e)}
                        className='boton'
                        >logaut</Button>
                    </Link>
                ):( <>
                    <Link to="/register">
                    <Button variant="outline-info" className='boton'>Register</Button>
                </Link>
                <Link to="/login">
                    <Button variant="outline-primary" className='boton'>Login</Button>
                </Link></>
                )}
                   
            </Navbar.Collapse>
            </Navbar>
        )
    }
    
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
