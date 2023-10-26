import React from "react";
import Box from "@mui/material/Box";
import i18n from "../../locals/i18n";
import { dateGenerator, timeGenerator } from "../../utils/timeStampGenerator";
export default function TextMessage({ msg }) {
  // localization ----------------------------------------------------------
  let locale = i18n.language === "en" ? "en" : "ar";
  // -----------------------------------------------------------------------

  let textAlign;
  if (locale == "en") {
    textAlign = msg.owner === "receiver" ? "right" : "left";
  }
  if (locale == "ar") {
    textAlign = msg.owner === "sender" ? "right" : "left";
  }

  return (
    <Box>
      <Box
        dir="auto"
        sx={{
          p: 1,
          borderRadius: "5px",
          border: "1px solid white",
          bgcolor: msg.owner === "receiver" ? "#FCFFB2" : "#ACFADF",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          wordBreak: "break-all",
          whiteSpace: "pre-wrap	",
        }}
      >
        {msg.body}
      </Box>
      <Box
        dir="auto"
        sx={{
          px: 1,
          pt: 1,
          fontSize: "10px",
          fontWeight: "bold",
          textAlign: textAlign,
        }}
      >
        {dateGenerator(msg.date, locale == "en" ? "en" : "ar")}
      </Box>
      <Box
        dir="auto"
        sx={{
          px: 1,
          fontSize: "10px",
          fontWeight: "bold",
          textAlign: textAlign,
        }}
      >
        {timeGenerator(msg.date, locale == "en" ? "en" : "ar")}
      </Box>
    </Box>
  );
}
