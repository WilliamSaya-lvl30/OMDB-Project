import React from 'react'
import {Carousel,Row} from 'react-bootstrap'

const taquilleras=[{
        Poster: "https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_SX300.jpg",
        Title: "Tenet",
        Type: "movie",
        Year: "2020",
        imdbID: "tt6723592"
},
{
    Poster: "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Batman v Superman: Dawn of Justice",
    Type: "movie",
    Year: "2016",
    imdbID: "tt2975590"
},
{
    Poster: "https://m.media-amazon.com/images/M/MV5BNDliY2E1MjUtNzZkOS00MzJlLTgyOGEtZDg4MTI1NzZkMTBhXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_SX300.jpg",
    Title: "Mulan",
    Type: "movie",
    Year: "2020",
    imdbID: "tt4566758"
}
]

export default ()=>{
    return(
        <>
      
        <Row>
            <Carousel >
            
                {taquilleras.map(movie=>{
                    return(                    
                        <Carousel.Item key={movie.imdbID}>
                            <img
                            className="d-block w-100"
                            src={movie.Poster}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h1>OMDB Proyect</h1>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            
            
            </Carousel>
        </Row>
        </>
    )
}