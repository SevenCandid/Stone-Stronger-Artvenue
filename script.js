// Stone Stronger Artvenue - Main JavaScript

// ========================================
// Theme Toggle Functionality
// ========================================
const themeToggles = document.querySelectorAll('#theme-toggle');
const html = document.documentElement;

// Check for saved theme preference or default to dark
const currentTheme = localStorage.getItem('theme') || 'dark';
html.classList.toggle('dark', currentTheme === 'dark');

// Add event listener to all theme toggle buttons (desktop and mobile)
themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        const theme = html.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
});

// ========================================
// Mobile Menu Toggle
// ========================================
function initMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuToggle || !mobileMenu) {
        console.error('Mobile menu elements not found');
        return;
    }
    
    // Ensure menu is hidden on large screens
    function checkScreenSize() {
        if (window.innerWidth >= 1024) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (window.innerWidth < 1024) {
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        }
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('.mobile-menu-link');
    
    mobileMenuLinks.forEach(element => {
        element.addEventListener('click', () => {
            if (window.innerWidth < 1024) {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth < 1024) {
            if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                }
            }
        }
    });
    
    // Check screen size on resize
    window.addEventListener('resize', checkScreenSize);
    checkScreenSize();
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
});

// ========================================
// Hero Slider Functionality
// ========================================
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.dots = document.querySelectorAll('.slider-dot');
        this.currentSlide = 0;
        this.slideInterval = null;
        
        this.init();
    }
    
    init() {
        // Set first slide as active
        this.showSlide(0);
        
        // Add click events to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // Start auto-slide
        this.startAutoSlide();
        
        // Pause on hover
        const heroSection = document.querySelector('.hero-slider');
        heroSection.addEventListener('mouseenter', () => this.stopAutoSlide());
        heroSection.addEventListener('mouseleave', () => this.startAutoSlide());
    }
    
    showSlide(index) {
        // Remove active class from all slides and dots
        this.slides.forEach(slide => {
            slide.classList.remove('active');
            slide.style.opacity = '0';
        });
        this.dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        this.slides[index].classList.add('active');
        this.slides[index].style.opacity = '1';
        this.dots[index].classList.add('active');
        
        this.currentSlide = index;
    }
    
    nextSlide() {
        let next = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(next);
    }
    
    goToSlide(index) {
        this.stopAutoSlide();
        this.showSlide(index);
        this.startAutoSlide();
    }
    
    startAutoSlide() {
        this.slideInterval = setInterval(() => this.nextSlide(), 5000);
    }
    
    stopAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }
}

// Initialize hero slider
const heroSlider = new HeroSlider();

// ========================================
// Rotating Text Effect for Hero Section
// ========================================
function initRotatingText() {
    const rotatingElements = document.querySelectorAll('.rotating-text[data-texts]');
    
    rotatingElements.forEach(element => {
        try {
            const texts = JSON.parse(element.getAttribute('data-texts'));
            if (!texts || texts.length === 0) return;
            
            element.innerHTML = '';
            
            // Measure text widths accurately
            const temp = document.createElement('span');
            temp.style.visibility = 'hidden';
            temp.style.position = 'absolute';
            temp.style.whiteSpace = 'nowrap';
            const styles = window.getComputedStyle(element);
            temp.style.font = styles.font;
            document.body.appendChild(temp);
            
            const widths = texts.map(text => {
                temp.textContent = text;
                return temp.offsetWidth;
            });
            
            const maxWidth = Math.max(...widths);
            const maxHeight = temp.offsetHeight;
            document.body.removeChild(temp);
            
            // Set container size to fit largest text
            const padding = window.innerWidth <= 640 ? 15 : 25;
            const cursorSpace = 3;
            const containerWidth = maxWidth + cursorSpace + padding;
            
            element.style.width = containerWidth + 'px';
            element.style.height = maxHeight + 'px';
            element.style.minWidth = containerWidth + 'px';
            element.style.maxWidth = containerWidth + 'px';
            
            // Create spans for each text
            const spanElements = texts.map((text, index) => {
                const span = document.createElement('span');
                span.textContent = text;
                span.className = 'rotating-text-item';
                span.style.position = 'absolute';
                span.style.left = '0';
                span.style.top = '0';
                span.style.opacity = index === 0 ? '1' : '0';
                span.style.transform = index === 0 ? 'translateY(0)' : 'translateY(20px)';
                span.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                span.style.whiteSpace = 'nowrap';
                element.appendChild(span);
                return span;
            });
            
            // Rotate through texts
            let currentIndex = 0;
            const duration = 2500;
            
            function rotateText() {
                const current = spanElements[currentIndex];
                if (current) {
                    current.style.opacity = '0';
                    current.style.transform = 'translateY(-20px)';
                }
                
                currentIndex = (currentIndex + 1) % spanElements.length;
                
                setTimeout(() => {
                    const next = spanElements[currentIndex];
                    if (next) {
                        next.style.opacity = '1';
                        next.style.transform = 'translateY(0)';
                    }
                }, 500);
            }
            
            setInterval(rotateText, duration);
            
        } catch (e) {
            console.error('Rotating text error:', e);
        }
    });
}

