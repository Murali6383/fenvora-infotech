import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
export function useReveal() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: 0.12 });
    const t = setTimeout(() => document.querySelectorAll('.reveal').forEach((el) => io.observe(el)), 50);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [pathname]);
}
