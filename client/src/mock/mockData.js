// Mock Data for BuildTech Application
// This file contains sample data for users, tasks, customers, and projects

export const MOCK_USERS = [
  {
    id: '1',
    role: 'admin',
    firstName: 'علی',
    lastName: 'محمدی',
    username: 'admin',
    email: 'admin@buildtech.ir',
    phoneNumber: '09121234567',
    nationalCode: '0012345678',
    password: 'admin123', // In real app, this would be hashed
  },
  {
    id: '2',
    role: 'manager',
    firstName: 'سارا',
    lastName: 'احمدی',
    username: 'manager',
    email: 'manager@buildtech.ir',
    phoneNumber: '09121234568',
    nationalCode: '0012345679',
    password: 'manager123',
  },
  {
    id: '3',
    role: 'designer',
    firstName: 'رضا',
    lastName: 'کریمی',
    username: 'designer',
    email: 'designer@buildtech.ir',
    phoneNumber: '09121234569',
    nationalCode: '0012345680',
    password: 'designer123',
  },
  {
    id: '4',
    role: 'leadDesigner',
    firstName: 'مریم',
    lastName: 'حسینی',
    username: 'lead',
    email: 'lead@buildtech.ir',
    phoneNumber: '09121234570',
    nationalCode: '0012345681',
    password: 'lead123',
  },
  {
    id: '5',
    role: 'client',
    firstName: 'حسین',
    lastName: 'رضایی',
    username: 'client',
    email: 'client@buildtech.ir',
    phoneNumber: '09121234571',
    nationalCode: '0012345682',
    password: 'client123',
  },
];

export const MOCK_CUSTOMERS = [
  {
    id: '1',
    name: 'شرکت ساختمانی پارس',
  },
  {
    id: '2',
    name: 'مجتمع مسکونی آسمان',
  },
  {
    id: '3',
    name: 'شرکت توسعه شهری البرز',
  },
  {
    id: '4',
    name: 'گروه صنعتی کیان',
  },
];

export const MOCK_PROJECTS = [
  {
    id: '1',
    customerId: '1',
    name: 'مجتمع تجاری پارس',
  },
  {
    id: '2',
    customerId: '2',
    name: 'برج مسکونی آسمان',
  },
  {
    id: '3',
    customerId: '3',
    name: 'پارک تجاری البرز',
  },
];

