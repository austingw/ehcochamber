import formatTime from "@/utils/formatTime";
import { Button } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import Waveform from "./Waveform";

const AudioPlayer = () => {
  const url = "https://www.myinstants.com/media/sounds/goofy-ahh-sounds.mp3";

  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!audioRef.current) return;

    const wavesurfer = async () => {
      if (isPlaying) {
        await audioRef?.current?.play();
      } else audioRef?.current?.pause();
    };

    wavesurfer().catch((err) => console.error(err));
  }, [isPlaying, audioRef]);

  const togglePlay = () => setIsPlaying((prev) => !prev);
  const handleAudioEnd = () => setIsPlaying(false);
  const handleAudioLoad = () => {
    if (audioRef.current) setDuration(audioRef.current.duration);
  };

  return (
    <>
      <audio
        src={url}
        ref={audioRef}
        onEnded={handleAudioEnd}
        onLoadedData={handleAudioLoad}
      />
      <Waveform url={url} isPlaying={isPlaying} />
      {formatTime(duration)}
      <Button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</Button>
    </>
  );
};

export default AudioPlayer;
