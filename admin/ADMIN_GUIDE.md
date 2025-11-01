# Admin Panel Guide

Complete guide for managing Stone Stronger Artvenue through the admin panel.

## 🔐 Access & Login

### Demo Credentials
- **URL**: `admin/login.html`
- **Email**: `admin@stonestronger.com`
- **Password**: `admin123`

### Features
- Secure login authentication
- Remember me functionality
- Password visibility toggle
- Session management via localStorage
- Automatic redirect if not logged in

---

## 📊 Dashboard Overview

The dashboard provides a comprehensive view of your business:

### Key Metrics
1. **Total Orders** - Current order count with monthly trend
2. **Quote Requests** - Pending quote requests
3. **Revenue** - Total revenue with growth percentage
4. **Active Products** - Number of products in catalog

### Recent Activity
- **Recent Orders**: Last 5 orders with status
- **Recent Quotes**: Latest quote requests

---

## 🎯 Main Features

### 1. Quote Requests Management
**Location**: Sidebar → Quote Requests

**Features**:
- View all quote requests in table format
- Filter by status (pending, processing, completed)
- Customer information (name, email)
- Product details and quantity
- Date tracking
- Actions: View, Edit, Delete

**Status Types**:
- 🟡 **Pending**: New quote request
- 🔵 **Processing**: Quote being prepared
- 🟢 **Completed**: Quote sent to customer
- 🔴 **Cancelled**: Quote request cancelled

**Actions**:
- **View**: See full quote details
- **Edit**: Modify quote information
- **Delete**: Remove quote from system
- **Export to CSV**: Download all quotes

### 2. Orders Management
**Location**: Sidebar → Orders

**Features**:
- Complete order tracking
- Order ID (format: SSA-YYYY-XXXXXX)
- Customer information
- Product and quantity
- Total amount
- Order date
- Status tracking

**Status Types**:
- 🟡 **Processing**: Order received, being reviewed
- 🔵 **Production**: Item being manufactured
- 🟣 **In Transit**: Shipped and on delivery
- 🟢 **Completed**: Successfully delivered

**Actions**:
- **View**: Full order details
- **Update**: Change order status
- **Create New Order**: Add manual order

### 3. Products Management
**Location**: Sidebar → Products

**Features**:
- Grid view of all products
- Product cards with:
  - Name and category
  - Price
  - Stock status
  - Featured tag
- Actions per product:
  - Edit product details
  - Delete product

**Product Categories**:
- Apparel (T-Shirts, Jerseys)
- Drinkware (Mugs, Water Bottles)
- Accessories (Caps, Name Tags)
- Decor (Picture Frames)
- Business (Name Tags)

### 4. Portfolio Management
**Location**: Sidebar → Portfolio

**Features**:
- Manage portfolio items
- Upload project images
- Add descriptions
- Showcase best work

### 5. Testimonials Management
**Location**: Sidebar → Testimonials

**Features**:
- View all testimonials
- Customer information with avatar
- Rating system (1-5 stars)
- Testimonial text
- Role/position information

**Actions**:
- Add new testimonial
- Edit existing testimonial
- Delete testimonial
- Approve/reject testimonials

### 6. Contact Messages
**Location**: Sidebar → Contact Messages

**Features**:
- All contact form submissions
- Customer name and email
- Subject line
- Message preview
- Date received
- Status (New/Replied)

**Actions**:
- View full message
- Reply to customer
- Mark as read
- Delete message

### 7. Analytics & Reports
**Location**: Sidebar → Analytics

**Metrics**:
- Conversion Rate
- Average Order Value
- Customer Satisfaction Score
- Revenue Charts
- Performance Trends

### 8. Settings
**Location**: Sidebar → Settings

**Options**:
- Account Settings
  - Admin email
  - Company name
  - Contact phone
- Notification Settings
  - Email notifications
  - Order alerts
  - Quote request alerts
  - Weekly reports

---

## 🎨 Interface Features

### Navigation
- **Sidebar**: Left-side navigation menu
- **Mobile Toggle**: Hamburger menu for mobile devices
- **Active Indicator**: Visual indicator for current section
- **Notification Badges**: Count of pending items

### Top Bar
- **Search**: Quick search functionality
- **Notifications**: Alert bell with unread count
- **Theme Toggle**: Switch between light/dark mode
- **View Website**: Quick link to public website
- **User Profile**: Shows logged-in admin info

