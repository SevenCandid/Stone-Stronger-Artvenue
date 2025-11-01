// Stone Stronger Artvenue - Admin Panel JavaScript

// ========================================
// Authentication
// ========================================

// Check if user is logged in (on dashboard page)
if (window.location.pathname.includes('dashboard.html')) {
    const isLoggedIn = localStorage.getItem('adminLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }
}

// Login Form Handler (on login page)
const loginForm = document.getElementById('login-form');
if (loginForm) {
    // Toggle Password Visibility
    const togglePassword = document.getElementById('toggle-password');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
        });
    }
    
    // Handle Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Demo credentials
        if (email === 'admin@stonestronger.com' && password === 'admin123') {
            localStorage.setItem('adminLoggedIn', 'true');
            localStorage.setItem('adminEmail', email);
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid credentials. Use demo credentials:\nEmail: admin@stonestronger.com\nPassword: admin123');
        }
    });
}

// Logout Handler
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to logout?')) {
            localStorage.removeItem('adminLoggedIn');
            localStorage.removeItem('adminEmail');
            window.location.href = 'login.html';
        }
    });
}

// ========================================
// Theme Toggle
// ========================================
const themeToggle = document.getElementById('theme-toggle-admin');
const html = document.documentElement;

if (themeToggle) {
    const currentTheme = localStorage.getItem('adminTheme') || 'dark';
    html.classList.toggle('dark', currentTheme === 'dark');
    
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        const theme = html.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('adminTheme', theme);
    });
}

// ========================================
// Sidebar Navigation
// ========================================
const sidebar = document.getElementById('sidebar');
const toggleSidebarBtn = document.getElementById('toggle-sidebar');
const closeSidebarBtn = document.getElementById('close-sidebar');

if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener('click', () => {
        sidebar.classList.toggle('hidden-mobile');
    });
}

if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.add('hidden-mobile');
    });
}

// ========================================
// Demo Data
// ========================================

const demoQuotes = [
    { id: 'QT-001', name: 'John Doe', email: 'john@example.com', product: 'Custom T-Shirts', quantity: 50, date: '2025-10-25', status: 'pending' },
    { id: 'QT-002', name: 'Jane Smith', email: 'jane@example.com', product: 'Custom Mugs', quantity: 100, date: '2025-10-24', status: 'processing' },
    { id: 'QT-003', name: 'Bob Johnson', email: 'bob@example.com', product: 'Custom Jerseys', quantity: 25, date: '2025-10-23', status: 'completed' },
    { id: 'QT-004', name: 'Alice Brown', email: 'alice@example.com', product: 'Picture Frames', quantity: 75, date: '2025-10-22', status: 'pending' },
    { id: 'QT-005', name: 'Charlie Wilson', email: 'charlie@example.com', product: 'Water Bottles', quantity: 200, date: '2025-10-21', status: 'processing' },
];

const demoOrders = [
    { id: 'SSA-2025-001234', customer: 'Sarah Johnson', product: 'Custom T-Shirts', quantity: 50, total: '$1,250', date: '2025-10-15', status: 'in-transit' },
    { id: 'SSA-2025-005678', customer: 'Mike Chen', product: 'Custom Mugs', quantity: 100, total: '$2,500', date: '2025-10-20', status: 'production' },
    { id: 'SSA-2025-009999', customer: 'Emily Rodriguez', product: 'Custom Jerseys', quantity: 25, total: '$1,875', date: '2025-10-25', status: 'processing' },
    { id: 'SSA-2025-001111', customer: 'David Thompson', product: 'Picture Frames', quantity: 30, total: '$900', date: '2025-10-18', status: 'completed' },
    { id: 'SSA-2025-002222', customer: 'Lisa Anderson', product: 'Name Tags', quantity: 150, total: '$750', date: '2025-10-19', status: 'completed' },
];

