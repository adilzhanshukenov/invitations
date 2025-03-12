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
      <h1>ҚЫЗ УЗАТУ</h1>

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
        initial={{ opacity: 0, x: 100 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Мерейдің
      </motion.h2>

      <br />

      <h2 className="text-2xl">
        Ұзату тойына <br /> арналған салтанатты <br /> ақ дастарханымздың <br />
        қадірлі қонағы болуға <br /> шақырамыз!
      </h2>

      <img
        ref={ref}
        src="images/flower2.png"
        alt="Flower"
        style={{
          width: "80%",
          zIndex: "20",
          height: "30%",
          borderRadius: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <br />

      <motion.h2
        ref={ref}
        className="text-2xl top-word mt-20"
        initial={{ opacity: 0, x: 200 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Той салтанаты
      </motion.h2>

      {/* Картинка, выезжающая вместе с текстом */}
      <motion.img
        ref={ref}
        src="images/main2.jpg"
        alt="Wedding"
        style={{
          width: "50%",
          zIndex: "20",
          height: "50%",
          borderRadius: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="w-64 h-64 mr-auto ml-auto"
        initial={{ opacity: 0, x: 200 }}
        animate={imgControls}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
      <br />
      <motion.h1
        ref={ref}
        className="text-2xl"
        initial={{ opacity: 0, x: 200 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        13.06.2025
      </motion.h1>
      <motion.label
        ref={ref}
        className="text-4xl"
        initial={{ opacity: 0, x: 200 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        18:00
      </motion.label>
    </div>
  );
};

export default Invite;
