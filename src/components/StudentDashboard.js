import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StudentDashboard() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    // Fetch enrolled courses data from an API or use mock data
    const fetchEnrolledCourses = async () => {
      try {
        const response = await axios.get('/api/enrolled-courses');
        setEnrolledCourses(response.data);
      } catch (error) {
        console.error('Error fetching enrolled courses:', error);
      }
    };
    fetchEnrolledCourses();
  }, []);

  const handleMarkCompleted = (courseId) => {
    setEnrolledCourses(
      enrolledCourses.map((course) => {
        if (course.id === courseId) {
          return { ...course, completed: true };
        }
        return course;
      })
    );
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      <ul>
        {enrolledCourses.map((course) => (
          <li key={course.id}>
            <h2>{course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <img src={course.thumbnail} alt={course.name} />
            <p>Due Date: {course.dueDate}</p>
            <div>
              <div
                style={{
                  width: `${course.completed ? '100%' : '50%'}`,
                  height: '20px',
                  backgroundColor: 'green',
                }}
              />
            </div>
            {!course.completed && (
              <button onClick={() => handleMarkCompleted(course.id)}>
                Mark as Completed
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDashboard;