import { type RefObject, useEffect, useRef } from "react";
import WaveSurfer from "wavesurfer.js";
import React from "react";

const style = {
  width: "100%",
  height: "100%",
  backgroundColor: "#333",
};

interface WaveformProps {
  url: string;
  isPlaying: boolean;
  audioRef?: RefObject<HTMLAudioElement>;
}

const Waveform = React.memo(({ url, isPlaying, audioRef }: WaveformProps) => {
  const waveformRef = useRef<string | HTMLElement>("");

  useEffect(() => {
    const createWaveform = async () => {
      const wavesurfer = WaveSurfer.create({
        container: waveformRef.current,
        duration: audioRef?.current?.duration,
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
      if (current && current.innerHTML) {
        current.innerHTML = "";
      }
    };
  }, [url, isPlaying, audioRef]);

  return (
    <>
      <div style={style} id="waveform" ref={waveformRef} />
    </>
  );
});

Waveform.displayName = "Waveform";

export default Waveform;
