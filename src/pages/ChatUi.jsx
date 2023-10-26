import { useState, useEffect, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../locals/i18n";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import TextInput from "../components/inputs/TextInput.jsx";
import AudioInput from "../components/inputs/AudioInput.jsx";
import ImageInput from "../components/inputs/ImageInput.jsx";
import Avatar from "../components/chat-list/Avatar.jsx";
import TextMessage from "../components/chat-list/TextMessage.jsx";
import ImageMessage from "../components/chat-list/ImageMessage.jsx";
import AudioMessage from "../components/chat-list/AudioMessage.jsx";
import { styles } from "../styles/pages/chat-ui.js";

export default function ProductDetails({
  notificationTone = "./notification.wav",
  themeColor = "#4A55A2",
  popupTone = "./popup.mp3",
  BubbleIcon = ChatBubbleIcon,
  CloseIcon = CancelPresentationIcon,
  senderAvatar = "./man.jpg",
  receiverAvatar = "./woman.jpg",
  dir = "ltr",
  enTitle = "Naseej Chatbot",
  arTitle = "نسيج شات بوت",
  messageTypes = ["text", "image", "audio"],
}) {
  // const -------------------------------------------------------------
  const bubbleTone = new Audio(popupTone);
  const messageTone = new Audio(notificationTone);

  // functions -------------------------------------------------------------
  const handleOpen = () => {
    setIsOpen(true);
    bubbleTone.play();
  };
  const handleClose = () => {
    setIsOpen(false);
    bubbleTone.play();
    setMessages([]);
  };

  // states ----------------------------------------------------------------
  const [messages, setMessages] = useState([]);
  const [interacted, setInteracted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // localization ----------------------------------------------------------
  const { t } = useTranslation();
  let locale = i18n.language === "en" ? "en" : "ar";
  // side effects ----------------------------------------------------------
  useLayoutEffect(() => {
    dir == "ltr" ? i18n.changeLanguage("en") : i18n.changeLanguage("ar");
  }, [dir]);
  useEffect(() => {
    if (isOpen) {
      var objDiv = document.getElementById("scroll");
      objDiv.scrollTop = objDiv.scrollHeight;
      if (interacted && messages[messages.length - 1]?.owner === "sender") {
        messageTone.play();
      }
    }
  }, [messages]);
  // return ----------------------------------------------------------------
  return (
    // <Box sx={styles.body} dir={direction}>
    <Box sx={styles.body} dir={locale == "en" ? "ltr" : "rtl"}>
      <Box sx={styles.sideContainer}>
        <Box component="p" sx={styles.title}>
          {locale == "en" ? enTitle : arTitle}
        </Box>
        <img src="./customer-service.png" width="300px" />
      </Box>
      <Box
        onClick={() => {
          setInteracted(true);
        }}
        sx={{ ...styles.parent, bgcolor: `${themeColor}50` }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 1,
          }}
        >
          {isOpen ? (
            <>
              <p>{t("close")}</p>
              <CloseIcon
                className="animated"
                sx={{
                  color: themeColor,
                  fontSize: "40px",
                  cursor: "pointer",
                }}
                onClick={handleClose}
              />
            </>
          ) : (
            <>
              <p>{t("open")}</p>
              <BubbleIcon
                className="animated"
                sx={{
                  color: themeColor,
                  fontSize: "40px",
                  cursor: "pointer",
                }}
                onClick={handleOpen}
              />
            </>
          )}
          <Button
            sx={{
              width: "10px",
              border: `3px solid ${themeColor}`,
              bgcolor: "#fff",
              color: themeColor,
              fontWeight: "bold",
              borderRadius: "5px",
              "&:hover": {
                border: `3px solid ${themeColor}`,
                bgcolor: "#fff",
              },
            }}
            variant="outlined"
            onClick={() => {
              locale == "en"
                ? i18n.changeLanguage("ar")
                : i18n.changeLanguage("en");
            }}
          >
            {t("button")}
          </Button>
        </Box>

        {isOpen && (
          <>
            <Box id="scroll" sx={styles.messagesContainer}>
              {messages.map((msg, index) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection:
                      msg.owner === "receiver" ? "row-reverse" : "row",
                    gap: 1,
                  }}
                >
                  <Avatar
                    msg={msg}
                    senderAvatar={senderAvatar}
                    receiverAvatar={receiverAvatar}
                  />
                  {msg.type === "text" && <TextMessage msg={msg} key={index} />}
                  {msg.type === "image" && (
                    <ImageMessage msg={msg} key={index} />
                  )}
                  {msg.type === "audio" && (
                    <AudioMessage msg={msg} key={index} />
                  )}
                </Box>
              ))}
            </Box>
            <Box sx={styles.imageAudioWrapper}>
              {messageTypes?.includes("image") && (
                <ImageInput setMessages={setMessages}></ImageInput>
              )}
              {messageTypes?.includes("audio") && (
                <AudioInput setMessages={setMessages} themeColor={themeColor} />
              )}
            </Box>
            {messageTypes?.includes("text") && (
              <TextInput
                messages={messages}
                setMessages={setMessages}
                themeColor={themeColor}
              ></TextInput>
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
