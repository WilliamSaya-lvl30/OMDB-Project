import React from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Button,Col, Row,ListGroup,Image} from 'react-bootstrap'
import Movies from "./Movies"

const fotoperfil="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0xhh5P2G5g91c9t0kOn_2X38oflwFR6AMdQ&usqp=CAU"

export default ({user,favoritesMovies, message,eventRemoveF,userLogger})=>{

    return (<>{user.id ? (
            <>
                <Col xs={3}>
                <Image src={user.imgProfile ? user.imgProfile : fotoperfil} roundedCircle />
                <Row >
                <ListGroup className='userName'>
                    <ListGroup.Item>{user.nick ? user.nick : user.email}</ListGroup.Item>
                    {userLogger && <ListGroup.Item><i className="fas fa-users"></i>Add Friends</ListGroup.Item>}
                </ListGroup>
                    
                </Row>
                </Col>
                <Col xs={9}>
                    <Movies movies={favoritesMovies} eventRemoveF={eventRemoveF}/>
                </Col>
                </>
        ):(
            <>
                <Col xs={8}>
                <Jumbotron >
                    <h1 >Usuario no encontrado!!</h1>
                    <p>
                    Si no estas Registrado haz click en REGISTER!!
                    </p>
                    <p>
                    Si ya estas Registrado haz click en LOGIN!!
                    </p>
                    <p>
                    <Link to='/register'><Button variant="primary" className='boton'>REGISTER</Button></Link>
                    <Link to='/login'><Button variant="primary" className='boton'>LOGIN</Button></Link>
                    </p>
                </Jumbotron>
                </Col>
                </>
        )}
        </>)
        
    
    
}