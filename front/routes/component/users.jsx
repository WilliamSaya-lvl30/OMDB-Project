import React from 'react'
import {Link} from 'react-router-dom'
import {Jumbotron, Button,Col, CardDeck,Card,} from 'react-bootstrap'

const fotoperfil="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0xhh5P2G5g91c9t0kOn_2X38oflwFR6AMdQ&usqp=CAU"

export default ({user,users,selectUser, message,})=>{

    return (<>{user.id ? (
        <CardDeck>
        {users && users.map(U=>{
            return(
            <Col xs={3} key={U.id}>
                <Link  to={`/users/${U.id}/favorites`} onClick={()=>selectUser(U.id)}>
                    <Card bg='dark' className='card'>
                        <Card.Img 
                        variant="top" 
                        src={U.imgProfile ? U.imgProfile : fotoperfil} 
                        className='card-img'/>
                        <Card.Body >
                            <Card.Title className="justify-content-md-center">
                                {U.nick ? U.nick : U.email}
                            </Card.Title>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">
                            <i class="fas fa-user-plus"></i>Add Friend
                        </small>
                        </Card.Footer>
                    </Card>
                </Link>
            </Col>
            )
        })}
    </CardDeck>
        
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