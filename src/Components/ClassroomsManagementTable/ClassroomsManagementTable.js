import { useState, useEffect } from 'react';
import { Table, Button, Pagination, Container, Row, Col } from 'react-bootstrap';
import { db, doc, getDocs, deleteDoc, collection } from '../../Services/Firebase';
import EditClassroom from '../EditClassroom/EditClassroom';
import NewClassroom from '../NewClassRoom/NewClassroom';
import './ClassroomsManagementTable.css'

export default function ClassroomsManagementTable() {
  const [classrooms, setClassrooms] = useState([]);

  useEffect(() => {
    fetchClassrooms();
    pag();
    console.log("effect")
  }, []);

  useEffect(() => {}, [classrooms])
  const fakeData = [
    {
      id: 1,
      data: {
        name: "1",
        status: "Utilizável",
        maximumCapacity: 35
      }
    },
    {
      id: 1,
      data: {
        name: "1",
        status: "Utilizável",
        maximumCapacity: 35
      }
    },
    {
      id: 1,
      data: {
        name: "1",
        status: "Utilizável",
        maximumCapacity: 35
      }
    }
  ]
  // Fetch the required data using the get() method
  const fetchClassrooms = async () => {
    // let response = await getDocs(collection(db, "classrooms"));
    // let array = response.docs.map( classroom => (
    //   {
    //     "id": classroom.id,
    //     "data": classroom.data()}
    // ));
    // setClassrooms([...array]);
    setClassrooms(fakeData);
}

  const deleteClassroom = async (classroomId) => {
    deleteDoc(doc(db, "classrooms", classroomId));
  }

  let active = 2;
let items = [];
const pag = () => {for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
  console.log(items);
  console.log(classrooms)
}}

  return (
    <Container id="containerClassroomsTableManagement">
      <Row>
        <Col>
          <NewClassroom/>
        </Col>
      </Row>

      <Row>
        <Col>
          <Table striped bordered hover id="tableX">
            <thead>
              <tr style={{display: 'flex', flexDirection: 'row'}}>
                <th style={{flex:1}}>Sala</th>
                <th style={{flex:1}}>Status</th>
                <th style={{flex:1}}>Capacidade Máxima</th>
                <th style={{flex:1}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              { 
                classrooms.map( classroom => 
                  <tr>
                    <td>{classroom.data.name}</td>
                    <td>{classroom.data.status}</td>
                    <td>{classroom.data.maximumCapacity}</td>
                    <td>
                      <EditClassroom classroom={classroom}/>
                      <Button variant="danger" onClick={() => deleteClassroom(classroom.id)}>Delete</Button>
                    </td>
                  </tr>
                )
              }
            </tbody>
          </Table>
        </Col>
      </Row>

      <Row>
        <Col />
        <Col>
          <Pagination size="lg">
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
          </Pagination>

        </Col>
        <Col />
      </Row>
    </Container>
  )
}