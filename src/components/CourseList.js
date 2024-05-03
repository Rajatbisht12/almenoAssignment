import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../actions/courseActions';
import { Link } from 'react-router-dom';

function CourseList() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Course List</h1>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredCourses.map((course) => (
          <li key={course.id}>
            <Link to={`/course/${course.id}`}>
              {course.name} - {course.instructor}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;