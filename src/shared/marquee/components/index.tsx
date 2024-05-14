import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "./marquee.scss";

interface ParallaxProps {
  headerTitle: string;
}

const BASE_VELOCITY = 70; // Adjust velocity (higher value = faster movement)
const ANIMATION_DURATION = 70; // Duration in seconds

function Marquee({ headerTitle }: ParallaxProps) {
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    const animateText = async () => {
      while (isMounted) {
        const increment = -100 * BASE_VELOCITY;

        await controls.start({
          x: increment,
          transition: { duration: ANIMATION_DURATION, ease: "linear" },
        });

        controls.set({ x: 0 });
      }
    };

    animateText();

    return () => {
      isMounted = false;
    };
  }, [controls]);

  return (
    <div className="parallax-text">
      <motion.ul className="parallax-text__list" animate={controls}>
        {Array.from({ length: 70 }).map((_, idx) => (
          <li key={idx}>
            <h2>{headerTitle}</h2>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}

export default Marquee;
