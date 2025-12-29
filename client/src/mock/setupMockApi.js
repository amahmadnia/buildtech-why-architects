// Setup Axios Interceptors for Mock API
import axios from 'axios';
import mockApiHandlers from './mockApi';

export const setupMockAPI = () => {
  console.log('🎭 Mock API enabled - No backend required!');
  console.log('📝 Sample credentials:');
  console.log('   Admin: admin / admin123');
  console.log('   Manager: manager / manager123');
  console.log('   Designer: designer / designer123');

  // Intercept requests
  axios.interceptors.request.use(
    async (config) => {
      const url = config.url || '';
      const method = config.method || 'get';

      // Only intercept our API calls
      if (!url.includes('127.0.0.1:3000/api') && !url.includes('localhost:3000/api')) {
        return config;
      }

      console.log(`🔄 Mock API: ${method.toUpperCase()} ${url}`);

      // Prevent the actual request from being sent
      config.adapter = async () => {
        try {
          let response;

          // Route to appropriate mock handler based on URL and method
          if (url.includes('/api/login') && method === 'post') {
            // Login
            response = await mockApiHandlers.login(config.data);
          } else if (url.includes('/api/users/tasks') && method === 'get') {
            // Get tasks
            const taskId = url.split('/tasks/')[1];
            if (taskId) {
              // Get single task
              response = await mockApiHandlers.getTask(
                taskId,
                config.headers.Authorization
              );
            } else {
              // Get all tasks
              response = await mockApiHandlers.getTasks(
                config.headers.Authorization
              );
            }
          } else if (url.includes('/add-task') && method === 'post') {
            // Add task
            response = await mockApiHandlers.addTask(
              config.data,
              config.headers.Authorization
            );
          } else if (url.includes('/update-task') && method === 'post') {
            // Update task
            const taskId = url.split('/')[4]; // Extract task ID from URL
            response = await mockApiHandlers.updateTask(
              taskId,
              config.data,
              config.headers.Authorization
            );
          } else if (url.includes('/tasks/') && method === 'delete') {
            // Delete task
            const taskId = url.split('/tasks/')[1];
            response = await mockApiHandlers.deleteTask(
              taskId,
              config.headers.Authorization
            );
          } else {
            // Unknown endpoint
            console.warn(`⚠️ Unhandled mock API endpoint: ${method} ${url}`);
            response = {
              data: { message: 'Mock endpoint not implemented' },
            };
          }

          // Return axios-compatible response
          return {
            data: response.data,
            status: 200,
            statusText: 'OK',
            headers: {},
            config,
          };
        } catch (error) {
          // Handle mock API errors
          console.error('❌ Mock API error:', error);

          // Convert to axios error format
          const axiosError = new Error(error.message || 'Mock API error');
          axiosError.config = config;
          axiosError.response = error.response || {
            data: { message: 'Mock API error' },
            status: 500,
            statusText: 'Internal Server Error',
            headers: {},
            config,
          };

          throw axiosError;
        }
      };

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Intercept responses (optional, for logging)
  axios.interceptors.response.use(
    (response) => {
      if (
        response.config.url?.includes('127.0.0.1:3000/api') ||
        response.config.url?.includes('localhost:3000/api')
      ) {
        console.log('✅ Mock API response:', response.status, response.data);
      }
      return response;
    },
    (error) => {
      if (
        error.config?.url?.includes('127.0.0.1:3000/api') ||
        error.config?.url?.includes('localhost:3000/api')
      ) {
        console.log(
          '❌ Mock API error:',
          error.response?.status,
          error.response?.data
        );
      }
      return Promise.reject(error);
    }
  );
};

export default setupMockAPI;
