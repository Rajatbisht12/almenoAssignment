const mockCourseData = [
    {
      id: 1,
      name: 'Introduction to React Native',
      instructor: 'John Doe',
      description: 'Learn the basics of React Native development and build your first mobile app.',
      enrollmentStatus: 'Open',
      thumbnail: 'https://via.placeholder.com/150',
      duration: '8 weeks',
      schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
      location: 'Online',
      prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
      syllabus: [
        {
          week: 1,
          topic: 'Introduction to React Native',
          content: 'Overview of React Native, setting up your development environment.',
        },
        {
          week: 2,
          topic: 'Building Your First App',
          content: 'Creating a simple mobile app using React Native components.',
        },
      ],
    },
  ];
  
export default mockCourseData;