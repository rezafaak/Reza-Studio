import { Container, Row, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
            <Container className='text-white d-flex justify-content-center align-items-center'>
                <Row>
                    <Col>
                        <h1 className='title text-center'>HALLO SELAMAT DATANG</h1>
                        <h1 className='title text-center'>DI REZAFAK STUDIO</h1>
                        <div className='mt-4 text-center'>
                        <Button variant='dark' href="#trending">Semua List Film</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro