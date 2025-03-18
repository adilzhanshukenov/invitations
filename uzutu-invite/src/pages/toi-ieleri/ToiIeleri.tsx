import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ToiIeleri = () => {
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
    <div className="p-40px">
      <br />
      <br />
      <br />
      <h2 className="top-word">Той иесі</h2>
      <motion.h3
        ref={ref}
        className="text-4xl mt-20"
        initial={{ opacity: 0, x: 200 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        ҚАНАТ
      </motion.h3>
      <br />
    </div>
  );
};

export default ToiIeleri;