### User Profile Section
- Admin avatar
- Email address
- Quick logout button

---

## 🔧 Technical Details

### File Structure
```
admin/
├── login.html          # Login page
├── dashboard.html      # Main admin dashboard
├── admin.css          # Custom admin styles
├── admin.js           # Admin functionality
└── ADMIN_GUIDE.md     # This guide
```

### Technologies Used
- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **Vanilla JavaScript**: No dependencies
- **LocalStorage**: Session and theme persistence
- **Font**: Poppins from Google Fonts

### Data Management
- Currently uses demo data (hardcoded in `admin.js`)
- Ready for backend API integration
- All CRUD operations have placeholders

### Security
- Login authentication check on dashboard
- Automatic redirect if not authenticated
- Session management
- Logout functionality

---

## 🔌 Backend Integration

### Authentication API

Replace demo login with real API:

```javascript
// In admin.js, update loginForm handler
const response = await fetch('/api/admin/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
});

const data = await response.json();
if (data.token) {
    localStorage.setItem('authToken', data.token);
    localStorage.setItem('adminLoggedIn', 'true');
    window.location.href = 'dashboard.html';
}
```

### Data Fetching

Update each section to fetch from API:

**Quotes**:
```javascript
const response = await fetch('/api/admin/quotes', {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
});
const quotes = await response.json();
```

**Orders**:
```javascript
const response = await fetch('/api/admin/orders', {
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
});
const orders = await response.json();
```

### CRUD Operations

**Create**:
```javascript
await fetch('/api/admin/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
    body: JSON.stringify(productData)
});
```

**Update**:
```javascript
await fetch(`/api/admin/products/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    },
    body: JSON.stringify(updatedData)
});
```

**Delete**:
```javascript
await fetch(`/api/admin/products/${id}`, {
    method: 'DELETE',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`
    }
});
```

---

## 📱 Responsive Design

### Desktop (1024px+)
- Full sidebar visible
- Grid layouts for cards
- Multi-column tables

### Tablet (768px - 1023px)
- Collapsible sidebar
- 2-column grids
- Simplified tables

### Mobile (< 768px)
- Hidden sidebar (toggle button)
- Single column layout
- Stacked cards
- Scrollable tables

---

## 🎯 Best Practices

### Security
1. Always use HTTPS in production
2. Implement proper authentication
3. Use secure password storage
4. Add CSRF protection
5. Validate all inputs
6. Sanitize user data

### Performance
1. Lazy load images
2. Paginate large tables
3. Cache API responses
4. Minimize API calls
5. Use loading states

### UX
1. Provide loading indicators
2. Show success/error messages
3. Confirm destructive actions
4. Auto-save where possible
5. Keep forms simple

---

## 🐛 Troubleshooting

### Login Issues
- **Problem**: Can't login
- **Solution**: Use demo credentials or check localStorage

### Dashboard Not Loading
- **Problem**: Blank dashboard
- **Solution**: Check browser console for errors

### Data Not Showing
- **Problem**: Tables are empty
- **Solution**: Check if demo data is loading in `admin.js`

### Sidebar Not Working on Mobile
- **Problem**: Can't open/close sidebar
- **Solution**: Check JavaScript is loaded

---

## 🔄 Future Enhancements

### Planned Features
- [ ] Real-time notifications
- [ ] Advanced analytics with charts
- [ ] Bulk operations
- [ ] Export/Import functionality
- [ ] Email templates editor
- [ ] File upload manager
- [ ] Activity logs
- [ ] User roles & permissions
- [ ] API documentation
- [ ] Backup & restore

### Under Consideration
- WebSocket for real-time updates
- Advanced search and filters
- Custom reporting
- Multi-language support
- Mobile app
- Automated backups

---

## 📞 Support

For help with the admin panel:
- Check this guide first
- Review `admin.js` for code examples
- Check browser console for errors
- Test with demo data first

---

## 📝 Changelog

### Version 1.0.0 (2025-10-29)
- Initial admin panel release
- Login system
- Dashboard with statistics
- Quote request management
- Order management
- Product management
- Testimonials management
- Contact message management
- Analytics section
- Settings page
- Dark mode support
- Responsive design

---

Made with ❤️ for Stone Stronger Artvenue





