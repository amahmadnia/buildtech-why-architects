// Mock API handlers
import { getMockUsers, getMockTasks, setMockTasks } from './mockData';

// Simple JWT token generator (for demo purposes only)
const generateMockToken = (user) => {
  const payload = {
    id: user.id,
    role: user.role,
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    phoneNumber: user.phoneNumber,
    nationalCode: user.nationalCode,
    exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, // 24 hours from now
  };

  // Create a simple base64 encoded token (NOT secure, only for demo)
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const payloadEncoded = btoa(JSON.stringify(payload));
  const signature = btoa('mock-signature');

  return `${header}.${payloadEncoded}.${signature}`;
};

// Validate mock JWT token
const validateMockToken = (token) => {
  try {
    if (!token) return null;

    // Remove 'Bearer ' if present
    const cleanToken = token.replace('Bearer ', '');

    // Split token
    const parts = cleanToken.split('.');
    if (parts.length !== 3) return null;

    // Decode payload
    const payload = JSON.parse(atob(parts[1]));

    // Check expiration
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null;
    }

    return payload;
  } catch (e) {
    return null;
  }
};

// Mock API handlers
export const mockApiHandlers = {
  // Login
  login: (credentials) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = getMockUsers();

        // Find user by id (username, email, or phone)
        const user = users.find(
          (u) =>
            u.username === credentials.id ||
            u.email === credentials.id ||
            u.phoneNumber.toString() === credentials.id
        );

        if (!user) {
          reject({
            response: {
              data: {
                id: 'نام کاربری، ایمیل یا شماره همراه یافت نشد',
              },
            },
          });
          return;
        }

        // Check password (in real app, this would be hashed)
        if (user.password !== credentials.password) {
          reject({
            response: {
              data: {
                password: 'رمز عبور اشتباه است',
              },
            },
          });
          return;
        }

        // Generate token
        const token = generateMockToken(user);

        resolve({
          data: {
            token,
            user: {
              id: user.id,
              role: user.role,
              firstName: user.firstName,
              lastName: user.lastName,
              username: user.username,
              email: user.email,
            },
          },
        });
      }, 500); // Simulate network delay
    });
  },

  // Get all tasks
  getTasks: (token) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = validateMockToken(token);

        if (!user) {
          reject({
            response: {
              status: 401,
              data: { message: 'Unauthorized' },
            },
          });
          return;
        }

        const tasks = getMockTasks();

        // Filter tasks based on user role
        let filteredTasks = tasks;

        // For demo, return all tasks
        // In real app, you might filter by user permissions

        resolve({
          data: filteredTasks,
        });
      }, 300);
    });
  },

  // Get single task
  getTask: (id, token) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = validateMockToken(token);

        if (!user) {
          reject({
            response: {
              status: 401,
              data: { message: 'Unauthorized' },
            },
          });
          return;
        }

        const tasks = getMockTasks();
        const task = tasks.find((t) => t.id === id);

        if (!task) {
          reject({
            response: {
              status: 404,
              data: { message: 'Task not found' },
            },
          });
          return;
        }

        resolve({
          data: task,
        });
      }, 300);
    });
  },

  // Add new task
  addTask: (taskData, token) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = validateMockToken(token);

        if (!user) {
          reject({
            response: {
              status: 401,
              data: { message: 'Unauthorized' },
            },
          });
          return;
        }

        const tasks = getMockTasks();

        // Create new task
        const newTask = {
          id: (tasks.length + 1).toString(),
          ...taskData,
          addedBy: user.id,
          updatedBy: user.id,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          progressUntilToday: taskData.progressUntilToday || 0,
          todaysProgress: taskData.todaysProgress || 0,
          hoursSpent: taskData.hoursSpent || 0,
        };

        tasks.push(newTask);
        setMockTasks(tasks);

        resolve({
          data: {
            message: 'Task added successfully',
            task: newTask,
          },
        });
      }, 400);
    });
  },

  // Update task
  updateTask: (id, taskData, token) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = validateMockToken(token);

        if (!user) {
          reject({
            response: {
              status: 401,
              data: { message: 'Unauthorized' },
            },
          });
          return;
        }

        const tasks = getMockTasks();
        const taskIndex = tasks.findIndex((t) => t.id === id);

        if (taskIndex === -1) {
          reject({
            response: {
              status: 404,
              data: { message: 'Task not found' },
            },
          });
          return;
        }

        // Update task
        tasks[taskIndex] = {
          ...tasks[taskIndex],
          ...taskData,
          updatedBy: user.id,
          updatedAt: new Date().toISOString(),
        };

        setMockTasks(tasks);

        resolve({
          data: {
            message: 'Task updated successfully',
            task: tasks[taskIndex],
          },
        });
      }, 400);
    });
  },

  // Delete task
  deleteTask: (id, token) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = validateMockToken(token);

        if (!user) {
          reject({
            response: {
              status: 401,
              data: { message: 'Unauthorized' },
            },
          });
          return;
        }

        const tasks = getMockTasks();
        const filteredTasks = tasks.filter((t) => t.id !== id);

        if (tasks.length === filteredTasks.length) {
          reject({
            response: {
              status: 404,
              data: { message: 'Task not found' },
            },
          });
          return;
        }

        setMockTasks(filteredTasks);

        resolve({
          data: {
            message: 'Task deleted successfully',
          },
        });
      }, 300);
    });
  },
};

export default mockApiHandlers;
