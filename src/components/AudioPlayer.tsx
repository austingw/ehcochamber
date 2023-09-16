import formatTime from "@/utils/formatTime";
import { Button } from "@mantine/core";
import { useEffect, useRef, useState } from "react";

import WaveSurfer from "wavesurfer.js";
import React from "react";

const style = {
  width: "100%",
  height: "100%",
  backgroundColor: "#333",
};

const AudioPlayer = () => {
  const url =
    "https://xntslrrernpkzvgsuipl.supabase.co/storage/v1/object/sign/Audio/oh-my-god-bro-oh-hell-nah-man.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBdWRpby9vaC1teS1nb2QtYnJvLW9oLWhlbGwtbmFoLW1hbi5tcDMiLCJpYXQiOjE2OTQ4MjI0NTQsImV4cCI6MTcyNjM1ODQ1NH0.J7c1JpcJALKKMO-o7AsDlfeMX5gQlco1iensjtjIJ0E&t=2023-09-16T00%3A00%3A54.942Z";

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurferRef = useRef<WaveSurfer>();

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleAudioEnd = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const createWaveform = async () => {
      if (waveformRef.current) {
        wavesurferRef.current = WaveSurfer.create({
          container: waveformRef.current,
          mediaControls: false,
          waveColor: "#eee",
          progressColor: "#0178FF",
          cursorColor: "OrangeRed",
          barWidth: 3,
          barRadius: 3,
          height: 150,
          normalize: true,
        });

        await wavesurferRef.current.load(url);

        return wavesurferRef.current;
      }
    };

    createWaveform()
      .then((wavesurfer) => {
        wavesurfer?.playPause().catch((err) => console.error(err));

        wavesurfer?.on("finish", handleAudioEnd);
      })
      .catch((err) => console.error(err));

    return () => {
      wavesurferRef.current?.destroy();
    };
  }, [url]);

  return (
    <>
      <div style={style} id="waveform" ref={waveformRef} />
      {formatTime(currentTime)} {formatTime(duration)}
      <Button
        onClick={() => {
          wavesurferRef.current?.playPause().catch((err) => console.error(err));
          togglePlay();
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </Button>
    </>
  );
};

export default AudioPlayer;
