import React from 'react'
import { Card,ListGroup, Col,Row } from 'react-bootstrap';


export default ({selectedMovie,addMovieFavorite,userId})=>{
    const movie={
        Title:selectedMovie.Title,
        imdbID:selectedMovie.imdbID,
        Poster:selectedMovie.Poster
    }
    return(
        
        <>
         <Row className="justify-content-md-center">
            <h1>{selectedMovie.Title}</h1>
        </Row>
        <Row>
        <Col xs={4} className="justify-content-md-center">
            <Card bg='dark' >
                <Card.Img variant="top" bsPrefix="img" src={selectedMovie.Poster} />  
                <Card.Body>
                    <Card.Link href="#"
                    onClick={e=>addMovieFavorite(userId,movie)}
                    >Add Favorites<i class="far fa-star">
                        
                        </i></Card.Link>
                </Card.Body>
            </Card>
            </Col>
            <Col xs={8}>
            <ListGroup className="list-group-flush">
                    <ListGroup.Item variant="dark"><b>Rankin :</b> {selectedMovie.imdbRating}</ListGroup.Item>
                    <ListGroup.Item><b>Description :</b>({selectedMovie.Year}) {selectedMovie.Plot}</ListGroup.Item>
                    <ListGroup.Item variant="Secondary"><b>Genre :</b>{selectedMovie.Genre}</ListGroup.Item>
                    <ListGroup.Item variant="Secondary"><b>Director :</b>{selectedMovie.Director}</ListGroup.Item>
                    <ListGroup.Item><b>Actors :</b>{selectedMovie.Actors}</ListGroup.Item>
                    <ListGroup.Item><b>Writer :</b>{selectedMovie.Writer}</ListGroup.Item>
                    <ListGroup.Item variant="Secondary"><b>Awards :</b>{selectedMovie.Awards}</ListGroup.Item>
                    <ListGroup.Item><b>Run Time :</b>{selectedMovie.Runtime}</ListGroup.Item>
                    <ListGroup.Item variant="Secondary"><b>Rating :</b>{selectedMovie.imdbRating}</ListGroup.Item>
                </ListGroup>
            </Col>
            </Row>
            </>
    )
}