const demoProducts = [
    { id: 1, name: 'Custom T-Shirts', category: 'Apparel', price: '$25', stock: 'In Stock', featured: true },
    { id: 2, name: 'Custom Mugs', category: 'Drinkware', price: '$25', stock: 'In Stock', featured: true },
    { id: 3, name: 'Custom Jerseys', category: 'Apparel', price: '$75', stock: 'In Stock', featured: true },
    { id: 4, name: 'Custom Caps', category: 'Accessories', price: '$20', stock: 'In Stock', featured: false },
    { id: 5, name: 'Picture Frames', category: 'Decor', price: '$30', stock: 'In Stock', featured: true },
    { id: 6, name: 'Name Tags', category: 'Business', price: '$5', stock: 'In Stock', featured: false },
    { id: 7, name: 'Water Bottles', category: 'Drinkware', price: '$18', stock: 'In Stock', featured: true },
];

const demoTestimonials = [
    { id: 1, name: 'Sarah Johnson', role: 'Event Coordinator', rating: 5, text: 'Excellent service! Delivered 500 custom t-shirts on time with perfect quality.', image: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Mike Chen', role: 'Team Manager', rating: 5, text: 'Amazing work on our custom jerseys! The quality is outstanding.', image: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Emily Rodriguez', role: 'Marketing Director', rating: 5, text: 'Exceptional quality products that perfectly represented our brand.', image: 'https://i.pravatar.cc/150?img=3' },
];

const demoContacts = [
    { id: 1, name: 'Mark Wilson', email: 'mark@example.com', subject: 'Bulk Order Inquiry', message: 'Interested in ordering 500 custom t-shirts...', date: '2025-10-28', status: 'new' },
    { id: 2, name: 'Linda Garcia', email: 'linda@example.com', subject: 'Design Question', message: 'Can you help with custom design for mugs?', date: '2025-10-27', status: 'replied' },
    { id: 3, name: 'Robert Lee', email: 'robert@example.com', subject: 'Partnership Opportunity', message: 'Would like to discuss partnership options...', date: '2025-10-26', status: 'new' },
];

// ========================================
// Content Sections
// ========================================

const contentSections = {
    dashboard: () => `
        <div class="space-y-6 fade-in">
            <!-- Stats Cards -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="stat-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Total Orders</p>
                            <p class="text-3xl font-bold text-gray-900 dark:text-white mt-2">${demoOrders.length}</p>
                            <p class="text-sm text-green-600 mt-2">↑ 12% from last month</p>
                        </div>
                        <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-600">
                                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div class="stat-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Quote Requests</p>
                            <p class="text-3xl font-bold text-gray-900 dark:text-white mt-2">${demoQuotes.length}</p>
                            <p class="text-sm text-green-600 mt-2">↑ 8% from last month</p>
                        </div>
                        <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-600">
                                <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                                <path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div class="stat-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Revenue</p>
                            <p class="text-3xl font-bold text-gray-900 dark:text-white mt-2">$12,450</p>
                            <p class="text-sm text-green-600 mt-2">↑ 15% from last month</p>
                        </div>
                        <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-600">
                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                
                <div class="stat-card bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                    <div class="flex items-center justify-between">
                        <div>
                            <p class="text-sm text-gray-600 dark:text-gray-400">Active Products</p>
                            <p class="text-3xl font-bold text-gray-900 dark:text-white mt-2">${demoProducts.length}</p>
                            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">All in stock</p>
                        </div>
                        <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-600">
                                <path d="m7.5 4.27 9 5.15"></path>
                                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                                <path d="m3.3 7 8.7 5 8.7-5"></path>
                                <path d="M12 22V12"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Recent Activity -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Orders</h3>
                    <div class="space-y-4">
                        ${demoOrders.slice(0, 5).map(order => `
                            <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">${order.id}</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">${order.customer}</p>
                                </div>
                                <div class="text-right">
                                    <p class="font-semibold text-gray-900 dark:text-white">${order.total}</p>
                                    <span class="status-badge status-${order.status}">${order.status}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Quote Requests</h3>
                    <div class="space-y-4">
                        ${demoQuotes.slice(0, 5).map(quote => `
                            <div class="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700 last:border-0">
                                <div>
                                    <p class="font-medium text-gray-900 dark:text-white">${quote.name}</p>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">${quote.product}</p>
                                </div>
                                <div class="text-right">
                                    <p class="text-sm text-gray-600 dark:text-gray-400">${quote.quantity} units</p>
                                    <span class="status-badge status-${quote.status}">${quote.status}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `,
    
    quotes: () => `
        <div class="space-y-6 fade-in">
            <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Quote Requests</h3>
                <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Export to CSV
                </button>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>Quote ID</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${demoQuotes.map(quote => `
                            <tr>
                                <td class="font-mono text-sm">${quote.id}</td>
                                <td>
                                    <div>
                                        <p class="font-medium text-gray-900 dark:text-white">${quote.name}</p>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">${quote.email}</p>
                                    </div>
                                </td>
                                <td>${quote.product}</td>
                                <td>${quote.quantity} units</td>
                                <td>${quote.date}</td>
                                <td><span class="status-badge status-${quote.status}">${quote.status}</span></td>
                                <td>
                                    <div class="flex space-x-2">
                                        <button class="action-btn btn-view">View</button>
                                        <button class="action-btn btn-edit">Edit</button>
                                        <button class="action-btn btn-delete">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `,
    
    orders: () => `
        <div class="space-y-6 fade-in">
            <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Orders Management</h3>
                <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Create New Order
                </button>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${demoOrders.map(order => `
                            <tr>
                                <td class="font-mono text-sm">${order.id}</td>
                                <td class="font-medium text-gray-900 dark:text-white">${order.customer}</td>
                                <td>${order.product}</td>
                                <td>${order.quantity} units</td>
                                <td class="font-semibold text-gray-900 dark:text-white">${order.total}</td>
                                <td>${order.date}</td>
                                <td><span class="status-badge status-${order.status}">${order.status}</span></td>
                                <td>
                                    <div class="flex space-x-2">
                                        <button class="action-btn btn-view">View</button>
                                        <button class="action-btn btn-edit">Update</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `,
    
    products: () => `
        <div class="space-y-6 fade-in">
            <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Products Management</h3>
                <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Add New Product
                </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${demoProducts.map(product => `
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-center justify-between mb-4">
                            <span class="text-sm font-medium text-gray-600 dark:text-gray-400">${product.category}</span>
                            ${product.featured ? '<span class="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">Featured</span>' : ''}
                        </div>
                        <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">${product.name}</h4>
                        <p class="text-2xl font-bold text-primary mb-4">${product.price}</p>
                        <p class="text-sm text-green-600 dark:text-green-400 mb-4">${product.stock}</p>
                        <div class="flex space-x-2">
                            <button class="flex-1 action-btn btn-edit">Edit</button>
                            <button class="flex-1 action-btn btn-delete">Delete</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    
    portfolio: () => `
        <div class="space-y-6 fade-in">
            <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Portfolio Management</h3>
                <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Add Portfolio Item
                </button>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <p class="text-gray-600 dark:text-gray-400">Manage your portfolio items, upload images, and update descriptions.</p>
                <p class="text-sm text-gray-500 dark:text-gray-500 mt-2">This section is under development.</p>
            </div>
        </div>
    `,
    
    testimonials: () => `
        <div class="space-y-6 fade-in">
            <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Testimonials Management</h3>
                <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Add Testimonial
                </button>
            </div>
            
            <div class="grid grid-cols-1 gap-6">
                ${demoTestimonials.map(testimonial => `
                    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                        <div class="flex items-start space-x-4">
                            <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full">
                            <div class="flex-1">
                                <div class="flex items-center justify-between mb-2">
                                    <div>
                                        <h4 class="font-semibold text-gray-900 dark:text-white">${testimonial.name}</h4>
                                        <p class="text-sm text-gray-500 dark:text-gray-400">${testimonial.role}</p>
                                    </div>
                                    <div class="flex">
                                        ${'★'.repeat(testimonial.rating)}
                                    </div>
                                </div>
                                <p class="text-gray-600 dark:text-gray-300 mb-4">"${testimonial.text}"</p>
                                <div class="flex space-x-2">
                                    <button class="action-btn btn-edit">Edit</button>
                                    <button class="action-btn btn-delete">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `,
    
    contacts: () => `
        <div class="space-y-6 fade-in">
            <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Contact Messages</h3>
                <button class="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                    Mark All as Read
                </button>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <table class="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Subject</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${demoContacts.map(contact => `
                            <tr>
                                <td class="font-medium text-gray-900 dark:text-white">${contact.name}</td>
                                <td>${contact.email}</td>
                                <td>${contact.subject}</td>
                                <td>${contact.date}</td>
                                <td><span class="status-badge status-${contact.status === 'new' ? 'pending' : 'completed'}">${contact.status}</span></td>
                                <td>
                                    <div class="flex space-x-2">
                                        <button class="action-btn btn-view">View</button>
                                        <button class="action-btn btn-edit">Reply</button>
                                    </div>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `,
    
    analytics: () => `
        <div class="space-y-6 fade-in">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Analytics & Reports</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Conversion Rate</h4>
                    <p class="text-4xl font-bold text-primary mb-2">24.5%</p>
                    <p class="text-sm text-green-600">↑ 3.2% from last month</p>
                </div>
                
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Avg Order Value</h4>
                    <p class="text-4xl font-bold text-primary mb-2">$1,485</p>
                    <p class="text-sm text-green-600">↑ 8.1% from last month</p>
                </div>
                
                <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                    <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Customer Satisfaction</h4>
                    <p class="text-4xl font-bold text-primary mb-2">4.8/5</p>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Based on 127 reviews</p>
                </div>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Revenue Chart</h4>
                <div class="h-64 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg">
                    <p class="text-gray-500 dark:text-gray-400">Chart visualization would go here</p>
                </div>
            </div>
        </div>
    `,
    
    settings: () => `
        <div class="space-y-6 fade-in">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Settings</h3>
            
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Account Settings</h4>
                <form class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Admin Email</label>
                        <input type="email" value="admin@stonestronger.com" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Company Name</label>
                        <input type="text" value="Stone Stronger Artvenue" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Contact Phone</label>
                        <input type="tel" value="+1 (555) 123-4567" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700 dark:text-white">
                    </div>
                    <button type="submit" class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                        Save Changes
                    </button>
                </form>
            </div>
            
            <div class="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Notification Settings</h4>
                <div class="space-y-3">
                    <label class="flex items-center">
                        <input type="checkbox" checked class="w-4 h-4 text-primary rounded">
                        <span class="ml-2 text-gray-700 dark:text-gray-300">Email notifications for new orders</span>
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" checked class="w-4 h-4 text-primary rounded">
                        <span class="ml-2 text-gray-700 dark:text-gray-300">Email notifications for quote requests</span>
                    </label>
                    <label class="flex items-center">
                        <input type="checkbox" class="w-4 h-4 text-primary rounded">
                        <span class="ml-2 text-gray-700 dark:text-gray-300">Weekly summary reports</span>
                    </label>
                </div>
            </div>
        </div>
    `
};

// ========================================
// Navigation Handler
// ========================================

const navItems = document.querySelectorAll('.nav-item');
const contentArea = document.getElementById('content-area');
const pageTitle = document.getElementById('page-title');

if (navItems.length > 0 && contentArea) {
    // Load default section
    contentArea.innerHTML = contentSections.dashboard();
    
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const section = item.getAttribute('data-section');
            
            // Update active state
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Update page title
            pageTitle.textContent = section.charAt(0).toUpperCase() + section.slice(1);
            
            // Load content
            if (contentSections[section]) {
                contentArea.innerHTML = contentSections[section]();
            }
            
            // Close mobile sidebar
            if (sidebar) {
                sidebar.classList.add('hidden-mobile');
            }
        });
    });
}

// ========================================
// Console Message
// ========================================
console.log('%c🎨 Stone Stronger Artvenue Admin Panel', 'color: #FF6F61; font-size: 20px; font-weight: bold;');
console.log('%cAdmin Panel v1.0 | stonestrongerartvenue.com', 'color: #2C3E50; font-size: 14px;');





