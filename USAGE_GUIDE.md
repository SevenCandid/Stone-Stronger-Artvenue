# Usage Guide - Get Quote & Track Order

This guide explains how to use the newly implemented **Get Quote** and **Track Order** features.

## 🎯 Get Quote Feature

### How to Access
- Click the **"Get Quote"** button in the navigation bar (both desktop and mobile)
- The quote request modal will open

### Form Fields

1. **Full Name** * (Required)
   - Enter your full name

2. **Email Address** * (Required)
   - Enter a valid email address where you'll receive the quote

3. **Phone Number** (Optional)
   - Your contact phone number

4. **Company Name** (Optional)
   - Your company or organization name

5. **Product Type** * (Required)
   - Select from dropdown:
     - Custom T-Shirts
     - Custom Mugs
     - Custom Jerseys
     - Custom Caps
     - Picture Frames
     - Name Tags
     - Water Bottles
     - Other (specify in details)

6. **Quantity** * (Required)
   - Minimum: 1 unit
   - Enter the number of items you need

7. **Preferred Deadline** (Optional)
   - Select your preferred delivery date

8. **Additional Details** * (Required)
   - Describe your requirements:
     - Colors
     - Sizes
     - Design specifications
     - Special requests

9. **Upload Design** (Optional)
   - Supported formats: JPG, PNG, PDF, AI, PSD
   - Maximum file size: 10MB

10. **Terms & Conditions** * (Required)
    - Must agree to authorize contact

### After Submission

- Quote reference number is generated (e.g., QT-12345678)
- Confirmation message displays:
  - Reference number
  - Product type
  - Quantity
  - Email where quote will be sent
- Quote will be sent within 24 hours

### Backend Integration (For Developers)

To connect to your backend API, update `script.js` line ~534:

```javascript
const response = await fetch('/api/quote', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
});
```

Expected backend response:
```json
{
    "success": true,
    "quoteId": "QT-12345678",
    "message": "Quote request received"
}
```

---

## 📦 Track Order Feature

### How to Access
- Click the **"Track Order"** button in the navigation bar
- The order tracking modal will open

### Demo Orders (For Testing)

Try these demo order IDs:

1. **SSA-2025-001234**
   - Product: Custom T-Shirts (50 units)
   - Status: In Transit
   - Progress: 5/7 steps complete

2. **SSA-2025-005678**
   - Product: Custom Mugs (100 units)
   - Status: In Production
   - Progress: 3/7 steps complete

3. **SSA-2025-009999**
   - Product: Custom Jerseys (25 units)
   - Status: Processing
   - Progress: 2/7 steps complete

### How to Track

1. Enter **Order ID** (e.g., SSA-2025-001234)
2. Enter **Email Address** used for the order
3. Click **"Track Order"**

### Order Status Types

- 🟡 **Processing**: Order received and being reviewed
- 🔵 **In Production**: Actively being manufactured
- 🟣 **In Transit**: Shipped and on the way
- 🟢 **Delivered**: Successfully delivered

### Order Timeline

The tracking system shows 7 stages:

1. ✓ **Order Placed** - Order confirmed and received
2. ✓ **Design Approved** - Design reviewed and approved
3. ✓ **In Production** - Manufacturing in progress
4. ✓ **Quality Check** - Quality assurance testing
5. ✓ **Shipped** - Package handed to courier
6. ⏳ **Out for Delivery** - In your local area
7. ⏳ **Delivered** - Successfully delivered

- ✓ = Completed
- ⏳ = Pending

### Order Details Displayed

- Order ID
- Product name
- Quantity
- Order date
- Expected delivery date
- Current status
- Progress timeline with dates

### Backend Integration (For Developers)

To connect to your backend API, update `script.js` line ~701:

```javascript
const response = await fetch(`/api/orders/track`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({ orderId, email })
});
```

Expected backend response format:
```json
{
    "orderId": "SSA-2025-001234",
    "product": "Custom T-Shirts",
    "quantity": 50,
    "orderDate": "2025-10-15",
    "expectedDelivery": "2025-10-29",
    "status": "in-transit",
    "timeline": [
        {
            "step": "Order Placed",
            "date": "2025-10-15",
            "completed": true
        },
        {
            "step": "Design Approved",
            "date": "2025-10-16",
            "completed": true
        },
        {
            "step": "In Production",
            "date": "2025-10-18",
            "completed": true
        },
        {
            "step": "Quality Check",
            "date": "2025-10-22",
            "completed": true
        },
        {
            "step": "Shipped",
            "date": "2025-10-25",
            "completed": true
        },
        {
            "step": "Out for Delivery",
            "date": "Pending",
            "completed": false
        },
        {
            "step": "Delivered",
            "date": "Pending",
            "completed": false
        }
    ]
}
```

---

## 🎨 Features

### Modal Features
- Click outside to close
- ESC key to close (can be added)
- Responsive design
- Dark mode support
- Smooth animations
- Form validation
- Loading states

### User Experience
- Mobile-friendly
- Keyboard accessible
- Error messages
- Success confirmations
- Visual feedback
- Progress indicators

---

## 🔧 Customization

### Change Status Colors

Edit `script.js` around line ~743:

```javascript
switch(orderData.status) {
    case 'processing':
        statusClass = 'bg-yellow-100 text-yellow-800';
        break;
    // Add more statuses...
}
```

### Modify Timeline Steps

Edit the demo orders object in `script.js` (~line 573) or adjust your backend API response.

### Change Form Fields

Edit `index.html` in the quote modal section to add/remove fields.

---

## 📧 Email Notifications (To Implement)

### Quote Confirmation Email
Should include:
- Quote reference number
- Product details
- Quantity requested
- Estimated timeline
- Next steps

### Order Tracking Email
Should include:
- Order ID
- Tracking link
- Current status
- Estimated delivery
- Support contact

---

## 🐛 Troubleshooting

### Quote Not Submitting
- Check all required fields are filled
- Ensure terms checkbox is checked
- Check browser console for errors

### Order Not Found
- Verify Order ID format (SSA-YYYY-XXXXXX)
- Check email matches order
- Try demo IDs for testing

### Modal Not Opening
- Check JavaScript is loaded
- Ensure button IDs match
- Check for console errors

---

## 💡 Tips

1. **For Testing**: Use the provided demo order IDs
2. **For Production**: Replace demo data with API calls
3. **Email Validation**: Current validation is basic; enhance as needed
4. **File Upload**: Currently frontend only; needs backend handling
5. **Security**: Add CSRF protection for production

---

## 📞 Support

For issues or questions:
- Check console for errors
- Review `script.js` for function definitions
- Ensure all IDs in HTML match JavaScript selectors
- Test in multiple browsers

---

## 🚀 Next Steps

1. **Backend Integration**
   - Set up quote API endpoint
   - Set up order tracking API endpoint
   - Configure email notifications

2. **Enhancements**
   - Add real-time order updates via WebSocket
   - Implement email notifications
   - Add PDF quote generation
   - Enable order cancellation
   - Add payment integration

3. **Testing**
   - Test all form validations
   - Test on multiple devices
   - Test error scenarios
   - Load testing for production

---

Made with ❤️ by Stone Stronger Artvenue








