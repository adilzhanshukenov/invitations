import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const targetDate = new Date("2025-06-13T18:00:00").getTime(); // Установи нужную дату

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center flex flex-col justify-center items-center text-4xl font-bold p-6 bg-green-700 opacity-100 text-white">
      <br />
      <h3 className="w-90">ТОЙ САЛТАНАТЫНА ДЕЙІН ҚАЛДЫ:</h3>
      <br />
      <div className="flex flex-row justify-center space-x-6">
        <div className="flex flex-col w-20 justify-center">
          {timeLeft.days} <p className="text-sm">күн</p>
        </div>
        <div className="flex flex-col w-20">
          {timeLeft.hours} <p className="text-sm">сағат</p>{" "}
        </div>
        <div className="flex flex-col w-20">
          {timeLeft.minutes} <p className="text-sm">минут</p>{" "}
        </div>
        <div className="flex flex-col w-20">
          {timeLeft.seconds} <p className="text-sm">секунд</p>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
