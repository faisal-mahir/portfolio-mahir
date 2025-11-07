import React, { useState, useEffect, useRef } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  animate?: boolean;
}

// Fix: Add explicit return type to ensure TypeScript infers a tuple, not an array of a union type.
// This correctly types the destructured values in the consuming component.
const useIntersectionObserver = (options: IntersectionObserverInit): [React.Dispatch<React.SetStateAction<HTMLElement | null>>, IntersectionObserverEntry | undefined] => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [node, setNode] = useState<HTMLElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setEntry(entry);
        // We only want to trigger the animation once
        if (node) observer.current?.unobserve(node);
      }
    }, options);

    const { current: currentObserver } = observer;
    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, options]);

  return [setNode, entry];
};

export const Section: React.FC<SectionProps> = ({ id, title, children, animate = false }) => {
  const [ref, entry] = useIntersectionObserver({ threshold: 0.1 });
  // Fix: With the hook's return type fixed, 'entry' is correctly typed, resolving the error on 'isIntersecting'.
  const isVisible = !!entry?.isIntersecting;

  const animationClasses = animate ? `fade-in-section ${isVisible ? 'is-visible' : ''}` : '';

  return (
    // Fix: The `ref` from the hook is a callback ref. The incorrect cast to `RefObject` is removed to fix the type error.
    <section id={id} className={`py-8 ${animationClasses}`} ref={ref}>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-100 uppercase tracking-wider mb-8 md:mb-12 relative">
        {title}
        <span className="absolute -bottom-2 left-0 h-1 w-20 bg-cyan-400"></span>
      </h2>
      {children}
    </section>
  );
};
