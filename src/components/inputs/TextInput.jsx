import { styles } from "../../styles/components/inputs.js";
import { useState } from "react";
import i18n from "../../locals/i18n";
import { Box, TextField, InputLabel, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
export default function FormPropsTextFields({ setMessages, themeColor }) {
  // states
  const [message, setMessage] = useState("");
  // localization
  let locale = i18n.language === "en" ? "en" : "ar";
  return (
    <Box sx={styles.textContainer}>
      {/* Message ---------------------------------------------------------------------------------------------------------- */}
      <Box sx={styles.inputWrapper}>
        <TextField
          multiline
          rows={3}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          id="message"
          type="text"
          sx={styles.input}
          variant="outlined"
          value={message}
        />
      </Box>
      {/* Submit ---------------------------------------------------------------------------------------------------------- */}
      <Button
        disabled={!message}
        onClick={() => {
          setMessages((prev) => {
            return [
              ...prev,
              {
                body: message,
                type: "text",
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
                  body: "Hi dude, how's everything going?",
                  type: "text",
                  owner: "sender",
                  date: new Date(),
                },
              ];
            });
            clearTimeout(timer);
          }, 1000);
          setMessage("");
        }}
        type="submit"
        sx={{
          backgroundColor: themeColor,
          "&:hover": {
            backgroundColor: themeColor,
            opacity: ".5",
          },
          "&.Mui-disabled": {
            opacity: ".4",
          },
        }}
      >
        <SendIcon
          sx={{
            color: "#fff",
            transform: locale == "en" ? "scaleX(1)" : "scaleX(-1)",
          }}
        />
      </Button>
    </Box>
  );
}
