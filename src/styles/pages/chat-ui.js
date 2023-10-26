export const styles = {
  // ImageInput --------------------------------------
  body: (theme) => ({ display: "flex", height: "100%" }),
  sideContainer: (theme) => ({
    display: { xs: "none", md: "flex" },
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }),
  title: (theme) => ({
    fontSize: "30px",
    fontWeight: "bold",
  }),
  messagesContainer: {
    gridArea: "1 / 3 / 7 / 9",
    height: "75%",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "5px",
    border: "3px solid #fff",
    overflow: "scroll",
    scrollBehavior: "smooth",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    p: 1,
  },
  imageAudioWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  parent: {
    height: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
    height: "100%",
  },
};
