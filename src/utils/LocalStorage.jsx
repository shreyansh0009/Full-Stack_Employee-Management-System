const employees = [
  {
    id: 1,
    firstName: "Aarav", // Indian name
    email: "employee1@example.com",
    password: "000",
    role: "employee", // Add role property
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Homepage",
        taskDescription: "Create a responsive homepage design.",
        taskDate: "2023-10-15",
        taskCategory: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the login authentication issue.",
        taskDate: "2023-10-10",
        taskCategory: "Development",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Write API Documentation",
        taskDescription: "Document the new API endpoints.",
        taskDate: "2023-10-20",
        taskCategory: "Documentation",
      },
    ],
    taskNumber: {
      active: 2, // Count of active tasks
      newTask: 1, // Count of new tasks
      completed: 1, // Count of completed tasks
      failed: 1, // Count of failed tasks
    },
  },
  {
    id: 2,
    firstName: "Ishaan", // Indian name
    email: "employee2@example.com",
    password: "000",
    role: "employee", // Add role property
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Optimize Database",
        taskDescription: "Improve database query performance.",
        taskDate: "2023-10-18",
        taskCategory: "Database",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create User Dashboard",
        taskDescription: "Develop a user-friendly dashboard.",
        taskDate: "2023-10-22",
        taskCategory: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Test Payment Gateway",
        taskDescription: "Ensure the payment gateway works seamlessly.",
        taskDate: "2023-10-12",
        taskCategory: "Testing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Update Security Policies",
        taskDescription: "Revise and update company security policies.",
        taskDate: "2023-10-25",
        taskCategory: "Security",
      },
    ],
    taskNumber: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 3,
    firstName: "Ananya", // Indian name
    email: "employee3@example.com",
    password: "000",
    role: "employee", // Add role property
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Develop Mobile App",
        taskDescription: "Start development of the new mobile app.",
        taskDate: "2023-10-30",
        taskCategory: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Conduct User Research",
        taskDescription: "Gather feedback from users for improvements.",
        taskDate: "2023-10-05",
        taskCategory: "Research",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Unit Tests",
        taskDescription: "Create unit tests for the new features.",
        taskDate: "2023-10-28",
        taskCategory: "Testing",
      },
    ],
    taskNumber: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 4,
    firstName: "Vihaan", // Indian name
    email: "employee4@example.com",
    password: "000",
    role: "employee", // Add role property
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Deploy New Server",
        taskDescription: "Set up and deploy the new production server.",
        taskDate: "2023-10-17",
        taskCategory: "DevOps",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Marketing Campaign",
        taskDescription: "Plan and execute the Q4 marketing campaign.",
        taskDate: "2023-10-23",
        taskCategory: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update Employee Handbook",
        taskDescription: "Revise the employee handbook for 2024.",
        taskDate: "2023-10-08",
        taskCategory: "HR",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Fix UI Bugs",
        taskDescription: "Resolve UI issues reported by users.",
        taskDate: "2023-10-19",
        taskCategory: "Design",
      },
    ],
    taskNumber: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 5,
    firstName: "Saanvi", // Indian name
    email: "employee5@example.com",
    password: "000",
    role: "employee", // Add role property
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Implement Analytics",
        taskDescription: "Integrate analytics into the application.",
        taskDate: "2023-10-27",
        taskCategory: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Conduct Security Audit",
        taskDescription: "Perform a full security audit of the system.",
        taskDate: "2023-10-14",
        taskCategory: "Security",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Quarterly Report",
        taskDescription: "Compile data for the quarterly financial report.",
        taskDate: "2023-10-31",
        taskCategory: "Finance",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Train New Employees",
        taskDescription: "Conduct onboarding sessions for new hires.",
        taskDate: "2023-10-21",
        taskCategory: "HR",
      },
    ],
    taskNumber: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
];

const admin = [
  {
    id: 100,
    firstName: "Saurabh",
    email: "admin@me.com",
    password: "000",
    role: "admin",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
