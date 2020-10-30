import React from 'react';
import MoviesContainer from '../container/MoviesContainer'
import MovieContainer from '../container/MovieContainer'
import { Route, Redirect, Switch } from 'react-router-dom'
import Navbar from './navbar'
import {Row, Container} from 'react-bootstrap'
import Home from './home'
import LoginContainer from '../container/loginContainer'
import RegisterContainer from "../container/registerContainer"
import UserContainer from "../container/UserContainer"
import UsersContainer from "../container/UsersContainer"
import UserFavoritesContainer from "../container/UserFavoritesContainer"

export default function ({history}) {


  return (
    <div>
      <Navbar history={history}/>
      <Container>
      <Row className="justify-content-md-center">
        <Switch>
        <Route path="/movies/:id" component={MovieContainer}/>  
        <Route path="/movies" component={MoviesContainer}/>
        <Route path="/login" component={LoginContainer}/>
        <Route path="/register" component={RegisterContainer}/>
        <Route path="/users/:id/favorites" component={UserFavoritesContainer}/>
        <Route path="/users/:id" component={UserContainer}/>
        <Route path="/users" component={UsersContainer}/>
        <Route path="/" component={Home}/>
        <Redirect from="/" to="/" />
      </Switch>
      </Row>
     
      
    </Container>
    </div>
   
  );

}