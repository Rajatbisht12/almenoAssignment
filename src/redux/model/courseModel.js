const courseModel = {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe', 
    description: 'Learn the basics of React Native development and build your first mobile app.',
    enrollmentStatus: 'Open', // Can be 'Open', 'Closed', or 'InProgress'
    thumbnail: 'your.image.here', //Link to the course thumbnail
    duration: '8 weeks', // Duration of the course
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
        {
            week: 1,
            topic: 'Introduction to React Native',
        content: 'Overview of React Native, setting up your development environment.'
        },
        {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
        },
    ],
    students: [
            {
                id: 101,
                name: 'Alice Johnson',
                email: 'alice@example.com',
            },
            {
                id: 102,
                name: 'Bob Smith',
                email: 'bob@example.com',
            },
        ],
    };

    const sampleCourses = [
        { ...courseModel, id: 1, name: 'Introduction to React Native', instructor: 'John Doe' },
        { ...courseModel, id: 2, name: 'Advanced React Native Development', instructor: 'Amit Verma'},
        { ...courseModel, id: 3, name: 'React Native UI Design', instructor: 'Abdul Bari' },
        { ...courseModel, id: 4, name: 'React Native Animations', instructor: 'Kulkarni' },
        { ...courseModel, id: 5, name: 'React Native Testing', instructor: 'Unknown' },
      ];

      const sampleStudents = [
        { id: 101, name: 'Alice Johnson', email: 'alice@example.com' },
        { id: 102, name: 'Bob Smith', email: 'bob@example.com' },
        { id: 103, name: 'Charlie Brown', email: 'charlie@example.com' },
        { id: 104, name: 'David Lee', email: 'david@example.com' },
        { id: 105, name: 'Emma White', email: 'emma@example.com' },
      ];
export default { courseModel, sampleCourses, sampleStudents};