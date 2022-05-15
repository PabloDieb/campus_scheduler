import ClassroomsItineraryTable from '../Components/ClassroomsItineraryTable/ClassroomsItineraryTable';
import { Container, Row, Col } from 'react-bootstrap';

export default function ClassroomsItineraryPage() {
  return(
    <Container fluid className={{width: '100%'}}>
        <Row className="justify-content-md-center">
          <Col xs={12}>
            <ClassroomsItineraryTable />
          </Col>
        </Row>
      </Container>
  )
}