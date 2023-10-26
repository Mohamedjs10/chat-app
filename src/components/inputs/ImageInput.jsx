import React, { useState } from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { styles } from "../../styles/components/inputs.js";

function ImageUploader({ setMessages }) {
  // functions
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setMessages((prev) => {
      return [
        ...prev,
        {
          body: URL.createObjectURL(file),
          type: "image",
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
            body: "./woman.jpg",
            type: "image",
            owner: "sender",
            date: new Date(),
          },
        ];
      });
      clearTimeout(timer);
    }, 1000);
  };

  return (
    <div>
      <label for="file-upload" class="custom-file-upload">
        <AttachFileIcon sx={styles.attachment} />
      </label>
      <input
        type="file"
        accept="image/*" // Allow only image files
        onChange={handleImageUpload}
        id="file-upload"
        style={{ display: "none" }}
      />
    </div>
  );
}

export default ImageUploader;
