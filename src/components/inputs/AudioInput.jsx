import React, { useState, useEffect, useRef } from "react";
import MicOutlinedIcon from "@mui/icons-material/MicOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import StopCircleRoundedIcon from "@mui/icons-material/StopCircleRounded";
import Box from "@mui/material/Box";
import Lottie from "lottie-web";
import DeleteIcon from "@mui/icons-material/Delete";
import { styles } from "../../styles/components/inputs.js";
import i18n from "../../locals/i18n";
function AudioInput({ setMessages, themeColor }) {
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  // localization ----------------------------------------------------------
  let locale = i18n.language === "en" ? "en" : "ar";
  // functions ----------------------------------------------------------
  const startRecording = () => {
    setAudioBlob(null);
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        mediaRecorder.current = new MediaRecorder(stream);

        mediaRecorder.current.ondataavailable = (e) => {
          if (e.data.size > 0) {
            audioChunks.current.push(e.data);
          }
        };

        mediaRecorder.current.onstop = () => {
          const blob = new Blob(audioChunks.current, { type: "audio/wav" });
          setAudioBlob(blob);
        };

        mediaRecorder.current.start();
        setRecording(true);
      })
      .catch((error) => console.error("Error accessing microphone:", error));
  };

  const stopRecording = () => {
    if (mediaRecorder.current && recording) {
      mediaRecorder.current.stop();
      setRecording(false);
    }
  };

  const sendVoice = () => {
    setMessages((prev) => {
      return [
        ...prev,
        {
          body: URL.createObjectURL(audioBlob),
          type: "audio",
          owner: "receiver",
          date: new Date(),
        },
      ];
    });

    const timer = setTimeout(() => {
      setMessages((prev) => {
        return [
          ...prev,
          {
            body: "./sender-voice.mp3",
            type: "audio",
            owner: "sender",
            date: new Date(),
          },
        ];
      });
      clearTimeout(timer);
    }, 1000);
    setAudioBlob(null);
  };
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../lottie-files/recording.json"),
    });
  }, [recording]);
  return (
    <Box sx={styles.audioContainer}>
      {recording ? (
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <StopCircleRoundedIcon
            onClick={stopRecording}
            sx={styles.stopRecording}
          />
          <Box
            style={{
              width: "100px",
              height: "34px",
              color: "black",
            }}
            ref={container}
          ></Box>
        </Box>
      ) : (
        <MicOutlinedIcon onClick={startRecording} sx={styles.microphone} />
      )}
      {audioBlob && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <DeleteIcon
            onClick={() => {
              setAudioBlob(null);
            }}
            sx={styles.delete}
          />
          <SendRoundedIcon
            onClick={sendVoice}
            sx={{
              transform: locale == "en" ? "scaleX(1)" : "scaleX(-1)",
              p: 0,
              m: 0,
              color: themeColor,
              fontSize: 30,
              cursor: "pointer",
              "&:hover": {
                opacity: ".5",
              },
              "&.Mui-disabled": {
                opacity: ".4",
              },
            }}
          />
        </Box>
      )}
    </Box>
  );
}

export default AudioInput;
