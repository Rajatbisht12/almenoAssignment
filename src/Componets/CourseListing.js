import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetail } from '../redux/slice/studentDetails';
import { Link } from 'react-router-dom';
import './styles.css'; // Import the CSS file

export default function CourseListing() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchDetail());
  }, [dispatch]);

  return (
    <div className="course-listing-container">
      <h1 className="course-listing-title">Course Listing</h1>
      <div className="course-list">
        {state.student?.course?.sampleCourses?.map((course) => (
          <div key={course.id} className="course-item">
            <Link to='/courseDetails' className="course-link">{course.name}</Link> - {course.instructor}
          </div>
        ))}
      </div>
    </div>
  );
}
