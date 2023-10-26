export const styles = {
  // AudioInput -------------------------------------
  audioContainer: (theme) => ({
    display: "flex",
    justifyContent: "flexStart",
    alignItems: "center",
  }),
  stopRecording: (theme) => ({
    fontSize: 30,
    color: "red",
    cursor: "pointer",
  }),
  microphone: (theme) => ({
    fontSize: 30,
    cursor: "pointer",
  }),
  delete: (theme) => ({
    p: 0,
    m: 0,
    fontSize: 30,
    cursor: "pointer",
    color: "#f45050",
  }),
  // TextInput --------------------------------------
  textContainer: (theme) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 3,
  }),
  inputWrapper: (theme) => ({
    flex: "2 1 auto",
    width: "100%",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  }),
  input: (theme) => ({
    width: "100%",
    bgcolor: "#fff",
    borderRadius: 2,
    "& p": {
      bgcolor: "white",
      m: 0,
    },
    "& fieldset": {
      borderRadius: 2,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#808080",
      },
    },
  }),
  // ImageInput --------------------------------------
  attachment: (theme) => ({ fontSize: 30, "&:hover": { cursor: "pointer" } }),
};
