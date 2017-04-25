import MobileMenu from './modules/mobile-menu';
import ScrollReveal from './modules/scroll-reveal';
import StickyHeader from './modules/sticky-header';
import Modal from './modules/modal';

// Switch to mobile nav on small screens
const mobileMenu = new MobileMenu();

// Add reveal on scroll to elements
const revealFeatureItems = new ScrollReveal('feature-item', '85%');
const revealTestimonials = new ScrollReveal('testimonial', '60%');

// Make nav sticky on desktop views
const stickyNav = new StickyHeader();

const modal = new Modal();
