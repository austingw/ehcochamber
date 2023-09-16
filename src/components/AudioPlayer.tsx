import formatTime from "@/utils/formatTime";
import { Button } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import Waveform from "./Waveform";
import { api } from "@/utils/api";

const AudioPlayer = () => {
  const url =
    "https://xntslrrernpkzvgsuipl.supabase.co/storage/v1/object/sign/Audio/oh-my-god-bro-oh-hell-nah-man.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBdWRpby9vaC1teS1nb2QtYnJvLW9oLWhlbGwtbmFoLW1hbi5tcDMiLCJpYXQiOjE2OTQ4MjI0NTQsImV4cCI6MTcyNjM1ODQ1NH0.J7c1JpcJALKKMO-o7AsDlfeMX5gQlco1iensjtjIJ0E&t=2023-09-16T00%3A00%3A54.942Z";

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

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };
  const handleAudioEnd = () => {
    setIsPlaying(false);
  };
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
      <Waveform url={url} isPlaying={isPlaying} audioRef={audioRef} />
      {formatTime(duration)}
      <Button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</Button>
    </>
  );
};

export default AudioPlayer;
