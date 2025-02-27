
import { useState, useEffect, useRef, RefObject } from 'react';

interface UseElementOnScreenOptions {
  rootMargin?: string;
  threshold?: number;
  once?: boolean;
}

export function useElementOnScreen<T extends HTMLElement = HTMLDivElement>(
  options: UseElementOnScreenOptions = {}
): [RefObject<T>, boolean] {
  const { rootMargin = '0px', threshold = 0.1, once = false } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<T>(null);

  useEffect(() => {
    if (isVisible && once) {
      return undefined;
    }

    const element = elementRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once, isVisible]);

  return [elementRef, isVisible];
}
