import React from 'react'
import { Link } from 'react-router-dom';
import { CardDeck,Card,Col,Row } from 'react-bootstrap';


export default ({movies,eventRemoveF})=>{

    return(
        <>
         <Row className="justify-content-md-center">
            <h1>OMDB Proyect</h1>
        </Row>
        <Row className="justify-content-md-center">
        <CardDeck>
            {movies && movies.map(M=>{
                return(
                <Col xs={3} key={M.imdbID}>
                    <Link  to={`/movies/${M.imdbID}`}>
                        <Card bg='dark' className='card'>
                            <Card.Img variant="top" src={M.Poster} className='card-img'/>
                            <Card.Body >
                                <Card.Title className="justify-content-md-center">{M.Title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                    {eventRemoveF && <Card.Footer onClick={()=>eventRemoveF(M.id)}>
                            <small  className="text-muted"><i class="fas fa-times"></i>Remove Favorite</small>
                            </Card.Footer> }
                </Col>
                )
            })}
        </CardDeck>
        </Row>
        </>
    )
}