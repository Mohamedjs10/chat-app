import React from "react";
import Box from "@mui/material/Box";

export default function ImageMessage({ msg }) {
  return (
    <Box
      sx={{
        textAlign: msg.owner === "receiver" ? "right" : "left",
      }}
    >
      <img src={msg.body} height="100px"></img>
    </Box>
  );
}