document.addEventListener('DOMContentLoaded', initRotatingText);

// ========================================
// Testimonial Slider Functionality
// ========================================
class TestimonialSlider {
    constructor() {
        this.slider = document.querySelector('#testimonial-slider-content') || document.querySelector('.testimonial-wrapper');
        this.dots = document.querySelectorAll('.testimonial-dot');
        this.currentIndex = 0;
        this.slideInterval = null;
        
        if (this.slider && this.dots.length > 0) {
            this.init();
        }
    }
    
    init() {
        // Add click events to dots
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
            });
        });
        
        // Start auto-slide
        this.startAutoSlide();
        
        // Pause on hover
        const testimonialSection = document.querySelector('.testimonial-slider');
        if (testimonialSection) {
            testimonialSection.addEventListener('mouseenter', () => this.stopAutoSlide());
            testimonialSection.addEventListener('mouseleave', () => this.startAutoSlide());
        }
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        const offset = -100 * index;
        this.slider.style.transform = `translateX(${offset}%)`;
        
        // Update dots
        this.dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.remove('bg-gray-300', 'dark:bg-gray-600');
                dot.classList.add('bg-primary');
            } else {
                dot.classList.remove('bg-primary');
                dot.classList.add('bg-gray-300', 'dark:bg-gray-600');
            }
        });
        
        this.stopAutoSlide();
        this.startAutoSlide();
    }
    
    nextSlide() {
        const next = (this.currentIndex + 1) % this.dots.length;
        this.goToSlide(next);
    }
    
    startAutoSlide() {
        this.slideInterval = setInterval(() => this.nextSlide(), 6000);
    }
    
    stopAutoSlide() {
        if (this.slideInterval) {
            clearInterval(this.slideInterval);
        }
    }
}

// Initialize testimonial slider
const testimonialSlider = new TestimonialSlider();

// ========================================
// Smooth Scroll for Navigation Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Active Navigation Link on Scroll
// ========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveLink() {
    const scrollPosition = window.scrollY;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('text-primary');
                link.classList.add('text-gray-700', 'dark:text-gray-300');
                const underline = link.querySelector('div');
                if (underline) underline.remove();
                
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.remove('text-gray-700', 'dark:text-gray-300');
                    link.classList.add('text-primary');
                    if (!link.querySelector('div')) {
                        const div = document.createElement('div');
                        div.className = 'absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full';
                        link.appendChild(div);
                    }
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// ========================================
// Scroll to Top Button
// ========================================
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Navbar Scroll Effect
// ========================================
const navbar = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Form Submission Handler
// ========================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Add loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        
        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            // Success
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
            
            // Remove loading state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }, 1500);
        
        // In production, you would send the data to your server:
        /*
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
        }
        */
    });
}

// ========================================
// Lazy Loading for Images
// ========================================
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
}, {
    rootMargin: '50px'
});

images.forEach(img => imageObserver.observe(img));

