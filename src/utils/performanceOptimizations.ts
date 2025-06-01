// Performance optimization utilities

// Debounce function for scroll events
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Throttle function for high-frequency events
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(null, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Intersection Observer for lazy loading
export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options?: IntersectionObserverInit
): IntersectionObserver | null => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return null;
  }
  
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  });
};

// Preload critical resources
export const preloadCriticalResources = () => {
  // Preload critical fonts
  const fontPreloads = [
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap',
    'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&display=swap'
  ];

  fontPreloads.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = font;
    document.head.appendChild(link);
  });
};

// Error boundary helper
export const logError = (error: Error, errorInfo?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.error('Application Error:', error);
    if (errorInfo) {
      console.error('Error Info:', errorInfo);
    }
  }
  
  // In production, you might want to send this to an error reporting service
  // Example: Sentry, LogRocket, etc.
};

// Performance monitoring
export const measurePerformance = (name: string, fn: () => void) => {
  if (process.env.NODE_ENV === 'development' && 'performance' in window) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} took ${end - start} milliseconds`);
  } else {
    fn();
  }
};

// Check if user has limited bandwidth
export const hasLimitedBandwidth = (): boolean => {
  if (typeof navigator === 'undefined' || !('connection' in navigator)) {
    return false;
  }
  
  const connection = (navigator as any).connection;
  return connection && (
    connection.saveData ||
    connection.effectiveType === 'slow-2g' ||
    connection.effectiveType === '2g' ||
    connection.effectiveType === '3g'
  );
};

// Optimize images based on device capabilities
export const getOptimizedImageUrl = (
  baseUrl: string,
  width: number,
  quality: number = 80
): string => {
  // If the browser supports WebP, use it
  const supportsWebP = (() => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('webp') > -1;
  })();

  // Adjust quality based on connection
  const adjustedQuality = hasLimitedBandwidth() ? Math.min(quality, 60) : quality;
  
  // This is a placeholder - you'd integrate with your image optimization service
  return `${baseUrl}?w=${width}&q=${adjustedQuality}&f=${supportsWebP ? 'webp' : 'jpg'}`;
}; 