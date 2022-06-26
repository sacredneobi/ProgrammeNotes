const style = {
  root: { display: "flex" },
  appBar: { zIndex: 1201 },
  login: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
  },
  boxMain: (matches) => {
    return (theme) => ({
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      flexWrap: "nowrap",
      height: "100vh",
    });
  },
};

export default style;
