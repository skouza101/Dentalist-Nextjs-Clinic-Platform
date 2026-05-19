'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ClientInitializer() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    // Import bootstrap JS on the client side only
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JS bundle loaded successfully');
      })
      .catch((err) => {
        console.error('Error loading Bootstrap JS bundle:', err);
      });
  }, []);

  return null;
}
