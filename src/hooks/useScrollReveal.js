import { useEffect, useState, useRef } from "react";

export const useScrollReveal = (options = {}) => {
  // Destructure with defaults
  const { threshold = 0.1, rootMargin = "0px" } = options;

  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it's visible, we stop observing to save resources
          observer.unobserve(element); // Fixed typo from 'unobserver'
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      // Always cleanup by unobserving the element
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]); // These should be primitive values to avoid re-runs

  return { ref, isVisible };
};
