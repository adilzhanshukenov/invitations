import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Invite = () => {
  const [scrollDir, setScrollDir] = useState("down");
  const controls = useAnimation();
  const imgControls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setScrollDir(window.scrollY > lastScrollY ? "down" : "up");
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, x: 0, y: 0 });
      imgControls.start({ opacity: 1, x: 0, y: 0 });
    } else {
      controls.start({
        opacity: 0,
        x: scrollDir === "down" ? 200 : -200,
        y: 0,
      });
      imgControls.start({
        opacity: 0,
        x: scrollDir === "down" ? 200 : -200,
        y: 0,
      });
    }
  }, [inView, scrollDir, controls, imgControls]);
  return (
    <div className="relative">
      <motion.h1
        ref={ref}
        className="text-2xl italic custom-text"
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeIn" }}
      >
        13.06.2025
      </motion.h1>
      <motion.label
        ref={ref}
        className="text-4xl italic custom-text"
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeIn" }}
      >
        17:00
      </motion.label>
    </div>
  );
};

export default Invite;
