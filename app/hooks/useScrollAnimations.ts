'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function useScrollAnimations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      gsap.to('.scroll-progress', {
        width: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });

      const spotlight = document.querySelector('.spotlight-cursor');
      if (spotlight) {
        window.addEventListener('mousemove', (e) => {
          gsap.to(spotlight, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.8,
            ease: 'power3.out'
          });
        });
      }

      gsap.to('.orb-1', {
        yPercent: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });
      gsap.to('.orb-2', {
        yPercent: -45,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });
      gsap.to('.orb-3', {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true
        }
      });

      const tl = gsap.timeline();
      tl.fromTo('.hero-badge',
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power4.out' }
      )
      .fromTo('.hero-title',
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power4.out' },
        '-=0.6'
      )
      .fromTo('.hero-subtitle',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        '-=0.8'
      )
      .fromTo('.hero-ctas',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo('.hero-stat-card',
        { opacity: 0, scale: 0.9, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'back.out(1.2)' },
        '-=0.5'
      )
      .then(() => {
        gsap.to('.hero-stat-card', {
          y: 'random(-8, 8)',
          rotation: 'random(-1.5, 1.5)',
          duration: 'random(4, 6)',
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: {
            amount: 1.2,
            from: 'random'
          }
        });
      });

      gsap.fromTo('.bento-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: {
            trigger: '.bento-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.bento-card',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.bento-grid',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.brand-showcase-container',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: {
            trigger: '.brand-section',
            start: 'top 75%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.acq-left',
        { opacity: 0, x: -30 },
        {
          opacity: 1, x: 0, duration: 1,
          scrollTrigger: {
            trigger: '.acq-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      gsap.fromTo('.acq-right',
        { opacity: 0, x: 30 },
        {
          opacity: 1, x: 0, duration: 1,
          scrollTrigger: {
            trigger: '.acq-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // clear hash on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
        window.scrollTo(0, 0);
      }
    }
  }, []);

  return { containerRef, heroRef, bentoRef };
}
