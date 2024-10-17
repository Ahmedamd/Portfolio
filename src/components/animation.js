// src/components/AnimatedSection.js
import React, { useEffect, useRef, useState } from "react";

const AnimatedSection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Section is visible"); // Debugging line
            setIsVisible(true);
            observer.disconnect(); // Stop observing once visible
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`animated-section ${isVisible ? "visible" : ""}`}
      style={{
        opacity: isVisible ? 1 : 0, // Set opacity based on visibility
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)', // Start slightly below
        transition: "opacity 1.5s ease-in-out, transform 1.5s ease-in-out", // Transition for opacity and transform
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
