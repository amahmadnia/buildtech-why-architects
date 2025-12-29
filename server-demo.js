/**
 * Demo Server - No Database Required
 * This server returns static mock data for showcase purposes
 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files from client/public
app.use(express.static(path.join(__dirname, 'client/public')));

// ============ MOCK DATA ============

const mockUsers = [
  {
    _id: '1',
    role: 'admin',
    firstName: 'علی',
    lastName: 'احمدی',
    username: 'admin',
    email: 'admin@buildtech.com',
    phoneNumber: '09121234567',
  },
  {
    _id: '2',
    role: 'designer',
    firstName: 'مریم',
    lastName: 'رضایی',
    username: 'maryam',
    email: 'maryam@buildtech.com',
    phoneNumber: '09129876543',
  },
  {
    _id: '3',
    role: 'manager',
    firstName: 'رضا',
    lastName: 'محمدی',
    username: 'reza',
    email: 'reza@buildtech.com',
    phoneNumber: '09123456789',
  },
];

const mockTasks = [
  {
    _id: 't1',
    projectTitle: 'طراحی ویلای شمال',
    description: 'طراحی کامل نقشه‌های معماری و سازه‌ای ویلای ۳ طبقه در نوشهر',
    deliveryDate: '1402/12/15',
    progressUntilToday: 75,
    todaysProgress: 5,
    hoursSpent: 120,
    addedBy: { firstName: 'علی', lastName: 'احمدی' },
    updatedBy: { firstName: 'مریم', lastName: 'رضایی' },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-03-01T14:30:00Z',
  },
  {
    _id: 't2',
    projectTitle: 'بازسازی آپارتمان تهران',
    description: 'بازسازی کامل واحد ۱۵۰ متری در منطقه ۳ تهران شامل دکوراسیون داخلی',
    deliveryDate: '1402/11/20',
    progressUntilToday: 90,
    todaysProgress: 10,
    hoursSpent: 85,
    addedBy: { firstName: 'رضا', lastName: 'محمدی' },
    updatedBy: { firstName: 'علی', lastName: 'احمدی' },
    createdAt: '2024-02-01T09:00:00Z',
    updatedAt: '2024-03-05T11:00:00Z',
  },
  {
    _id: 't3',
    projectTitle: 'طراحی مجتمع تجاری',
    description: 'طراحی مجتمع تجاری ۵ طبقه با پارکینگ طبقاتی در اصفهان',
    deliveryDate: '1403/02/01',
    progressUntilToday: 30,
    todaysProgress: 2,
    hoursSpent: 45,
    addedBy: { firstName: 'علی', lastName: 'احمدی' },
    updatedBy: { firstName: 'مریم', lastName: 'رضایی' },
    createdAt: '2024-02-20T08:00:00Z',
    updatedAt: '2024-03-10T16:00:00Z',
  },
  {
    _id: 't4',
    projectTitle: 'نقشه‌کشی ساختمان اداری',
    description: 'تهیه نقشه‌های اجرایی ساختمان اداری ۱۰ طبقه در شیراز',
    deliveryDate: '1403/01/15',
    progressUntilToday: 55,
    todaysProgress: 8,
    hoursSpent: 200,
    addedBy: { firstName: 'مریم', lastName: 'رضایی' },
    updatedBy: { firstName: 'رضا', lastName: 'محمدی' },
    createdAt: '2024-01-05T12:00:00Z',
    updatedAt: '2024-03-08T09:30:00Z',
  },
];

// ============ MOCK API ROUTES ============

// Login - accepts any credentials, returns mock token
app.post('/api/login', (req, res) => {
  const { id, password } = req.body;

  if (!id || !password) {
    return res.status(400).json({ m: 'enter data' });
  }

  // For demo: accept any password, find user by username/email
  let user = mockUsers.find(u => u.username === id || u.email === id);

  // Default to admin if user not found
  if (!user) {
    user = mockUsers[0];
  }

  const payload = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRETORKEY || 'demo-secret', {
    expiresIn: 15778476,
  });

  return res.status(200).json({
    token: 'Bearer ' + token,
  });
});

// Also support /api/user/login path
app.post('/api/user/login', (req, res) => {
  const { id, password } = req.body;

  if (!id || !password) {
    return res.status(400).json({ m: 'enter data' });
  }

  let user = mockUsers.find(u => u.username === id || u.email === id);
  if (!user) {
    user = mockUsers[0];
  }

  const payload = {
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRETORKEY || 'demo-secret', {
    expiresIn: 15778476,
  });

  return res.status(200).json({
    token: 'Bearer ' + token,
  });
});

// Fetch all users
app.get('/api/user/fetch-all', (req, res) => {
  res.status(200).json(mockUsers);
});

// Fetch all tasks
app.get('/api/users/tasks', (req, res) => {
  res.status(200).json(mockTasks);
});

// Fetch single task
app.get('/api/users/tasks/:id', (req, res) => {
  const task = mockTasks.find(t => t._id === req.params.id);
  if (task) {
    res.status(200).json(task);
  } else {
    res.status(200).json(mockTasks[0]); // Return first task as fallback
  }
});

// Add task (mock - just return success)
app.post('/api/admin/:username/add-task', (req, res) => {
  res.status(201).json({ success: true, message: 'Task added (demo mode)' });
});

// Update task (mock - just return success)
app.post('/api/users/:username/:taskId/update-task', (req, res) => {
  res.status(200).json({ success: true, message: 'Task updated (demo mode)' });
});

// Admin routes
app.get('/api/admin/users', (req, res) => {
  res.status(200).json(mockUsers);
});

app.get('/api/admin/users/:id', (req, res) => {
  const user = mockUsers.find(u => u._id === req.params.id);
  res.status(200).json(user || mockUsers[0]);
});

app.post('/api/admin/add-user', (req, res) => {
  res.status(201).json({ success: true, message: 'User added (demo mode)' });
});

app.delete('/api/admin/users/:id', (req, res) => {
  res.status(200).json({ success: true, message: 'User deleted (demo mode)' });
});

app.post('/api/admin/users/:id/edit', (req, res) => {
  res.status(200).json({ success: true, message: 'User updated (demo mode)' });
});

// Catch-all: serve index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public/index.html'));
});

// ============ START SERVER ============

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🚀 BuildTech Demo Server Running!                       ║
║                                                           ║
║   URL: http://localhost:${port}                             ║
║                                                           ║
║   Demo Credentials:                                       ║
║   ─────────────────                                       ║
║   Username: admin     (or any username)                   ║
║   Password: anything  (any password works)                ║
║                                                           ║
║   This is a demo server with mock data.                   ║
║   No database required!                                   ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
  `);
});
