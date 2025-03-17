export default function CircularMusicButton() {
  return (
    <audio autoPlay loop>
      <source src="/your-music-file.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
