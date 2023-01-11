import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import duneImage from "../assets/images/trending/dune.jpg"
import everythingImage from "../assets/images/trending/everything.jpg"
import infiniteImage from "../assets/images/trending/infinite.jpg"
import jokerImage from "../assets/images/trending/joker.jpg"
import lightyearImage from "../assets/images/trending/lightyear.jpg"
import morbiusImage from "../assets/images/trending/morbius.jpg"


const Trending = () => {
    return (
        <Container id='trending'>
            <br />
            <br />
            <h1 className='text-white'>TRENDING MOVIES</h1>
            <br />
            <Row>
                <Col md={4} className='movieWrapper' >
                    <Card className="bg-dark text-white movieImage">
                        <Card.Img src={duneImage} alt="Dune Film" className='images' />
                        <div className='mt-1 p-2'>
                            <Card.Title className='text-center'>DUNE</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="bg-dark text-white movieImage">
                        <Card.Img src={everythingImage} alt="Dune Film" className='images'/>
                        <div className='mt-1 p-2'>
                            <Card.Title className='text-center'>EVERYTHING EVERYWHERE</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="bg-dark text-white movieImage">
                        <Card.Img src={infiniteImage} alt="Dune Film" className='images'/>
                        <div className='mt-1 p-2'>
                            <Card.Title className='text-center'>INFINITE</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="bg-dark text-white movieImage">
                        <Card.Img src={jokerImage} alt="Dune Film" className='images'/>
                        <div className='mt-1 p-2'>
                            <Card.Title className='text-center'>JOKER</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="bg-dark text-white movieImage">
                        <Card.Img src={lightyearImage} alt="Dune Film" className='images'/>
                        <div className='mt-1 p-2'>
                            <Card.Title className='text-center'>LIGHTYEAR</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="bg-dark text-white movieImage">
                        <Card.Img src={morbiusImage} alt="Dune Film" className='images'/>
                        <div className='mt-1 p-2'>
                            <Card.Title className='text-center'>MORBIUS</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Trending