import React from "react";
import Box from "@mui/material/Box";

export default function AudioMessage({ msg }) {
  return (
    <Box
      sx={{
        textAlign: msg.owner === "receiver" ? "right" : "left",
        display: "flex",
        alignItems: "center",
      }}
    >
      <audio controls src={msg.body} />
    </Box>
  );
}
