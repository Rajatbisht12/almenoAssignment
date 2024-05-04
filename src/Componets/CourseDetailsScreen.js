import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../redux/slice/studentDetails';
import './courseDetails.css';

function CourseDetailsScreen() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchDetail());
      }, [dispatch]);

    console.log(state);
    const { description, duration, enrollmentStatus, instructor, location, prerequisites, schedule, students, syllabus } = state.student?.course?.courseModel || {};
  return (
    <div>
        <h2>Course Details:</h2>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Duration:</strong> {duration}</p>
        <p><strong>Enrollment Status:</strong> {enrollmentStatus}</p>
        <p><strong>Instructor:</strong> {instructor}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Prerequisites:</strong> {prerequisites?.join(', ')}</p>
        <p><strong>Schedule:</strong> {schedule}</p>

        <div className="student-list">
        <h2>Students:</h2>
        <ul>
          {students?.map(student => (
            <li key={student.id}>{student.name} - {student.email}</li>
          ))}
        </ul>
      </div>
      <div className="syllabus">
        <h2>Syllabus:</h2>
        <ol>
          {syllabus?.map(topic => (
            <li key={topic.week}>{topic.topic}: {topic.content}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default CourseDetailsScreen