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
  const waveformRef = useRef<string | HTMLAudioElement>("");

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };
  const handleAudioEnd = () => {
    setIsPlaying(false);
  };
  const handleAudioLoad = () => {
    if (waveformRef.current) setDuration(waveformRef.current.duration);
  };

  useEffect(() => {
    const createWaveform = async () => {
      const wavesurfer = WaveSurfer.create({
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

      await wavesurfer.load(url);

      return wavesurfer;
    };

    createWaveform()
      .then((wavesurfer) => {
        if (isPlaying) {
          wavesurfer.play().catch((err) => console.error(err));
        } else {
          wavesurfer.pause();
        }

        wavesurfer.getCurrentTime();
      })
      .catch((err) => console.error(err));

    const current = waveformRef?.current;

    return () => {
      if (current?.innerHTML) {
        current.innerHTML = "";
      }
    };
  }, [url, isPlaying]);

  return (
    <>
      <div style={style} id="waveform" ref={waveformRef} />
      {formatTime(duration)}
      <Button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</Button>
    </>
  );
};

export default AudioPlayer;
