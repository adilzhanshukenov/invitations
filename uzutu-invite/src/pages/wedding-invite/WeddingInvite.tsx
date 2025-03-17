import { motion } from "framer-motion";
import round from "../../assets/round.png";
import Address from "../address/Address";
import ToiIeleri from "../toi-ieleri/ToiIeleri";
import Saualnama from "../saualnama/Saualnama";
import Schedule from "../schedule/Schedule";
import Invite from "../invite/Invite";
import Preword from "../preword/Preword";
import CountdownTimer from "../../components/CountdownTimer";

export default function WeddingInvite() {
  return (
    <div className="relative min-h-screen min-2-screen overflow-hidden bg-gray-100 text-center">
      {/* Вращающийся фон */}
      <div className="absolute flex items-center justify-center top-100 -left-50">
        <motion.img
          src={round}
          alt="Background"
          className="w-96 h-96 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </div>

      <div className="absolute flex items-center justify-center top-200 -right-50">
        <motion.img
          src={round}
          alt="Background"
          className="w-96 h-96 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </div>
      <div className="absolute flex items-center justify-center top-650 -left-50">
        <motion.img
          src={round}
          alt="Background"
          className="w-96 h-96 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </div>
      <div className="absolute flex items-center justify-center top-990 -right-50">
        <motion.img
          src={round}
          alt="Background"
          className="w-96 h-96 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        />
      </div>

      <div className="p-30 relative z-10 flex flex-col items-center justify-center min-h-screen space-y-12">
        {/* Текст, выходящий справа и останавливающийся в центре */}
        <img
          className="rounded-xl"
          style={{ width: "80%", height: "80%" }}
          src="images/main.jpg"
          alt="wedding pic"
        />
      </div>
      <Preword />
      <Invite />
      <Schedule />
      <Address />
      <ToiIeleri />
      <Saualnama />
      <CountdownTimer />
    </div>
  );
}
