import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourseDetails } from '../actions/courseActions';

function CourseDetails({ match }) {
  const dispatch = useDispatch();
  const courseDetails = useSelector((state) => state.courses.courseDetails);

  useEffect(() => {
    dispatch(fetchCourseDetails(match.params.id));
  }, [dispatch, match.params.id]);

  if (!courseDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{courseDetails.name}</h1>
      <p>Instructor: {courseDetails.instructor}</p>
      <p>Description: {courseDetails.description}</p>
      <p>Enrollment Status: {courseDetails.enrollmentStatus}</p>
      <p>Duration: {courseDetails.duration}</p>
      <p>Schedule: {courseDetails.schedule}</p>
      <p>Location: {courseDetails.location}</p>
      <p>Prerequisites:</p>
      <ul>
        {courseDetails.prerequisites.map((prereq, index) => (
          <li key={index}>{prereq}</li>
        ))}
      </ul>
      <h2>Syllabus:</h2>
      <ul>
        {courseDetails.syllabus.map((item, index) => (
          <li key={index}>
            <h3>Week {item.week}: {item.topic}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
