import "./style.css";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Address = () => {
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
    <div
      className="p-8 relative bg-green-700 opacity-100 text-white flex flex-col justify-center items-center"
      id="address"
    >
      <br />

      <motion.h2
        ref={ref}
        style={{ color: "white" }}
        className="text-2xl top-word "
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Мекен - жайымыз:
      </motion.h2>

      <motion.h3
        ref={ref}
        className="text-2xl text-bold"
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        КӨКШЕТАУ ҚАЛАСЫ, <br /> Т.СУЛЕЙМЕНОВ К-СІ, 33в <br />
        "ЕРЖАН" <br /> МЕЙРАМХАНАСЫ
      </motion.h3>
      <br />
      <motion.h3
        ref={ref}
        className="text-2xl"
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Жетуге ыңғайлы болу үшін төмендегі 2ГИС сілтемесін қолданыңыз:
      </motion.h3>
      <br />
      <a href="https://go.2gis.com/EAl4S" target="_blank">
        <div className="flex flex-row gap-5 w-64 h-12 items-center bg-white rounded-r-2xl pr-10 cursor-pointer">
          <img
            src="/images/2gis.png"
            className="h-16 w-16 cursor-pointer"
            alt="2gis icon"
          />
          <a
            className="text-base"
            href="https://go.2gis.com/EAl4S"
            target="_blank"
          >
            2ГИС картасын ашу
          </a>
        </div>
      </a>
      <br />
    </div>
  );
};

export default Address;
