import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver(
  options = {
    root: null,
    threshold: 0.9,
    rootMargin: "0px",
  }
) {
  const containerRef = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);

      // If the element is intersected, stop observing it
      if (entry.isIntersecting && containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return [containerRef, isIntersecting];
}
