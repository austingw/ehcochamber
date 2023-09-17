import formatTime from "@/utils/formatTime";
import {
  ActionIcon,
  Box,
  Flex,
  Group,
  LoadingOverlay,
  Stack,
} from "@mantine/core";
import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import React from "react";
import {
  IconArrowBackUp,
  IconMultiplier05x,
  IconMultiplier15x,
  IconMultiplier1x,
  IconMultiplier2x,
  IconPlayerPause,
  IconPlayerPlay,
  IconPlayerStop,
} from "@tabler/icons-react";

const style = {
  width: "100%",
};

const AudioPlayer = () => {
  // const url =
  //   "https://xntslrrernpkzvgsuipl.supabase.co/storage/v1/object/sign/Audio/oh-my-god-bro-oh-hell-nah-man.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBdWRpby9vaC1teS1nb2QtYnJvLW9oLWhlbGwtbmFoLW1hbi5tcDMiLCJpYXQiOjE2OTQ4MjI0NTQsImV4cCI6MTcyNjM1ODQ1NH0.J7c1JpcJALKKMO-o7AsDlfeMX5gQlco1iensjtjIJ0E&t=2023-09-16T00%3A00%3A54.942Z";

  const url =
    "https://xntslrrernpkzvgsuipl.supabase.co/storage/v1/object/sign/Audio/Two%20Pillars(7).wav?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBdWRpby9Ud28gUGlsbGFycyg3KS53YXYiLCJpYXQiOjE2OTQ5ODU3OTUsImV4cCI6MTcyNjUyMTc5NX0.2jcTsYUzbSXxLKnrxpzgpB0dYxqhVymprddFt80e39g&t=2023-09-17T21%3A23%3A15.979Z";

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState(1);

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

  //Update current time outside of useEffect to prevent re-renders
  wavesurferRef.current?.on("audioprocess", () => {
    setCurrentTime(Number(wavesurferRef.current?.getCurrentTime()));
  });

  const handleSpeedChange = () => {
    switch (speed) {
      case 1:
        setSpeed(1.5);
        wavesurferRef.current?.setPlaybackRate(1.5, false);
        break;
      case 1.5:
        setSpeed(2);
        wavesurferRef.current?.setPlaybackRate(2, false);
        break;
      case 2:
        setSpeed(0.75);
        wavesurferRef.current?.setPlaybackRate(0.75, false);
        break;
      default:
        setSpeed(1);
        wavesurferRef.current?.setPlaybackRate(1);
    }
  };

  console.log("speed", speed);

  return (
    <>
      <Stack
        w={"80vw"}
        pt={20}
        pb={10}
        px={20}
        sx={{
          border: "2px black solid",
          borderRadius: 5,
        }}
      >
        <LoadingOverlay visible={!wavesurferRef.current} />
        <Flex
          direction={"row"}
          align={"center"}
          justify={"flex-start"}
          gap={10}
        >
          {
            //placeholder for optional track art
          }
          <Box
            sx={{
              minWidth: 150,
              minHeight: 150,
              border: "2px black solid",
              borderRadius: 5,
            }}
          />
          <div style={style} id="waveform" ref={waveformRef} />
        </Flex>
        <Flex justify={"space-between"} align={"center"}>
          <Group>
            <ActionIcon
              color="black"
              onClick={() => {
                wavesurferRef.current
                  ?.playPause()
                  .catch((err) => console.error(err));
                togglePlay();
              }}
            >
              {isPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}
            </ActionIcon>
            <ActionIcon
              color="black"
              onClick={() => {
                wavesurferRef.current?.stop();
                setIsPlaying(false);
              }}
            >
              <IconPlayerStop />
            </ActionIcon>
            <ActionIcon
              color="black"
              onClick={() => {
                wavesurferRef.current?.skip(-15);
              }}
            >
              <IconArrowBackUp />
            </ActionIcon>
            <ActionIcon
              color="black"
              onClick={() => {
                handleSpeedChange();
              }}
            >
              {speed === 1 ? (
                <IconMultiplier1x />
              ) : speed === 1.5 ? (
                <IconMultiplier15x />
              ) : speed === 2 ? (
                <IconMultiplier2x />
              ) : (
                <IconMultiplier05x />
              )}
            </ActionIcon>
          </Group>
          {formatTime(currentTime) || 0} /{" "}
          {formatTime(Number(wavesurferRef.current?.getDuration())) || 0}
        </Flex>
      </Stack>
    </>
  );
};

export default AudioPlayer;
