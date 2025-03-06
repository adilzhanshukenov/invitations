import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import reactLogo from "../../assets/react.svg";
import Address from "../address/Address";
import ToiIeleri from "../toi-ieleri/ToiIeleri";
import Saualnama from "../saualnama/Saualnama";

export default function WeddingInvite() {
  const [scrollDir, setScrollDir] = useState("down");
  const controls = useAnimation();
  const imgControls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

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
    <div className="p-10 relative min-h-screen overflow-hidden bg-gray-100 text-center">
      {/* Вращающийся фон */}
      <div className="absolute flex items-center justify-center -top-50 -left-30">
        <motion.img
          src={reactLogo}
          alt="Background"
          className="w-96 h-96 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </div>

      <div className="absolute flex items-center justify-center top-50 -right-30">
        <motion.img
          src={reactLogo}
          alt="Background"
          className="w-96 h-96 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen space-y-12">
        {/* Текст, выходящий справа и останавливающийся в центре */}

        <img src={reactLogo} />

        <br />
        <br />
        <br />

        <h1 className="top-word">Мерей</h1>

        <motion.h1
          ref={ref}
          className="text-4xl font-bold"
          initial={{ opacity: 0, x: 200 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          Қыз Узату
        </motion.h1>

        <h2>Құрметті қонақтар! Сіздерді аяулы қызымыз</h2>

        <motion.h2
          className="text-2xl top-word"
          initial={{ opacity: 0, x: 200 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Мерейдің
        </motion.h2>

        <h2>
          Ұзату тойына арналған салтанатты ақ дастарханымздың қадірлі қонағы
          болуға шақырамыз!
        </h2>

        <img src={reactLogo} />

        <motion.h2
          className="text-2xl"
          initial={{ opacity: 0, x: 200 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Той салтанаты
        </motion.h2>

        {/* Картинка, выезжающая вместе с текстом */}
        <motion.img
          src="/path-to-your-second-image.jpg"
          alt="Wedding"
          className="w-64 h-64 mt-4"
          initial={{ opacity: 0, x: 200 }}
          animate={imgControls}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
        <img id="calendar" src={reactLogo} />

        <h2 className="top-word">Тойдың бағдарламасы:</h2>

        <img id="zhinaluy" src={reactLogo} />
        <h3>17:00</h3>
        <h3>Қонақтардың жиналуы</h3>
        <img id="foto-sessiya" src={reactLogo} />
        <h3>17:30</h3>
        <h3>Фотосессия, фуршет</h3>
        <img id="toi bastaluy" src={reactLogo} />
        <h3>18:00</h3>
        <h3>Той басталуы</h3>
        <img id="shygaryp salu" src={reactLogo} />
        <h3>23:00</h3>
        <h3>Шығарып салу рәсімі</h3>
        <Address />
        <ToiIeleri />
        <Saualnama />
      </div>
    </div>
  );
}
