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
          barWidth: 5,
          barRadius: 5,
          height: 100,
          normalize: true,
        });

        await wavesurferRef.current.load(url);

        return wavesurferRef.current;
      }
    };

    createWaveform()
      .then((wavesurfer) => {
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
      {formatTime(Number(wavesurferRef.current?.getDuration())) || 0}
      <Button
        onClick={() => {
          wavesurferRef.current?.playPause().catch((err) => console.error(err));
          togglePlay();
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </Button>
      <Button
        onClick={() => {
          wavesurferRef.current?.seekTo(0);
          wavesurferRef.current?.pause();
          togglePlay();
        }}
      >
        {"<<"}
      </Button>
      <Button
        onClick={() => {
          wavesurferRef.current?.skip(15);
        }}
      >
        Skip 15 FWD
      </Button>
      <Button
        onClick={() => {
          wavesurferRef.current?.skip(-15);
        }}
      >
        Skip 15 BWD
      </Button>
    </>
  );
};

export default AudioPlayer;
