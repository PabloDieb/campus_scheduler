import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import GlobalState from '../../GlobalState';

export default function Booking(props) {
    const [state, setState] = useContext(GlobalState);
    const [show, setShow] = useState(false);
    const [values, setValues] = useState({});
    const [classroomInfo, setClassroomInfo] = useState(props.classroomInfo[0])
    console.log(state, props);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onFormChange = (e, updatedAt) => setValues({ ...values, [e.target.name]: e.target.value });

    const submitHandler = (event) => {
      event.preventDefault();
      event.persist();
    };

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Solicitar
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sala: {classroomInfo ? classroomInfo.data.name : ""}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>Nome</Form.Label>
                <Col sm={10}>
                  <Form.Control
                    name="name"
                    type="text"
                    placeholder="Laboratório de Redes"
                    value={classroomInfo.data.name}
                    disabled
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2} htmlFor="classRoomStatus">Condição</Form.Label>
                <Col sm={10}>
                  <Form.Control 
                    name="status"
                    type="text"
                    id="classRoomStatus"
                    value={classroomInfo.data.status}
                    disabled
                    >
                  </Form.Control>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={5}>Capacidade máxima</Form.Label>
                <Col sm={6}>
                  <Form.Control
                    name="maximumCapacity"
                    type="text"
                    value={classroomInfo.data.maximumCapacity}
                    disabled
                    />
                </Col>
              </Form.Group>
              {
              classroomInfo.data.status !== "Inutilizável" ?
                <Form onSubmit={submitHandler}>
                  <Row>
                    <Col>
                      <Form.Group>
                          <Form.Check 
                            type="checkbox"
                            id="AB"
                            label="AB"
                            />
                          <Form.Control placeholder="First name" />
                          <Button>Solicitar</Button>
                      </Form.Group>
                    </Col>

                    <Col>
                      <Form.Group>
                        <Form.Check 
                          type="checkbox"
                          id="CD"
                          label="CD"
                          //Se ja ocupado, desabilitar
                          />
                        <Form.Control placeholder="Last name" />
                        <Button>Solicitar</Button>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form> 
              : "A função de locação está desabilitada devido o status da sala."
              }
              
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Fechar
                </Button>
              </Modal.Footer>
          </Modal.Body>
        </Modal>
      </>
    );
}