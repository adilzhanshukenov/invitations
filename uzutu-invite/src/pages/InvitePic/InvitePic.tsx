import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InvitePic = () => {
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
      <motion.h2
        ref={ref}
        className="text-2xl top-word mt-20"
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeIn" }}
      >
        Той салтанаты
      </motion.h2>

      {/* Картинка, выезжающая вместе с текстом */}
      <motion.img
        ref={ref}
        src="images/main2.jpg"
        alt="Wedding"
        style={{
          width: "200px",
          zIndex: "20",
          height: "350px",
          borderRadius: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="w-64 h-64 mr-auto ml-auto"
        initial={{ opacity: 0, x: 100 }}
        animate={imgControls}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeIn" }}
      />
      <br />
    </div>
  );
};

export default InvitePic;
