import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import ChatUi from "../src/pages/ChatUi.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="app">
          <Routes>
            <Route
              path="/"
              element={
                <ChatUi
                  enTitle="Naseej Chatbot" // default value => "Naseej Chatbot"
                  arTitle="نسيج شات بوت" // default value => "نسيج شات بوت"
                  notificationTone="./notification.wav" // default value => "./notification.wav"
                  popupTone="./popup.mp3" // default value => "./popup.mp3"
                  BubbleIcon={ChatBubbleIcon} // default value => ChatBubbleIcon
                  CloseIcon={CancelPresentationIcon} // default value => CancelPresentationIcon
                  themeColor="#4A55A2" // hexacode color // default => "#4A55A2"
                  senderAvatar="./man.jpg" // default => man.jpg
                  receiverAvatar="./woman.jpg" // default => woman.jpg
                  dir="ltr" // "ltr" | "rtl |"default => "ltr"
                  messageTypes={["text", "image", "audio"]} // default => all
                />
              }
            />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
