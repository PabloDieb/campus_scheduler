import Header from './Components/Header/Header';
import AppRoutes from './Routes';
import GlobalState from './GlobalState';
import { useState, useEffect, useContext} from 'react';
import { db, collection, getDocs } from './Services/Firebase';

function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    fetchClassrooms()
  }, []);

  const fetchClassrooms = async () => {
    let response = await getDocs(collection(db, "classrooms"));
    let array = response.docs.map( classroom => (
        {
          "id": classroom.id,
          "data": classroom.data()}
      ));
    setState({...state, classrooms: array});
  }
  return (
    <GlobalState.Provider value={[state, setState]}>
      <Header />
      <AppRoutes />
    </GlobalState.Provider>
  );
}

export default App;
