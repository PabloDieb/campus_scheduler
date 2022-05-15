import { Routes, Route } from 'react-router-dom';
import ClassroomsItineraryPage from './Pages/ClassroomsItinerary';
import ClassroomsManagementPage from './Pages/ClassroomsManagement';
import ClassroomsDisplayPage from './Pages/ClassroomsDisplay';
import LoginPage from './Pages/Login';

export default function AppRoutes() {
  return(
    <Routes>
      <Route exact path='/' element={<LoginPage/>}/>
      <Route exact path="/salas" element={<ClassroomsManagementPage />}/>
      <Route exact path="/itinerario" element={<ClassroomsItineraryPage />} />
      <Route exact path="/display" element={<ClassroomsDisplayPage />} />

    </Routes>
  )
}