import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, type ElementRef } from "react";
import "./marquee.scss";

interface ParallaxProps {
  headerTitle: string;
}

const BASE_VELOCITY = 50; // Adjust velocity (higher value = faster movement)
const ANIMATION_DURATION = 120; // Duration in seconds

function Marquee({ headerTitle }: ParallaxProps) {
  const controls = useAnimation();
  const listRef = useRef<ElementRef<"ul">>(null);

  useEffect(() => {
    let animationInterval: number;

    const startAnimation = () => {
      const increment = -BASE_VELOCITY * ANIMATION_DURATION;

      controls.start({
        x: increment,
        transition: { duration: ANIMATION_DURATION, ease: "linear" },
        onComplete: () => {
          controls.set({ x: 0 });
        },
      });

      animationInterval = window.setInterval(() => {
        controls.start({
          x: increment,
          transition: { duration: ANIMATION_DURATION, ease: "linear" },
        });
      }, ANIMATION_DURATION * 1000);
    };

    startAnimation();

    return () => {
      clearInterval(animationInterval);
      controls.stop();
    };
  }, [controls]);

  return (
    <div className="parallax-text">
      <motion.ul ref={listRef} className="parallax-text__list" animate={controls}>
        {Array.from({ length: 50 }).map((_, idx) => (
          <li key={idx}>
            <h2>{headerTitle}</h2>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Marquee;
