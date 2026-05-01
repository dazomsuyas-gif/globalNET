'use client';

import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 24px;
      height: 24px;
      border: 2px solid #C9A84C;
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
      background: rgba(201, 168, 76, 0.2);
      box-shadow: 0 0 20px rgba(201, 168, 76, 0.5);
      mix-blend-mode: difference;
      @media (max-width: 768px) { display: none; }
    `;
    document.body.appendChild(cursor);

    const mouse = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    const updateCursor = () => {
      cursorPos.x += (mouse.x - cursorPos.x) * 0.15;
      cursorPos.y += (mouse.y - cursorPos.y) * 0.15;
      cursor.style.transform = `translate(${cursorPos.x}px, ${cursorPos.y}px)`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      cursor.classList.add('hover');
      requestAnimationFrame(updateCursor);
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('hover');
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

return () => {
      try {
        if (cursor.parentNode) {
          cursor.parentNode.removeChild(cursor);
        }
      } catch (e) {
        // Element may have already been removed
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return null;
}

