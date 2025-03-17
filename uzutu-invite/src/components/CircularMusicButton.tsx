export default function CircularMusicButton() {
  return (
    <audio autoPlay loop>
      <source src="/audio/amre.mp3" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}
