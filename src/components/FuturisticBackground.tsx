import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import './FuturisticBackground.css';

const FuturisticBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
  }>>([]);
  const isVisibleRef = useRef(true);
  const isMobileRef = useRef(false);

  // Detect mobile devices and performance
  const deviceCapabilities = useMemo(() => {
    if (typeof window === 'undefined') return { isMobile: false, isLowEnd: false };
    
    const width = window.innerWidth;
    const isMobile = width < 768;
    const isTablet = width >= 768 && width < 1024;
    
    // Detect low-end devices
    const isLowEnd = (
      isMobile && (
        // Check for limited memory (if available)
        (navigator as any).deviceMemory < 4 ||
        // Check for slow connection
        (navigator as any).connection?.effectiveType === '2g' ||
        (navigator as any).connection?.effectiveType === '3g' ||
        // Check for save-data preference
        (navigator as any).connection?.saveData === true
      )
    );

    return { isMobile, isTablet, isLowEnd };
  }, []);

  // Ultra-conservative particle count for mobile
  const particleCount = useMemo(() => {
    const { isMobile, isTablet, isLowEnd } = deviceCapabilities;
    
    if (isLowEnd) return 3; // Very low-end mobile devices
    if (isMobile) return 5; // Regular mobile devices
    if (isTablet) return 8; // Tablets
    return 12; // Desktop - further reduced
  }, [deviceCapabilities]);

  // Check if user prefers reduced motion
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // Check if we should disable animations entirely on mobile
  const shouldDisableAnimations = useMemo(() => {
    const { isMobile, isLowEnd } = deviceCapabilities;
    return prefersReducedMotion || isLowEnd || (isMobile && particleCount <= 3);
  }, [prefersReducedMotion, deviceCapabilities, particleCount]);

  // Intersection Observer for visibility with longer root margin for mobile
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { 
        threshold: 0.1,
        rootMargin: deviceCapabilities.isMobile ? '100px' : '50px' // Larger margin for mobile
      }
    );

    const canvas = canvasRef.current;
    if (canvas) {
      observer.observe(canvas);
    }

    return () => {
      if (canvas) {
        observer.unobserve(canvas);
      }
    };
  }, [deviceCapabilities.isMobile]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Use lower resolution on mobile for better performance
    const dpr = deviceCapabilities.isMobile ? Math.min(window.devicePixelRatio || 1, 1.5) : window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (ctx) {
      ctx.scale(dpr, dpr);
    }
    
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
  }, [deviceCapabilities.isMobile]);

  useEffect(() => {
    // Disable animations entirely for low-end devices or when motion is reduced
    if (shouldDisableAnimations) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true, // Better performance on mobile
      powerPreference: 'low-power' // Battery optimization
    }) as CanvasRenderingContext2D;
    if (!ctx) return;

    isMobileRef.current = deviceCapabilities.isMobile;
    resizeCanvas();

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, deviceCapabilities.isMobile ? 500 : 250);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Initialize particles with mobile-optimized distribution
    const initParticles = () => {
      const rect = canvas.getBoundingClientRect();
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        vx: (Math.random() - 0.5) * (deviceCapabilities.isMobile ? 0.1 : 0.2), // Slower on mobile
        vy: (Math.random() - 0.5) * (deviceCapabilities.isMobile ? 0.1 : 0.2),
        size: Math.random() * (deviceCapabilities.isMobile ? 1 : 1.5) + 0.5, // Smaller on mobile
        opacity: Math.random() * 0.15 + 0.05 // Even lower opacity
      }));
    };

    initParticles();

    // Mobile-optimized animation loop
    let lastTime = 0;
    const targetFPS = deviceCapabilities.isMobile ? 15 : 20; // Much lower FPS on mobile
    const frameInterval = 1000 / targetFPS;
    let frameCount = 0;
    const skipFrames = deviceCapabilities.isMobile ? 3 : 2; // Skip more frames on mobile

    const animate = (currentTime: number) => {
      // Early exit if not visible or tab is not active
      if (!isVisibleRef.current || document.hidden) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      if (currentTime - lastTime < frameInterval) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      lastTime = currentTime;
      frameCount++;

      // Skip even more frames on mobile for better performance
      if (frameCount % skipFrames === 0) {
        const rect = canvas.getBoundingClientRect();
        
        // Optimized clearing
        ctx.clearRect(0, 0, rect.width, rect.height);

        // Batch operations for better performance
        ctx.save();
        ctx.fillStyle = '#FFD700';
        
        // Update and draw particles with minimal operations
        for (let i = 0; i < particlesRef.current.length; i++) {
          const particle = particlesRef.current[i];
          
          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Wrap around edges
          if (particle.x < 0) particle.x = rect.width;
          else if (particle.x > rect.width) particle.x = 0;
          if (particle.y < 0) particle.y = rect.height;
          else if (particle.y > rect.height) particle.y = 0;

          // Draw particle with minimal state changes
          ctx.globalAlpha = particle.opacity;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Delay animation start on mobile to ensure page is fully loaded
    const startAnimation = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    if (deviceCapabilities.isMobile) {
      setTimeout(startAnimation, 1000); // 1 second delay on mobile
    } else {
      startAnimation();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, shouldDisableAnimations, deviceCapabilities, resizeCanvas]);

  // Return static version for reduced motion or low-end devices
  if (shouldDisableAnimations) {
    return (
      <div className="futuristic-background">
        {/* Minimal static version */}
        <div className="geometric-shapes">
          <div className="shape shape-1" style={{ 
            animation: 'none',
            opacity: 0.3,
            background: 'linear-gradient(45deg, rgba(255, 215, 0, 0.1) 0%, rgba(255, 165, 0, 0.05) 100%)'
          }}></div>
        </div>
        <div className="gradient-overlay gradient-1" style={{ 
          animation: 'none',
          opacity: 0.2
        }}></div>
      </div>
    );
  }

  return (
    <div className="futuristic-background">
      <canvas
        ref={canvasRef}
        className="background-canvas"
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
          willChange: deviceCapabilities.isMobile ? 'auto' : 'transform',
          touchAction: 'none' // Prevent touch interference on mobile
        }}
        aria-hidden="true"
      />
      
      {/* Simplified geometric shapes - fewer on mobile */}
      <div className="geometric-shapes">
        <div className="shape shape-1"></div>
        {!deviceCapabilities.isMobile && <div className="shape shape-2"></div>}
      </div>

      {/* Single gradient overlay on mobile */}
      <div className="gradient-overlay gradient-1"></div>
    </div>
  );
};

export default React.memo(FuturisticBackground); 