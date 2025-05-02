// Google Analytics 4 configuration
export const initAnalytics = () => {
  if (process.env.NODE_ENV === 'production') {
    // Get GA4 measurement ID from environment variable or use default
    const GA_MEASUREMENT_ID = process.env.VITE_GA_MEASUREMENT_ID || 'G-29CJ4V0RPJ';
    
    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID);
  }
};

// Track page views
export const trackPageView = (path) => {
  if (window.gtag) {
    const GA_MEASUREMENT_ID = process.env.VITE_GA_MEASUREMENT_ID || 'G-29CJ4V0RPJ';
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (window.gtag) {
    const GA_MEASUREMENT_ID = process.env.VITE_GA_MEASUREMENT_ID || 'G-29CJ4V0RPJ';
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}; 