// ========================================
// Animate on Scroll
// ========================================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-scale-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
};

// Run on page load
window.addEventListener('load', () => {
    animateOnScroll();
});

// ========================================
// Performance Optimization: Debounce
// ========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler
const debouncedScroll = debounce(() => {
    updateActiveLink();
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ========================================
// Newsletter Form Handler
// ========================================
const newsletterForm = document.querySelector('footer form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value;
        
        // Simulate newsletter subscription
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = '';
        
        // In production, send to your newsletter API:
        /*
        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email })
            });
            
            if (response.ok) {
                alert('Successfully subscribed to newsletter!');
                emailInput.value = '';
            }
        } catch (error) {
            console.error('Error:', error);
        }
        */
    });
}

// ========================================
// Add Click Handlers for Product/Portfolio Items
// ========================================
// Portfolio items handler (kept for portfolio gallery clicks)
const portfolioItems = document.querySelectorAll('.gallery-item');
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const itemName = item.querySelector('h3').textContent;
        alert(`Viewing: ${itemName}\n\nThis would open a lightbox or detail view in production.`);
    });
});

// ========================================
// Get Quote Modal Functionality
// ========================================
const quoteModal = document.getElementById('quote-modal');
const quoteForm = document.getElementById('quote-form');
const getQuoteBtnsDesktop = document.getElementById('get-quote-btn-desktop');
const getQuoteBtnsMobile = document.getElementById('get-quote-btn-mobile');
const closeQuoteModal = document.getElementById('close-quote-modal');
const cancelQuote = document.getElementById('cancel-quote');

// Open quote modal with optional product prefill
function openQuoteModal(productValue = null) {
    quoteModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // If product value is provided, prefill the form
    if (productValue) {
        const productSelect = document.getElementById('quote-product');
        productSelect.value = productValue;
        
        // Scroll to product field to show it's selected (optional UX enhancement)
        setTimeout(() => {
            productSelect.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}

// Add click handlers for "Order Now" buttons in product section
const orderNowButtons = document.querySelectorAll('.order-now-btn');
orderNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productValue = button.getAttribute('data-product');
        openQuoteModal(productValue);
    });
});

// Close quote modal
function closeQuoteModalFunc() {
    quoteModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    quoteForm.reset();
}

// Event listeners for opening modal
getQuoteBtnsDesktop.addEventListener('click', openQuoteModal);
getQuoteBtnsMobile.addEventListener('click', openQuoteModal);

// Event listeners for closing modal
closeQuoteModal.addEventListener('click', closeQuoteModalFunc);
cancelQuote.addEventListener('click', closeQuoteModalFunc);

// Close modal when clicking outside
quoteModal.addEventListener('click', (e) => {
    if (e.target === quoteModal) {
        closeQuoteModalFunc();
    }
});

// Handle quote form submission
quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(quoteForm);
    const data = Object.fromEntries(formData);
    
    // Add loading state
    const submitBtn = quoteForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Submitting...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
        // Generate quote reference number
        const quoteRef = `QT-${Date.now().toString().slice(-8)}`;
        
        // Success message with details
        alert(`✅ Quote Request Submitted Successfully!\n\nReference Number: ${quoteRef}\n\nThank you for your quote request! We will review your requirements and send you a detailed quote within 24 hours to ${data.email}.\n\nProduct: ${data.product}\nQuantity: ${data.quantity}\n\nYou will receive a confirmation email shortly.`);
        
        closeQuoteModalFunc();
        
        // Remove loading state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
    
    // In production, send to your backend:
    /*
    try {
        const response = await fetch('/api/quote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            const result = await response.json();
            alert(`Quote request submitted! Reference: ${result.quoteId}`);
            closeQuoteModalFunc();
        } else {
            alert('Error submitting quote. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting quote. Please try again.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
    */
});

