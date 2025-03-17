import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Schedule = () => {
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
    <div className="flex flex-col justify-center items-center">
      <br />
      <br />
      <h2 className="text-2xl top-word">Тойдың бағдарламасы:</h2>
      <motion.img
        ref={ref}
        id="location"
        src="/images/location.png"
        alt="Location Icon"
        className="mr-auto ml-auto schedule-icon"
        initial={{ opacity: 0, x: 200 }}
        animate={imgControls}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      <motion.h3
        ref={ref}
        className="text-2xl mt-20"
        initial={{ opacity: 0, x: 200 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        17:00
      </motion.h3>
      <motion.h3
        ref={ref}
        className="text-2xl mt-20"
        initial={{ opacity: 0, x: 200 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        Қонақтардың жиналуы
      </motion.h3>

      <motion.img
        ref={ref}
        id="location"
        src="/images/photographer.png"
        alt="Photographer"
        className="mr-auto ml-auto schedule-icon"
        initial={{ opacity: 0, x: 200 }}
        animate={imgControls}
        transition={{ duration: 0.8, delay: 0.7 }}
      />
      <motion.h3
        ref={ref}
        className="text-2xl mt-20"
        initial={{ opacity: 0, x: 200 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        17:30
      </motion.h3>
      <motion.h3
        ref={ref}
        className="text-2xl mt-20"
        initial={{ opacity: 0, x: 200 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        Фотосессия, фуршет
      </motion.h3>
      <motion.img
        ref={ref}
        id="toi-bastaluy"
        src="/images/dance.png"
        alt="Toi"
        className="mr-auto ml-auto schedule-icon"
        initial={{ opacity: 0, x: 200 }}
        animate={imgControls}
        transition={{ duration: 0.8, delay: 1.0 }}
      />
      <motion.h3
        ref={ref}
        className="text-2xl mt-20"
        initial={{ opacity: 0, x: 200 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        18:00
      </motion.h3>
      <motion.h3
        ref={ref}
        className="text-2xl mt-20"
        initial={{ opacity: 0, x: 200 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        Той басталуы
      </motion.h3>
      <motion.img
        ref={ref}
        id="shygaryp-salu"
        src="/images/back-in-time.png"
        alt="Photographer"
        className="mr-auto ml-auto schedule-icon"
        initial={{ opacity: 0, x: 200 }}
        animate={imgControls}
        transition={{ duration: 0.8, delay: 1.3 }}
      />
      <motion.h3
        ref={ref}
        className="text-2xl mt-20"
        initial={{ opacity: 0, x: 200 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        23:00
      </motion.h3>
      <motion.h3
        ref={ref}
        className="text-2xl mt-20"
        initial={{ opacity: 0, x: 200 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        Шығарып салу рәсімі
      </motion.h3>

      <img src="/images/flower3.png" alt="Chris" className="w-64 h-64" />
    </div>
  );
};

export default Schedule;
