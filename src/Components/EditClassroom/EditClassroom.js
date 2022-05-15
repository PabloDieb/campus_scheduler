import { useState } from "react";
import { Button, Modal, Form} from "react-bootstrap";
import { db, doc, updateDoc } from "../../Services/Firebase";

export default function EditClassroom(props) {
    const [show, setShow] = useState(false);
    const [values, setValues] = useState({});
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const updateClassroom = async (values) => {
      await updateDoc(doc(db, "classrooms", props.classroom.id), values);
    }

    const onFormChange = (e, updatedAt) => {
      const name = e.target.name;
      const value = e.target.value;
      setValues({ ...values, [name]: value });
    };

    const submitHandler = (event) => {
      event.preventDefault();
      event.persist();
      updateClassroom(values);
    };

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Editar
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  defaultValue={props.classroom.data.name}
                  placeholder="Laboratório de Redes"
                  onChange={onFormChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="classRoomStatus">Condição</Form.Label>
                <Form.Select 
                  id="classRoomStatus"
                  name="status"
                  defaultValue={props.classroom.data.status}
                  onChange={onFormChange}
                >
                  <option>Selecione uma opção</option>
                  <option value="Utilizável">Utilizável</option>
                  <option value ="Inutilizável">Inutilizável</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Capacida máxima</Form.Label>
                <Form.Control
                  name="maximumCapacity"
                  defaultValue={props.classroom.data.maximumCapacity}
                  type="text"
                  placeholder="30"
                  onChange={onFormChange}
                />
              </Form.Group>
              <Modal.Footer>
                <Button type ="submit" variant="primary" onClick={handleClose}>
                  Salvar
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                  Fechar
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
}