import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Data from './Data'


const Movie = () => {
    return (
        <div>
            <div className='conatiner'>
                <div className='row'>
                    <h1 className="text-center my-5">Top Rated Movies</h1>
                    {
                        Data.map((val) => {

                            return (
                                <div class="col-md-4 mt-1">
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={val.cover} height="200"/>
                                        <Card.Body>
                                            <Card.Title>{val.name}</Card.Title>
                                            <Card.Text>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                            <Button variant="primary">Go somewhere</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            );

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Movie