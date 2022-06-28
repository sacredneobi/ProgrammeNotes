import { useState } from "react";
import {
  TextField,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";
import { useAuth } from "@api";
import { Button, Box } from "@components";
import image from "../../static/images/123.jpg";

const Default = (props) => {
  // const { setIsAuth } = props;

  const [data, setData] = useState(null);
  const [callbackAuth, loading] = useAuth();

  if (data?.isAuth) {
    localStorage.setItem("JWT", data.accessToken);
  }

  return (
    <Card sx={{ maxWidth: 500, width: "100%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Введите учетные данные
        </Typography>
      </CardContent>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3, margin: 2 }}>
        <TextField
          id="login"
          label="Login"
          fullWidth
          variant="standard"
          disabled={loading}
        />
        <TextField
          id="password"
          label="password"
          type="password"
          fullWidth
          variant="standard"
          disabled={loading}
        />
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 0,
          }}
        >
          <Button variant="contained" color="error" disabled={loading}>
            Sing-in
          </Button>
          <Button
            variant="contained"
            disabled={loading}
            onClick={() => {
              callbackAuth(setData, { login: "login", password: "password" });
              // setIsAuth(true);
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default Default;
