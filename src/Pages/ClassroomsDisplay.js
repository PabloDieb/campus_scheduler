import ClassroomsTableDisplay from '../Components/ClassroomsTableDisplay/ClassroomsTableDisplay';
import { Container, Row, Col, Carousel } from 'react-bootstrap';

export default function ClassroomDisplayPage() {
  return(
    <Container fluid>
        <Row className="justify-content-md-center">
          <Col/>
          <Col xs={10}>
            <Carousel controls={false} interval="1000">
              <Carousel.Item>
                <ClassroomsTableDisplay />
              </Carousel.Item>
              <Carousel.Item>
                <ClassroomsTableDisplay />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col/>
        </Row>
      </Container>
  )
}