import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CourseListing from './Componets/CourseListing';
import CourseDetailsScreen from './Componets/CourseDetailsScreen';
import StudentDashboard from './Componets/StudentDashboard';

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseListing/>} />
          <Route path="/courseDetails" element={<CourseDetailsScreen/>} />
          <Route path='/StudentDashboard' element={<StudentDashboard/>} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
