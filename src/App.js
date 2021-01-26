import React, { useLayoutEffect, useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { EthereumApi } from "./userDataFunctions";
import MainApp from "./mainApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#B01F2C",
    },
    borderColors: {
      main: "#32ADCF",
    },
  },
});

function App() {
  React.useEffect(() => {
    EthereumApi();
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    console.log("window.location.href", window.location.href);
    if (window.location.href.includes("?ref=")) {
      let getAddress = window.location.href.split("?ref=")[1];
      let final = getAddress.slice(0, 42);
      console.log("ref", final);
      localStorage.setItem("_ChargeV2_REF_ADD", final);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <MainApp />
          </Router>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
