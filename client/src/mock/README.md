# 🎭 Mock API Documentation

This project uses a **mock API** to simulate backend functionality without requiring a database or server. All data is stored in browser localStorage and persists across sessions.

## 🚀 Quick Start

The mock API is automatically enabled when you run the application. Just start the dev server:

```bash
npm run server
```

Then open http://localhost:8080 and login with any of the credentials below.

## 🔐 Mock User Credentials

### Admin Account
- **Username**: `admin`
- **Email**: `admin@buildtech.ir`
- **Password**: `admin123`
- **Role**: Admin (full access)

### Manager Account
- **Username**: `manager`
- **Email**: `manager@buildtech.ir`
- **Password**: `manager123`
- **Role**: Manager

### Designer Account
- **Username**: `designer`
- **Email**: `designer@buildtech.ir`
- **Password**: `designer123`
- **Role**: Designer

### Lead Designer Account
- **Username**: `lead`
- **Email**: `lead@buildtech.ir`
- **Password**: `lead123`
- **Role**: Lead Designer

### Client Account
- **Username**: `client`
- **Email**: `client@buildtech.ir`
- **Password**: `client123`
- **Role**: Client

## 📝 Sample Data

The mock API includes:

- **5 Users** (one for each role)
- **18 Tasks** with realistic Persian project data
- **4 Customers**
- **3 Projects**

All tasks include:
- Project titles in Persian
- Detailed descriptions
- Progress tracking
- Delivery dates
- Hours spent
- Creator and updater information

## 🔧 How It Works

### Architecture

```
Components → Actions → Axios → Mock Interceptor → Mock API → localStorage
```

1. **Axios Interceptors**: All HTTP requests to the backend API are intercepted
2. **Mock Handlers**: Requests are routed to appropriate mock handler functions
3. **localStorage**: Data is stored in browser localStorage for persistence
4. **Realistic Delays**: Network delays (200-500ms) are simulated for realism

### Supported Endpoints

✅ `POST /api/login` - User authentication
✅ `GET /api/users/tasks` - Fetch all tasks
✅ `GET /api/users/tasks/:id` - Fetch single task
✅ `POST /api/admin/:username/add-task` - Add new task
✅ `POST /api/users/:username/:taskId/update-task` - Update task
✅ `DELETE /api/users/tasks/:id` - Delete task (implemented but not used in UI)

## 💾 Data Persistence

All data is stored in localStorage under these keys:
- `mockUsers` - User accounts
- `mockTasks` - Tasks/projects
- `mockCustomers` - Customer list
- `mockProjects` - Project list
- `jwtToken` - Current user session

### Reset Data

To reset all mock data to defaults:

```javascript
// In browser console:
localStorage.clear();
location.reload();
```

## 🛠️ Development

### Files Structure

```
src/mock/
├── mockData.js         - Sample data and initialization
├── mockApi.js          - API handler functions
├── setupMockApi.js     - Axios interceptor setup
└── README.md           - This file
```

### Adding New Data

To add more sample data, edit `mockData.js`:

```javascript
export const MOCK_TASKS = [
  // Add new tasks here
  {
    id: '19',
    projectTitle: 'عنوان پروژه جدید',
    description: 'توضیحات پروژه',
    // ... other fields
  }
];
```

### Adding New Endpoints

To add new API endpoints, edit `setupMockApi.js`:

```javascript
// In the interceptor request handler
if (url.includes('/api/new-endpoint') && method === 'post') {
  response = await mockApiHandlers.newHandler(config.data);
}
```

Then implement the handler in `mockApi.js`:

```javascript
export const mockApiHandlers = {
  newHandler: (data) => {
    return new Promise((resolve) => {
      // Your mock logic here
      resolve({ data: { success: true } });
    });
  }
};
```

## 🔄 Switching to Real Backend

When you're ready to connect to a real backend:

1. Comment out the mock API setup in `src/index.js`:

```javascript
// import { initializeMockData } from './mock/mockData';
// import { setupMockAPI } from './mock/setupMockApi';
// initializeMockData();
// setupMockAPI();
```

2. Update the API URLs in action files to point to your backend
3. Ensure your backend returns data in the expected format

## 📊 Mock Data Examples

### User Object
```json
{
  "id": "1",
  "role": "admin",
  "firstName": "علی",
  "lastName": "محمدی",
  "username": "admin",
  "email": "admin@buildtech.ir",
  "phoneNumber": 9121234567,
  "nationalCode": 0012345678
}
```

### Task Object
```json
{
  "id": "1",
  "projectTitle": "طراحی ویلای مدرن در شمال",
  "description": "طراحی ویلای دو طبقه با معماری مدرن...",
  "deliveryDate": "2024-03-15T00:00:00.000Z",
  "progressUntilToday": 75,
  "todaysProgress": 5,
  "hoursSpent": 120,
  "addedBy": "1",
  "updatedBy": "3",
  "createdAt": "2024-01-10T00:00:00.000Z",
  "updatedAt": "2024-02-28T10:30:00.000Z"
}
```

## 🎨 Features

✅ No backend or database required
✅ Realistic network delays
✅ Data persistence across sessions
✅ JWT token simulation
✅ Error handling (wrong password, not found, etc.)
✅ Role-based access (ready for implementation)
✅ Persian language support
✅ Easy to modify and extend

## 🐛 Debugging

The mock API logs all requests and responses to the console:

- 🔄 Request: `Mock API: POST /api/login`
- ✅ Success: `Mock API response: 200 { data: ... }`
- ❌ Error: `Mock API error: 401 { message: ... }`

Open browser DevTools (F12) to see these logs.

## ⚠️ Security Note

**IMPORTANT**: This mock API is for development/demo purposes only!

- Passwords are stored in plain text
- JWT tokens are not cryptographically signed
- No real authentication or authorization
- Data is visible in browser localStorage

**Never use this in production!**

## 📞 Support

For questions or issues with the mock API, check:
1. Browser console for error messages
2. localStorage to verify data
3. Network tab (should show no actual network requests)

Enjoy your fully functional mock BuildTech application! 🎉
