import Card from 'react-bootstrap/Card';
import { Row, Col, Container } from 'react-bootstrap';
import antmanImage from "../assets/images/superhero/antman.jpg"
import avengerImage from "../assets/images/superhero/avenger.jpg"
import batmanImage from "../assets/images/superhero/batman.jpg"
import robinhoodImage from "../assets/images/superhero/robinhood.jpg"
import spidermanImage from "../assets/images/superhero/spiderman-cover.jpg"
import supermanImage from "../assets/images/superhero/superman.jpg"


const Superhero = () => {
    return (
        <Container id="superhero">
            <br />
            <br />
            <h1 className='text-white'>SUPERHERO MOVIES</h1>
            <br />
            <Row>
                <Col md={4} className='movieWrapper'>
                    <Card className="bg-dark text-white movieImage">
                        <Card.Img src={antmanImage} alt="Dune Film" className='images' />
                        <div className='mt-1 p-2'>
                            <Card.Title className='text-center'>ANT MAN</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="bg-dark text-white movieImage">
                        <Card.Img src={avengerImage} alt="Dune Film" className='images'/>
                        <div className='mt-1 p-2'>
                            <Card.Title className='text-center'>AVENGER</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="bg-dark text-white movieImage">
                        <Card.Img src={batmanImage} alt="Dune Film" className='images'/>
                        <div className='mt-1 p-2'>
                            <Card.Title className='text-center'>BATMAN</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="bg-dark text-white movieImage">
                        <Card.Img src={robinhoodImage} alt="Dune Film" className='images'/>
                        <div className='mt-1 p-2'>
                            <Card.Title className='text-center'>ROBINHOOD</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="bg-dark text-white movieImage">
                        <Card.Img src={spidermanImage} alt="Dune Film" className='images'/>
                        <div className='mt-1 p-2'>
                            <Card.Title className='text-center'>SPIDERMAN</Card.Title>
                            <Card.Text className='text-left'>
                                This is a wider card with supporting text below as a natural
                            </Card.Text>
                            <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className='movieWrapper'>
                    <Card className="bg-dark text-white movieImage">
                        <Card.Img src={supermanImage} alt="Dune Film" className='images'/>
                        <div className='mt-1 p-2'>
                            <Card.Title className='text-center'>SUPERMAN</Card.Title>
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

export default Superhero