import { Table } from 'react-bootstrap';
import { useState, useEffect, useContext } from "react";
import { db, collection, getDocs } from "../../Services/Firebase";
import GlobalState from '../../GlobalState';

export default function ClassroomsItineraryTable() {
  const [state, setState] = useContext(GlobalState);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // fetchLocations();//Adicionar data como param e classroomID
    // console.log("stateLocations", state)
    // setState(state => ({...state, locations: locations}))
    
  }, []);
  
  const fetchLocations = async () => {
    let response = await getDocs(collection(db, "locations"));
    
    let array = response.docs.map( location => location.data());
    setLocations([...array]);
    console.log(locations);
  }

  return(
    <Table striped bordered hover>
      <thead>
        <tr style={{display: 'flex', flexDirection: 'row'}}>
          <th style={{flex:1}}>Sala/Horários</th>
          <th style={{flex:1}}>8:00 ~ 9:50</th>
          <th style={{flex:1}}>10:00 ~ 12:00</th>
          <th style={{flex:1}}>13:30 ~ 15:30</th>
          <th style={{flex:1}}>14:00 ~ 16:00</th>
          <th style={{flex:1}}/>
        </tr>
      </thead>
      <tbody>
        {
          locations && locations.map( location => {
            return (
              <tr key={location.id}>
                <td>{location.name}</td>
                <td>{location.abMorning !== "" ? location.abMorning : "-"}</td>
                <td>{location.cdMorning !== "" ? location.cdMorning : "-"}</td>
                <td>{location.abAfternoon}</td>
                <td>{location.cdAfternoon}</td>
                {/* <td><Booking classroomInfo={state.classrooms.filter(classroom => classroom.id === location.classroomId)}></Location></td> */}
              </tr>
          )})
        }
      </tbody>
    </Table>  
  )
}