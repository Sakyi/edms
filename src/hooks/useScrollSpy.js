import { useEffect, useState, useRef } from "react";

export const useScrollSpy = (sectionIds, rootMargin = "-20% 0px -70% 0px") => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observers = [];

    const callback = (entries) => {
      entries.forEach((entry) => {
        // If the section is intersecting our "target area"
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    // rootMargin acts like your 'offset'.
    // This example triggers when a section is in the top-middle of the screen.
    const observer = new IntersectionObserver(callback, {
      rootMargin: rootMargin,
      threshold: 0,
    });

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.push(element);
      }
    });

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  return activeSection;
};

export const scrollToSection = (sectionId, offset = 80) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const top = section.offsetTop - offset;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};
