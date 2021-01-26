import { Box } from "@material-ui/core";
import React from "react";
import BottomNavigationComponent from "../BottomNavigation";
import Header from "../header/header";
import SubHeader from "../header/sub-header";
import { useHistory } from "react-router-dom";

function Layout(props) {
  const history = useHistory();
  // console.log("here is===>", history.location);
  return (
    <>
      <Box pb={10}>
        {/* <Header /> */}
        <SubHeader />
        {props.children}
      </Box>
      <BottomNavigationComponent />
    </>
  );
}

export default Layout;
