import { Toolbar } from "@mui/material";

const Default = (props) => {
  const { children, ...other } = props;

  return <Toolbar {...other}>{children}</Toolbar>;
};

export default Default;
