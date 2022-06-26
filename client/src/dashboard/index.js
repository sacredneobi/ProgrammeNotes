import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAccessGet } from "@api/";
import { correctRouter } from "@utils";
import { BrowserRouter } from "react-router-dom";

import {
  Drawer,
  IconButton,
  Text,
  Box,
  AppBar,
  Toolbar,
  CssBaseline,
  Navigation,
  // ContentRouter,
} from "@components";
import style from "./style";

export default function MiniDrawer(props) {
  const { pages = [], login } = props;

  const Login = login;

  const [isAuth, setIsAuth] = useState(false);
  const [access, setAccess] = useState(null);
  const [route, setRoute] = useState([]);
  const [routeSetting, setRouteSetting] = useState([]);
  const [callbackAccess, loading] = useAccessGet();

  useEffect(() => {
    if (access) {
      setRoute(access.route ? correctRouter(access.route, pages) : []);
      setRouteSetting(
        access.routeSetting ? correctRouter(access.routeSetting, pages) : []
      );
    }
  }, [access]);

  useEffect(() => {
    callbackAccess(setAccess);
  }, []);

  const [open, setOpen] = React.useState(true);
  const { t } = useTranslation();

  const handleDrawerOpen = () => {
    setOpen((prev) => !prev);
  };

  if (loading) return <div style={style}>LOADING...</div>;

  return (
    <Box sx={style.root}>
      {isAuth ? (
        <BrowserRouter>
          <CssBaseline />
          <AppBar position="fixed" sx={style.appBar}>
            <Toolbar>
              <IconButton
                onClick={handleDrawerOpen}
                textIcon="home"
                name={t("dashboard.menu")}
              />
              <Text variant="h6" caption={t("dashboard.menu")} />
            </Toolbar>
          </AppBar>
          <Drawer open={open}>
            <Toolbar />
            <Navigation items={route} />
            <Navigation items={routeSetting} fixedBottom />
          </Drawer>
          {/* <Box component="main" sx={style.boxMain(true)}>
            <ContentRouter routers={[...route, ...routeSetting]} />
          </Box> */}
        </BrowserRouter>
      ) : (
        <Box component="main" sx={style.login}>
          <Login setIsAuth={setIsAuth} />
        </Box>
      )}
    </Box>
  );
}
