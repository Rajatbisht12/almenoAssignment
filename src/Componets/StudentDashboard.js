import React from 'react';
import courseModel from '../redux/model/courseModel';

const { sampleCourses, sampleStudents } = courseModel;


function StudentDashboard() {
  
  const studentId = 101; 

  const student = sampleStudents.find(student => student.id === studentId);

  const enrolledCourses = sampleCourses.filter(course =>
    course.students.some(student => student.id === studentId)
  );

  return (
    <div>
      <h1>Student Dashboard</h1>
      {student && (
        <div>
          <h2>Welcome, {student.name}!</h2>
          <h3>Enrolled Courses:</h3>
          <ul>
            {enrolledCourses.map(course => (
              <li key={course.id}>
                {course.name} - {course.instructor}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default StudentDashboard;
