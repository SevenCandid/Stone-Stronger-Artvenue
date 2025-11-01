# Stone Stronger Artvenue

![Stone Stronger Artvenue](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A modern, responsive custom printing services website built with HTML, Tailwind CSS, and vanilla JavaScript.

## 🎨 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Toggle between light and dark themes with persistence
- **Interactive Sliders**: Hero slider and testimonial carousel with auto-play
- **Get Quote System**: Fully functional quote request form with validation
- **Order Tracking**: Real-time order tracking with visual timeline
- **Admin Panel**: Complete admin dashboard for managing quotes, orders, products, and more
- **Smooth Animations**: CSS animations and scroll effects
- **Modern UI/UX**: Clean, professional interface with hover effects
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized for fast loading and smooth interactions
- **Accessible**: ARIA labels and keyboard navigation support

## 📋 Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [File Structure](#file-structure)
- [Customization](#customization)
- [Features Breakdown](#features-breakdown)
- [Browser Support](#browser-support)
- [Performance](#performance)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🚀 Demo

Visit the live site at: [Your Domain Here]

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/stone-stronger-artvenue.git
   cd stone-stronger-artvenue
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for better development experience:
   
   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using Node.js (http-server):**
   ```bash
   npx http-server
   ```
   
   **Using VS Code Live Server:**
   - Install the Live Server extension
   - Right-click on `index.html` and select "Open with Live Server"

## 📁 File Structure

```
stone-stronger-artvenue/
│
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── README.md           # Project documentation
├── .gitignore         # Git ignore file
│
├── admin/              # Admin panel
│   ├── login.html      # Admin login page
│   ├── dashboard.html  # Admin dashboard
│   ├── admin.css       # Admin styles
│   ├── admin.js        # Admin functionality
│   └── ADMIN_GUIDE.md  # Admin documentation
│
└── assets/ (optional)  # For local images, fonts, etc.
    ├── images/
    ├── fonts/
    └── icons/
```

## 🎨 Customization

### Colors

The website uses CSS custom properties for easy color customization. Edit the `:root` variables in `styles.css`:

```css
:root {
    --primary: #FF6F61;      /* Primary brand color */
    --secondary: #2C3E50;    /* Secondary brand color */
    --accent: #FFD700;       /* Accent color */
}
```

Or modify the Tailwind config in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#FF6F61',
                secondary: '#2C3E50',
                accent: '#FFD700',
            }
        }
    }
}
```

### Content

1. **Hero Section**: Edit the slides in `index.html` (search for "Hero Section")
2. **Products**: Modify product cards in the Products section
3. **Portfolio**: Update portfolio items in the Portfolio section
4. **Testimonials**: Change testimonials in the Testimonials section
5. **Contact Info**: Update contact information in the Contact section

### Images

Replace the Unsplash image URLs with your own images:

```html
<!-- Current -->
<img src="https://images.unsplash.com/photo-..." alt="...">

<!-- Replace with -->
<img src="assets/images/your-image.jpg" alt="...">
```

### Fonts

The site uses Google Fonts (Poppins). To change the font:

1. Update the Google Fonts link in `index.html`
2. Modify the font-family in the Tailwind config
3. Update the CSS `font-family` properties

## 🔧 Features Breakdown

### 1. Navigation
- Fixed navigation bar with blur effect
- Active link highlighting based on scroll position
- Mobile responsive menu
- Smooth scroll to sections

### 2. Hero Slider
- Auto-rotating slides (5-second intervals)
- Manual navigation with dots
- Pause on hover
- Smooth transitions

### 3. Theme Toggle
- Light/Dark mode switcher
- Preference saved to localStorage
- Smooth transitions between themes

### 4. Testimonials Slider
- Automatic rotation (6-second intervals)
- Manual navigation
- Responsive layout

### 5. Get Quote Modal
- Comprehensive quote request form
- Product selection dropdown
- File upload for designs
- Form validation
- Generates quote reference number
- Ready for backend integration

### 6. Track Order System
- Order tracking by ID and email
- Visual progress timeline
- Status badges (Processing, Production, In Transit, Delivered)
- Demo orders for testing
- Real-time status updates
- Detailed order information display

### 7. Contact Form
- Form validation
- Loading states
- Ready for backend integration

### 8. Scroll Effects
- Scroll to top button
- Animate on scroll for cards
- Parallax effects (can be added)

### 9. Admin Panel 🆕
- Secure login system
- Dashboard with statistics
- Quote request management
- Order management with status tracking
- Product catalog management
- Portfolio & testimonials management
- Contact message inbox
- Analytics & reporting
- Settings configuration
- Dark mode support
- Responsive admin interface

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | Latest  |
| Firefox | Latest  |
| Safari  | Latest  |
| Edge    | Latest  |

The site uses modern JavaScript features. For older browser support, consider adding:
- Babel for JavaScript transpilation
- Autoprefixer for CSS
- Polyfills for modern features

## ⚡ Performance

### Current Optimizations
- Tailwind CSS via CDN (can be optimized further)
- Lazy loading images (implemented in JavaScript)
- Debounced scroll events
- Intersection Observer for animations
- Minimal JavaScript dependencies

### Further Optimizations

1. **For Production:**
   - Build Tailwind CSS locally and purge unused styles
   - Minify HTML, CSS, and JavaScript
   - Optimize and compress images
   - Implement service worker for caching
   - Use CDN for static assets

2. **Build Command (if using Tailwind CLI):**
   ```bash
   npx tailwindcss -i ./styles.css -o ./dist/output.css --minify
   ```

3. **Image Optimization:**
   - Use WebP format for better compression
   - Implement responsive images with `srcset`
   - Lazy load below-the-fold images

## 🚀 Deployment

### Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings > Pages
3. Select main branch as source
4. Save and visit your site at `https://yourusername.github.io/stone-stronger-artvenue`

### Deploy to Netlify

1. Create account at [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Connect your repository
4. Deploy!

### Deploy to Vercel

1. Create account at [Vercel](https://vercel.com)
2. Click "Import Project"
3. Connect your repository
4. Deploy!

### Traditional Web Hosting

1. Upload files via FTP to your web host
2. Ensure `index.html` is in the root directory
3. Configure SSL certificate
4. Point your domain to the hosting

## 🔐 Security Considerations

1. **Content Security Policy**: Add CSP headers
2. **HTTPS**: Always use HTTPS in production
3. **Form Handling**: Implement CSRF protection
4. **API Integration**: Use environment variables for keys
5. **Input Validation**: Validate all user inputs

## 📱 Progressive Web App (PWA)

To convert this into a PWA:

1. Create `manifest.json`:
   ```json
   {
     "name": "Stone Stronger Artvenue",
     "short_name": "SSA",
     "description": "Custom Printing Services",
     "start_url": "/",
     "display": "standalone",
     "background_color": "#ffffff",
     "theme_color": "#FF6F61",
     "icons": [
       {
         "src": "icon-192.png",
         "sizes": "192x192",
         "type": "image/png"
       },
       {
         "src": "icon-512.png",
         "sizes": "512x512",
         "type": "image/png"
       }
     ]
   }
   ```

2. Create `sw.js` (Service Worker) for offline functionality

3. Link manifest in `index.html`:
   ```html
   <link rel="manifest" href="manifest.json">
   ```

## 🔄 Backend Integration

The contact form is currently set up for frontend only. To integrate with a backend:

### Option 1: FormSpree (Easy)

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <!-- form fields -->
</form>
```

### Option 2: Custom API

Modify the fetch call in `script.js`:

```javascript
const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
});
```

### Option 3: Serverless Functions

Deploy serverless functions on:
- Netlify Functions
- Vercel Serverless
- AWS Lambda
- Google Cloud Functions

## 📊 Analytics Integration

### Google Analytics

Add to `<head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Alternative Analytics

- [Plausible](https://plausible.io) (Privacy-focused)
- [Fathom](https://usefathom.com)
- [Simple Analytics](https://simpleanalytics.com)

## 🐛 Troubleshooting

### Issue: Dark mode not persisting
**Solution**: Check localStorage permissions in browser settings

### Issue: Slider not working
**Solution**: Ensure JavaScript is enabled and check console for errors

### Issue: Images not loading
**Solution**: Check image URLs and ensure they're accessible

### Issue: Styles not applying
**Solution**: Clear browser cache or check Tailwind CDN connection

## 📈 SEO Checklist

- [x] Meta description
- [x] Title tags
- [x] Alt text for images
- [x] Semantic HTML
- [x] Mobile responsive
- [x] Fast loading time
- [ ] Submit sitemap.xml
- [ ] robots.txt file
- [ ] Schema.org markup
- [ ] Open Graph tags

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Changelog

### Version 1.0.0 (2025-10-29)
- Initial release
- Hero slider
- Product showcase
- Portfolio gallery
- Testimonials
- Contact form
- Dark mode
- Responsive design

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Stone Stronger Artvenue Team**

- Website: [Your Website]
- Email: info@stonestrongerartvenue.com
- Phone: +1 (555) 123-4567

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Unsplash](https://unsplash.com) for placeholder images
- [Google Fonts](https://fonts.google.com) for typography
- [Lucide Icons](https://lucide.dev) for icon inspiration

## 📞 Support

For support, email info@stonestrongerartvenue.com or open an issue in the repository.

---

Made with ❤️ by Stone Stronger Artvenue

