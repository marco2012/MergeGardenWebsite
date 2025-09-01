// Google Analytics 4 utility functions
export const GA_TRACKING_ID = "G-NZW821N7MB";

// Initialize Google Analytics
export const initGA = () => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", GA_TRACKING_ID, {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true,
        });
    }
};

// Track page views
export const trackPageView = (url) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("config", GA_TRACKING_ID, {
            page_path: url,
            page_title: document.title,
            page_location: window.location.href,
        });
    }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Track download events
export const trackDownload = (platform) => {
    trackEvent("download", "app_download", platform, 1);
};

// Track video interactions
export const trackVideoPlay = () => {
    trackEvent("play", "video", "gameplay_video", 1);
};

// Track external link clicks
export const trackExternalLink = (url) => {
    trackEvent("click", "external_link", url, 1);
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
    trackEvent("scroll", "engagement", `scroll_${depth}%`, depth);
};
