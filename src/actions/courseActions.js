import mockCourseData from '../mockData/courses';

export const fetchCourses = () => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: 'FETCH_COURSES', payload: mockCourseData });
  }, 1000);
};

export const fetchCourseDetails = (courseId) => (dispatch) => {
  setTimeout(() => {
    const courseDetails = mockCourseData.find(
      (course) => course.id === parseInt(courseId)
    );
    dispatch({ type: 'FETCH_COURSE_DETAILS', payload: courseDetails });
  }, 1000);
};
