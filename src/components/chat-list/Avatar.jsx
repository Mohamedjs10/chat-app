import React from "react";
import { styles } from "../../styles/components/chat-list.js";
import Box from "@mui/material/Box";

export default function Avatar({ msg, senderAvatar, receiverAvatar }) {
  return (
    <Box
      component="img"
      sx={styles.avatar}
      src={msg.owner === "receiver" ? senderAvatar : receiverAvatar}
    ></Box>
  );
}
