import mockStudentData from '../mockData/students';

export const fetchEnrolledCourses = () => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: 'FETCH_ENROLLED_COURSES', payload: mockStudentData.enrolledCourses });
  }, 1000);
};

export const markCourseCompleted = (courseId) => (dispatch) => {
  setTimeout(() => {
    dispatch({ type: 'MARK_COURSE_COMPLETED', payload: courseId });
  }, 1000);
};