export const MOCK_TASKS = [
  {
    id: '1',
    projectTitle: 'طراحی ویلای مدرن در شمال',
    description: 'طراحی ویلای دو طبقه با معماری مدرن و استفاده از متریال‌های پیشرفته. پروژه شامل طراحی نما، پلان و نقشه‌های اجرایی می‌باشد.',
    deliveryDate: new Date('2024-03-15').toISOString(),
    progressUntilToday: 75,
    todaysProgress: 5,
    hoursSpent: 120,
    addedBy: '1',
    updatedBy: '3',
    createdAt: new Date('2024-01-10').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    projectTitle: 'ساخت مجتمع مسکونی 10 طبقه',
    description: 'طراحی و نظارت بر ساخت مجتمع مسکونی 10 طبقه در منطقه 2 تهران. شامل 40 واحد مسکونی و پارکینگ زیرزمینی.',
    deliveryDate: new Date('2024-06-20').toISOString(),
    progressUntilToday: 45,
    todaysProgress: 3,
    hoursSpent: 200,
    addedBy: '1',
    updatedBy: '2',
    createdAt: new Date('2024-01-05').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    projectTitle: 'بازسازی ساختمان اداری',
    description: 'بازسازی کامل ساختمان اداری 5 طبقه با رویکرد معماری مدرن و سبز. شامل طراحی فضای سبز و بهینه‌سازی انرژی.',
    deliveryDate: new Date('2024-04-10').toISOString(),
    progressUntilToday: 90,
    todaysProgress: 8,
    hoursSpent: 150,
    addedBy: '2',
    updatedBy: '4',
    createdAt: new Date('2023-12-20').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    projectTitle: 'طراحی کافه رستوران',
    description: 'طراحی داخلی و نما برای کافه رستوران با تم صنعتی. فضایی با ظرفیت 80 نفر با طراحی مدرن و کاربردی.',
    deliveryDate: new Date('2024-02-28').toISOString(),
    progressUntilToday: 100,
    todaysProgress: 0,
    hoursSpent: 80,
    addedBy: '3',
    updatedBy: '3',
    createdAt: new Date('2023-12-01').toISOString(),
    updatedAt: new Date('2024-02-25').toISOString(),
  },
  {
    id: '5',
    projectTitle: 'مجتمع تجاری سه طبقه',
    description: 'طراحی مجتمع تجاری سه طبقه با 45 واحد تجاری و پارکینگ طبقاتی. موقعیت پروژه در مرکز شهر.',
    deliveryDate: new Date('2024-07-15').toISOString(),
    progressUntilToday: 30,
    todaysProgress: 2,
    hoursSpent: 95,
    addedBy: '1',
    updatedBy: '2',
    createdAt: new Date('2024-01-15').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '6',
    projectTitle: 'طراحی باغ ویلا',
    description: 'طراحی باغ ویلای یک طبقه با استخر و فضای سبز در زمینی به مساحت 1000 متر مربع.',
    deliveryDate: new Date('2024-05-05').toISOString(),
    progressUntilToday: 60,
    todaysProgress: 4,
    hoursSpent: 110,
    addedBy: '4',
    updatedBy: '3',
    createdAt: new Date('2024-01-20').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '7',
    projectTitle: 'برج اداری 15 طبقه',
    description: 'طراحی برج اداری 15 طبقه با امکانات پیشرفته شامل لابی مدرن، پارکینگ هوشمند و سیستم‌های اتوماسیون.',
    deliveryDate: new Date('2024-09-30').toISOString(),
    progressUntilToday: 20,
    todaysProgress: 1,
    hoursSpent: 60,
    addedBy: '1',
    updatedBy: '1',
    createdAt: new Date('2024-01-25').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '8',
    projectTitle: 'ساختمان بیمارستان',
    description: 'طراحی بیمارستان 100 تختخوابی با رعایت استانداردهای بین‌المللی و طراحی فضاهای درمانی تخصصی.',
    deliveryDate: new Date('2024-12-31').toISOString(),
    progressUntilToday: 15,
    todaysProgress: 1,
    hoursSpent: 40,
    addedBy: '2',
    updatedBy: '2',
    createdAt: new Date('2024-02-01').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '9',
    projectTitle: 'پارک آبی',
    description: 'طراحی پارک آبی با استخرهای متنوع، سرسره‌ها و فضاهای تفریحی برای خانواده‌ها.',
    deliveryDate: new Date('2024-08-20').toISOString(),
    progressUntilToday: 35,
    todaysProgress: 3,
    hoursSpent: 85,
    addedBy: '3',
    updatedBy: '4',
    createdAt: new Date('2024-01-12').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '10',
    projectTitle: 'هتل 5 ستاره',
    description: 'طراحی هتل 5 ستاره با 200 اتاق، رستوران، سالن کنفرانس و مرکز تفریحی.',
    deliveryDate: new Date('2025-01-15').toISOString(),
    progressUntilToday: 10,
    todaysProgress: 1,
    hoursSpent: 30,
    addedBy: '1',
    updatedBy: '1',
    createdAt: new Date('2024-02-05').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '11',
    projectTitle: 'مدرسه دو طبقه',
    description: 'طراحی مدرسه دو طبقه با 20 کلاس درس، آزمایشگاه، کتابخانه و سالن ورزشی.',
    deliveryDate: new Date('2024-05-30').toISOString(),
    progressUntilToday: 55,
    todaysProgress: 4,
    hoursSpent: 105,
    addedBy: '2',
    updatedBy: '3',
    createdAt: new Date('2024-01-08').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '12',
    projectTitle: 'کتابخانه عمومی',
    description: 'طراحی کتابخانه عمومی با فضای مطالعه، بخش کودکان و سالن سمینار با معماری مدرن.',
    deliveryDate: new Date('2024-04-25').toISOString(),
    progressUntilToday: 70,
    todaysProgress: 5,
    hoursSpent: 130,
    addedBy: '4',
    updatedBy: '4',
    createdAt: new Date('2023-12-15').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '13',
    projectTitle: 'مرکز خرید',
    description: 'طراحی مرکز خرید 4 طبقه با 150 واحد تجاری، فودکورت و سینما.',
    deliveryDate: new Date('2024-10-10').toISOString(),
    progressUntilToday: 25,
    todaysProgress: 2,
    hoursSpent: 70,
    addedBy: '1',
    updatedBy: '2',
    createdAt: new Date('2024-01-28').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '14',
    projectTitle: 'پل عابر پیاده',
    description: 'طراحی پل عابر پیاده مدرن با سقف شیشه‌ای و نورپردازی هوشمند.',
    deliveryDate: new Date('2024-06-05').toISOString(),
    progressUntilToday: 40,
    todaysProgress: 3,
    hoursSpent: 90,
    addedBy: '3',
    updatedBy: '3',
    createdAt: new Date('2024-01-18').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '15',
    projectTitle: 'استادیوم ورزشی',
    description: 'طراحی استادیوم ورزشی با ظرفیت 10000 نفر شامل زمین فوتبال، پیست دو و میدانی.',
    deliveryDate: new Date('2025-03-20').toISOString(),
    progressUntilToday: 5,
    todaysProgress: 0,
    hoursSpent: 15,
    addedBy: '1',
    updatedBy: '1',
    createdAt: new Date('2024-02-10').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '16',
    projectTitle: 'آپارتمان لوکس',
    description: 'طراحی داخلی آپارتمان لوکس 250 متری با استفاده از متریال درجه یک و طراحی مدرن.',
    deliveryDate: new Date('2024-03-30').toISOString(),
    progressUntilToday: 85,
    todaysProgress: 6,
    hoursSpent: 140,
    addedBy: '4',
    updatedBy: '3',
    createdAt: new Date('2023-12-10').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '17',
    projectTitle: 'سالن زیبایی',
    description: 'طراحی داخلی سالن زیبایی با 10 اتاق کار و استقبال مدرن.',
    deliveryDate: new Date('2024-04-15').toISOString(),
    progressUntilToday: 65,
    todaysProgress: 4,
    hoursSpent: 95,
    addedBy: '2',
    updatedBy: '4',
    createdAt: new Date('2024-01-05').toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '18',
    projectTitle: 'باشگاه ورزشی',
    description: 'طراحی باشگاه ورزشی شامل سالن بدنسازی، استخر و سونا با تجهیزات مدرن.',
    deliveryDate: new Date('2024-07-25').toISOString(),
    progressUntilToday: 50,
    todaysProgress: 4,
    hoursSpent: 115,
    addedBy: '1',
    updatedBy: '2',
    createdAt: new Date('2024-01-22').toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Initialize mock data in localStorage
export const initializeMockData = () => {
  // Check if data already exists
  if (!localStorage.getItem('mockUsers')) {
    localStorage.setItem('mockUsers', JSON.stringify(MOCK_USERS));
  }
  if (!localStorage.getItem('mockCustomers')) {
    localStorage.setItem('mockCustomers', JSON.stringify(MOCK_CUSTOMERS));
  }
  if (!localStorage.getItem('mockProjects')) {
    localStorage.setItem('mockProjects', JSON.stringify(MOCK_PROJECTS));
  }
  if (!localStorage.getItem('mockTasks')) {
    localStorage.setItem('mockTasks', JSON.stringify(MOCK_TASKS));
  }
};

// Helper functions to get data from localStorage
export const getMockUsers = () => {
  return JSON.parse(localStorage.getItem('mockUsers') || '[]');
};

export const getMockTasks = () => {
  return JSON.parse(localStorage.getItem('mockTasks') || '[]');
};

export const getMockCustomers = () => {
  return JSON.parse(localStorage.getItem('mockCustomers') || '[]');
};

export const getMockProjects = () => {
  return JSON.parse(localStorage.getItem('mockProjects') || '[]');
};

// Helper functions to update data in localStorage
export const setMockTasks = (tasks) => {
  localStorage.setItem('mockTasks', JSON.stringify(tasks));
};

export const setMockUsers = (users) => {
  localStorage.setItem('mockUsers', JSON.stringify(users));
};