// ========================================
// Track Order Modal Functionality
// ========================================
const trackModal = document.getElementById('track-modal');
const trackForm = document.getElementById('track-form');
const trackFormContainer = document.getElementById('track-form-container');
const trackResults = document.getElementById('track-results');
const trackOrderBtnsDesktop = document.getElementById('track-order-btn-desktop');
const trackOrderBtnsMobile = document.getElementById('track-order-btn-mobile');
const closeTrackModal = document.getElementById('close-track-modal');
const cancelTrack = document.getElementById('cancel-track');
const trackNewOrder = document.getElementById('track-new-order');

// Sample order data (for demo purposes)
const demoOrders = {
    'SSA-2025-001234': {
        orderId: 'SSA-2025-001234',
        product: 'Custom T-Shirts',
        quantity: 50,
        orderDate: '2025-10-15',
        expectedDelivery: '2025-10-29',
        status: 'in-transit',
        timeline: [
            { step: 'Order Placed', date: '2025-10-15', completed: true },
            { step: 'Design Approved', date: '2025-10-16', completed: true },
            { step: 'In Production', date: '2025-10-18', completed: true },
            { step: 'Quality Check', date: '2025-10-22', completed: true },
            { step: 'Shipped', date: '2025-10-25', completed: true },
            { step: 'Out for Delivery', date: '2025-10-29', completed: false },
            { step: 'Delivered', date: 'Pending', completed: false }
        ]
    },
    'SSA-2025-005678': {
        orderId: 'SSA-2025-005678',
        product: 'Custom Mugs',
        quantity: 100,
        orderDate: '2025-10-20',
        expectedDelivery: '2025-11-05',
        status: 'production',
        timeline: [
            { step: 'Order Placed', date: '2025-10-20', completed: true },
            { step: 'Design Approved', date: '2025-10-21', completed: true },
            { step: 'In Production', date: '2025-10-23', completed: true },
            { step: 'Quality Check', date: 'Pending', completed: false },
            { step: 'Shipped', date: 'Pending', completed: false },
            { step: 'Out for Delivery', date: 'Pending', completed: false },
            { step: 'Delivered', date: 'Pending', completed: false }
        ]
    },
    'SSA-2025-009999': {
        orderId: 'SSA-2025-009999',
        product: 'Custom Jerseys',
        quantity: 25,
        orderDate: '2025-10-25',
        expectedDelivery: '2025-11-10',
        status: 'processing',
        timeline: [
            { step: 'Order Placed', date: '2025-10-25', completed: true },
            { step: 'Design Approved', date: '2025-10-26', completed: true },
            { step: 'In Production', date: 'Pending', completed: false },
            { step: 'Quality Check', date: 'Pending', completed: false },
            { step: 'Shipped', date: 'Pending', completed: false },
            { step: 'Out for Delivery', date: 'Pending', completed: false },
            { step: 'Delivered', date: 'Pending', completed: false }
        ]
    }
};

// Open track modal
function openTrackModal() {
    trackModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    // Reset to form view
    trackFormContainer.classList.remove('hidden');
    trackResults.classList.add('hidden');
}

// Close track modal
function closeTrackModalFunc() {
    trackModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
    trackForm.reset();
    trackFormContainer.classList.remove('hidden');
    trackResults.classList.add('hidden');
}

// Event listeners for opening modal
trackOrderBtnsDesktop.addEventListener('click', openTrackModal);
trackOrderBtnsMobile.addEventListener('click', openTrackModal);

// Event listeners for closing modal
closeTrackModal.addEventListener('click', closeTrackModalFunc);
cancelTrack.addEventListener('click', closeTrackModalFunc);

// Track another order
trackNewOrder.addEventListener('click', () => {
    trackFormContainer.classList.remove('hidden');
    trackResults.classList.add('hidden');
    trackForm.reset();
});

// Close modal when clicking outside
trackModal.addEventListener('click', (e) => {
    if (e.target === trackModal) {
        closeTrackModalFunc();
    }
});

