import { motion } from "framer-motion";
import reactLogo from "../../assets/react.svg";

const ToiIeleri = () => {
  return (
    <div>
      <div className="absolute flex items-center justify-center top-330 -left-30 p-10px">
        <motion.img
          src={reactLogo}
          alt="Background"
          className="w-96 h-96 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </div>
      <h2 className="top-word">Той иелері</h2>
      <h2>ҚАНАТ</h2>
    </div>
  );
};

export default ToiIeleri;
