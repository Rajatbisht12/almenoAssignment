import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import CourseList from './components/CourseList';
import CourseDetails from './components/CourseDetails';
import StudentDashboard from './components/StudentDashboard';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<CourseList />} />
            <Route path="/course/:id" element={<CourseDetails />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}


export default App;