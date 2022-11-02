import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver(
  options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px",
  }
) {
  const containerRef = useRef(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  return [containerRef, isIntersecting];
}