// Handle track form submission
trackForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(trackForm);
    const orderId = formData.get('orderId').toUpperCase();
    const email = formData.get('email');
    
    // Add loading state
    const submitBtn = trackForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Searching...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Check if order exists in demo data
        const orderData = demoOrders[orderId];
        
        if (orderData) {
            // Display order information
            displayOrderTracking(orderData);
        } else {
            alert('Order not found. Please check your Order ID and email address.\n\nFor demo purposes, try:\n- SSA-2025-001234\n- SSA-2025-005678\n- SSA-2025-009999');
        }
        
        // Remove loading state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1000);
    
    // In production, fetch from your backend:
    /*
    try {
        const response = await fetch(`/api/orders/track`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ orderId, email })
        });
        
        if (response.ok) {
            const orderData = await response.json();
            displayOrderTracking(orderData);
        } else {
            alert('Order not found or email does not match.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error tracking order. Please try again.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
    */
});

// Display order tracking information
function displayOrderTracking(orderData) {
    // Hide form, show results
    trackFormContainer.classList.add('hidden');
    trackResults.classList.remove('hidden');
    
    // Populate order details
    document.getElementById('result-order-id').textContent = orderData.orderId;
    document.getElementById('result-product').textContent = orderData.product;
    document.getElementById('result-quantity').textContent = orderData.quantity + ' units';
    document.getElementById('result-date').textContent = new Date(orderData.orderDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('result-delivery').textContent = new Date(orderData.expectedDelivery).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    
    // Set status badge
    const statusBadge = document.getElementById('result-status-badge');
    let statusText = '';
    let statusClass = '';
    
    switch(orderData.status) {
        case 'processing':
            statusText = 'Processing';
            statusClass = 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300';
            break;
        case 'production':
            statusText = 'In Production';
            statusClass = 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300';
            break;
        case 'in-transit':
            statusText = 'In Transit';
            statusClass = 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300';
            break;
        case 'delivered':
            statusText = 'Delivered';
            statusClass = 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
            break;
        default:
            statusText = 'Pending';
            statusClass = 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
    
    statusBadge.textContent = statusText;
    statusBadge.className = `px-3 py-1 rounded-full text-sm font-semibold ${statusClass}`;
    
    // Build timeline
    const timeline = document.getElementById('progress-timeline');
    timeline.innerHTML = '';
    
    orderData.timeline.forEach((item, index) => {
        const isLast = index === orderData.timeline.length - 1;
        const timelineItem = document.createElement('div');
        timelineItem.className = 'flex items-start';
        
        const iconColor = item.completed ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600';
        const lineColor = item.completed ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600';
        const textColor = item.completed ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400';
        
        timelineItem.innerHTML = `
            <div class="flex flex-col items-center mr-4">
                <div class="w-8 h-8 ${iconColor} rounded-full flex items-center justify-center">
                    ${item.completed ? `
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    ` : `
                        <div class="w-3 h-3 bg-white dark:bg-gray-800 rounded-full"></div>
                    `}
                </div>
                ${!isLast ? `<div class="w-0.5 h-12 ${lineColor} mt-2"></div>` : ''}
            </div>
            <div class="flex-1 pb-8">
                <h5 class="font-semibold ${textColor}">${item.step}</h5>
                <p class="text-sm text-gray-500 dark:text-gray-400">${item.date}</p>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// ========================================
// Console Message
// ========================================
console.log('%c🎨 Stone Stronger Artvenue', 'color: #FF6F61; font-size: 20px; font-weight: bold;');
console.log('%cCustom Printing Solutions | stonestrongerartvenue.com', 'color: #2C3E50; font-size: 14px;');

// ========================================
// Service Worker Registration (for PWA)
// ========================================
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment when you have a service worker file
        /*
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
        */
    });
}

// ========================================
// Track Page Views (Analytics Placeholder)
// ========================================
function trackPageView() {
    // In production, integrate with Google Analytics, Plausible, or other analytics
    /*
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            page_path: window.location.pathname
        });
    }
    */
    console.log('Page view tracked:', window.location.pathname);
}

trackPageView();

// ========================================
// Error Handling
// ========================================
window.addEventListener('error', (e) => {
    console.error('Global error:', e.error);
    // In production, send to error tracking service like Sentry
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Unhandled promise rejection:', e.reason);
    // In production, send to error tracking service
});

