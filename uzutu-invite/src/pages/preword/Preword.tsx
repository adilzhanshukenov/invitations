import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Preword = () => {
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
      <h1>ҚЫЗ ҰЗАТУ</h1>

      <br />

      <h2 className="text-2xl">
        Құрметті қонақтар! <br />
        Сіздерді аяулы қызымыз
      </h2>

      <br />
      <br />
      <motion.h2
        ref={ref}
        className="text-2xl top-word"
        initial={{ opacity: 0, x: 50 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Мерейдің
      </motion.h2>

      <br />

      <h2 className="text-2xl">
        Ұзату тойына <br /> арналған салтанатты <br /> ақ дастарханымздың <br />
        қадірлі қонағы болуға <br /> шақырамыз!
      </h2>

      <img src="/images/flower1.png" alt="white flower" className="w-64 h-64" />

      <br />
    </div>
  );
};

export default Preword;
