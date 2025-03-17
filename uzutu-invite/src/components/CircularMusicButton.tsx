import { useState, useEffect } from "react";
import { Howl } from "howler";

export default function CircularMusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [howl, setHowl] = useState<Howl | null>(null);

  useEffect(() => {
    const sound = new Howl({
      src: ["/audio/amre.mp3"], // Replace with your actual file
      autoplay: false,
      loop: true,
      volume: 0.5,
    });

    setHowl(sound);

    return () => {
      sound.unload(); // Proper cleanup
    };
  }, []);

  const toggleMusic = () => {
    if (!howl) return;
    if (isPlaying) {
      howl.stop();
    } else {
      howl.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative flex items-center justify-center w-24 h-24">
      {/* Rotating Circular Text */}
      <svg
        className="absolute w-32 h-32 animate-spin-slow"
        viewBox="0 0 100 100"
      >
        <path
          id="circlePath"
          d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
          fill="none"
        />
        <text className="text-[7px] uppercase font-bold">
          <textPath href="#circlePath" startOffset="50%">
            🎶 Music • Music • Music •
          </textPath>
        </text>
      </svg>

      {/* Play/Pause Button */}
      <button
        onClick={toggleMusic}
        className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold shadow-lg transition-transform active:scale-90"
      >
        {isPlaying ? "⏸️" : "▶️"}
      </button>
    </div>
  );
}
