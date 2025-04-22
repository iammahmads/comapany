import { useRef, useEffect, useState } from "react";

const AnimateOnView = ({ animation, children }) => {
  const ref = useRef();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Entry is fully visible
        if (entry.intersectionRatio === 1) {
          setShouldAnimate(true);
          observer.unobserve(entry.target)
        } 
        // Entry completely out of view
        else if (entry.intersectionRatio === 0) {
          setShouldAnimate(false);
        }
      },
      {
        threshold: [0, 1], // Watch for 0% and 100% visibility
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [shouldAnimate]);

  return (
    <div ref={ref} className={`${shouldAnimate ? animation : ""}`}>
      {children}
    </div>
  );
};

export default AnimateOnView;
