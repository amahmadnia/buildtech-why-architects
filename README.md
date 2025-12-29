# BuildTech - بیلدتک

A modern MERN stack project management application with Persian/Farsi UI for architectural and construction projects.

## 🎯 Project Status: Mock Demo Ready

This project has been **modernized and configured as a fully functional mock application** that runs entirely in the browser without requiring a backend server or database.

## ✨ Features

- 🔐 Multi-role authentication system (Admin, Manager, Designer, Lead Designer, Client)
- 📋 Task and project management
- 📊 Progress tracking
- 👥 User profiles
- 🌐 Persian/Farsi interface
- 🎭 **Mock API** - Works without backend!

## 🚀 Quick Start

### Prerequisites

- Node.js 22+ (tested with v22.21.1)
- npm

### Installation

```bash
# Install server dependencies (optional, for future backend integration)
npm install

# Install client dependencies
cd client
npm install --legacy-peer-deps
```

### Running the Application

```bash
# From the client directory
cd client

# Start webpack dev server
npm run server

# Application will open at http://localhost:8080
```

## 🔐 Login Credentials

Use any of these accounts to login:

| Role | Username | Password |
|------|----------|----------|
| Admin | `admin` | `admin123` |
| Manager | `manager` | `manager123` |
| Designer | `designer` | `designer123` |
| Lead Designer | `lead` | `lead123` |
| Client | `client` | `client123` |

You can also login using email instead of username (e.g., `admin@buildtech.ir`)

## 📦 Technology Stack

### Frontend
- React 18.2
- Redux + Redux Thunk
- React Router 6
- Axios
- SASS
- Webpack 5
- Babel

### Backend (for future integration)
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Passport.js

## 🎭 Mock API

This project uses a **mock API system** that simulates backend functionality:

- ✅ All data stored in browser localStorage
- ✅ Realistic network delays (200-500ms)
- ✅ JWT token simulation
- ✅ 18 sample tasks with Persian content
- ✅ 5 user accounts (one per role)
- ✅ Full CRUD operations

See `/client/src/mock/README.md` for detailed mock API documentation.

## 📁 Project Structure

```
buildtech-why-architects/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── actions/       # Redux actions
│   │   ├── components/    # React components
│   │   ├── mock/          # Mock API system
│   │   ├── reducers/      # Redux reducers
│   │   ├── utils/         # Utilities
│   │   └── assets/        # SCSS, images
│   ├── package.json
│   └── webpack.config.js
├── config/                # Passport configuration
├── models/                # Mongoose models
├── routes/                # Express routes (for future)
├── validation/            # Input validation
├── server.js              # Express server (not needed for mock)
└── package.json
```

## 🛠️ Available Scripts

### Client Scripts

```bash
npm run start    # Build webpack bundle (development)
npm run server   # Start webpack dev server
npm run build    # Build for production
```

### Server Scripts (for future backend integration)

```bash
npm start        # Start Node.js server
npm run server   # Start with nodemon (hot reload)
npm run dev      # Run both client and server concurrently
```

## 📊 Sample Data

The mock application includes:

- **5 Users** (one per role)
- **18 Tasks/Projects** including:
  - طراحی ویلای مدرن در شمال
  - ساخت مجتمع مسکونی 10 طبقه
  - بازسازی ساختمان اداری
  - طراحی کافه رستوران
  - And 14 more realistic projects
- **4 Customers**
- **3 Projects**

All with realistic Persian descriptions and data.

## 🔄 Resetting Data

To reset all data to defaults:

```javascript
// In browser console (F12)
localStorage.clear();
location.reload();
```

## 🏗️ Connecting to Real Backend

When ready to use a real backend:

1. Comment out mock API setup in `client/src/index.js`
2. Start MongoDB: `mongod`
3. Update `.env` file with your MongoDB URI
4. Start the server: `npm run dev`

## 📝 Recent Updates

### ✅ Modernization (Latest)
- Upgraded to Node.js 22 compatibility
- Updated React 16 → 18
- Updated React Router 5 → 6
- Replaced node-sass with modern sass
- Updated all dependencies to latest versions
- Fixed security vulnerabilities (173 → 1)
- Added comprehensive mock API system

### 🎭 Mock API Implementation
- No backend/database required
- localStorage persistence
- Realistic network simulation
- Sample Persian data
- Full authentication flow

## ⚠️ Important Notes

### Security
- **Mock API is for demo purposes only!**
- Passwords are stored in plain text
- No real authentication
- Never use in production

### Dependencies
- Use `--legacy-peer-deps` flag when installing client packages
- Some peer dependency warnings are expected (React 18 with older libs)

### SASS Warnings
- Bootstrap 4 SASS files show deprecation warnings
- These are from the library, not your code
- Does not affect functionality

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 8080
kill -9 $(lsof -ti:8080)
```

### Build Errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Data Issues
```bash
# Clear localStorage in browser console
localStorage.clear();
location.reload();
```

## 📄 License

MIT

## 👨‍💻 Development

This is a portfolio/demo project showcasing:
- Modern React development
- Redux state management
- Mock API architecture
- Persian/Farsi UI
- Project management features

## 🎉 Ready to Use!

The application is fully functional as a **mock demo project**. Just run:

```bash
cd client
npm run server
```

Login with `admin` / `admin123` and explore!

---

**Built with ❤️ for BuildTech**
