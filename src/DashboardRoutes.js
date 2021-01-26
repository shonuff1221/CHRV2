import React, { useLayoutEffect } from "react";
import Layout from "./components/layout/layout";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Stacks from "./components/stacks/stacks";
import Wallet from "./components/wallet";
import Transactions from "./components/transactions";
import WithDraw from "./components/withdraw";
import Referal from "./components/Referral/Referral";

import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Hidden from "@material-ui/core/Hidden";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { FaUsers, FaHandHoldingUsd, FaWallet } from "react-icons/fa";
import { BiTransfer } from "react-icons/bi";
import { MdSecurity, MdSettings, MdAssessment } from "react-icons/md";
import { AiTwotoneFileText } from "react-icons/ai";
import { useHistory, useLocation, Link } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import store from "./redux/store";
// import TronHelper from "./utils/TronHelper";
import { useSelector } from "react-redux";
import { getUserData, TotalRewardsFunction } from "./userDataFunctions";
import { toast } from "react-toastify";
import web3 from "web3";

/**
 * @author
 * @function DashboardRoutes
 **/

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "#222a31 !important",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#222a31",
    boxShadow: "0px 4px 8px #04041747 !important",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,

    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  dashboardBackGroundColor: {
    backgroundColor: "#222a31 !important",
    color: "white",
  },

  DeawerColor: {
    color: "white",
  },
}));

const DashboardRoutes = (props) => {
  const { path } = props.match;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();
  const { pathname } = history.location;
  // const { pathname } = useLocation();
  const matches = useMediaQuery("(max-width:960px)");
  // const [tronWeb, setTronWeb] = React.useState();
  const [lastTronWalletAddress, setTronWalletAddress] = React.useState("");
  const [currentAdd, setCurrentAdd] = React.useState("");
  const getReducer = useSelector((state) => state.UserReducer);
  const {
    isUserAuthenticated,
    metaMaskDecentralized,
    userAccountAddress,
    stakingDcentralized,
  } = getReducer;

  // console.log("here is the address========================>", pathname);

  const links = [
    {
      title: "Dashboard",
      to: "/",
      name: "Dashboard",
      icon: <DashboardIcon fontSize="large" />,
    },
    {
      title: "Stakes",
      to: "/stakes",
      name: "Stakes",
      icon: <MdSecurity style={{ fontSize: "30px" }} />,
      // onClick:()=>history.push('/dashboard/stakes')
    },
    {
      title: "Transactions",
      to: "/transactions",
      name: "Transactions",
      icon: <BiTransfer style={{ fontSize: "30px" }} />,
      // onClick:()=>history.push('/dashboard/stakes')
    },

    {
      title: "Withdraw",
      to: "/withdraw",
      name: "Withdraw",
      icon: <FaHandHoldingUsd style={{ fontSize: "30px" }} />,
      // onClick:()=>history.push('/dashboard/stakes')
    },

    // {
    //   title: "Referrals",
    //   to: "/referrals",
    //   name: "Referrals",
    //   icon: <FaUsers style={{ fontSize: "30px" }} />,
    // },
    {
      title: "Wallet",
      to: "/wallet",
      name: "Wallet",
      icon: <FaWallet style={{ fontSize: "30px" }} />,
      // onClick:()=>history.push('/dashboard/stakes')
    },

    {
      title: "Logout",
      // to: "/dashboard/wallet",
      name: "Logout",
      icon: <ExitToAppIcon style={{ fontSize: "30px" }} />,
      onClick: "",
    },
  ];
  // to="/dashboard/withdraw",

  // , ,,,,

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("_DTL_LOGIN_ADDRESS");
    localStorage.removeItem("ref");
    store.dispatch({
      type: "LOGOUT",
    });
    history.push("/");
    // window.location.reload();
  };

  // useLayoutEffect(() => {
  //   // Ethereum();
  //   async function Ethereum() {
  //     window.ethereum.on("accountsChanged", (accounts) => {
  //       // console.log("here is the new account====>",accounts)
  //       let final = web3.utils.toChecksumAddress(accounts[0]);

  //       if (final) {
  //         if (pathname === "/login") {
  //           console.log("came here==>", final);
  //         } else {
  //           console.log("came here==>", final);
  //           localStorage.setItem("_DTL_LOGIN_ADDRESS", final);
  //         }
  //         store.dispatch({
  //           type: "USER_METAMASK_ACCOUNT",
  //           payload: final,
  //         });
  //       } else {
  //         window.location.reload();
  //         localStorage.removeItem("_DTL_LOGIN_ADDRESS");
  //         store.dispatch({
  //           type: "LOGOUT",
  //         });
  //       }
  //       //   metaMaskDecentralized.methods
  //       //     .refusers(final)
  //       //     .call()
  //       //     .then((val) => {
  //       //       if (val.isExist) {
  //       //         window.location.reload();
  //       //         if (pathname === "/login" || pathname === "/") {
  //       //         } else {
  //       //           localStorage.setItem("_DTL_LOGIN_ADDRESS", final);
  //       //         }
  //       //         store.dispatch({
  //       //           type: "USER_METAMASK_ACCOUNT",
  //       //           payload: final,
  //       //         });
  //       //       } else {
  //       //         toast.error("this user isn't exist!");
  //       //         store.dispatch({
  //       //           type: "USER_METAMASK_ACCOUNT",
  //       //           payload: final,
  //       //         });
  //       //         window.location.reload();
  //       //         localStorage.removeItem("_DTL_LOGIN_ADDRESS");
  //       //         store.dispatch({
  //       //           type: "LOGOUT",
  //       //         });
  //       //       }
  //       //     });
  //       // }
  //     });
  //   }
  // }, []);

  React.useEffect(() => {
    if (isUserAuthenticated) {
      // getUserData(
      //   userAccountAddress,
      //   metaMaskDecentralized,
      //   stakingDcentralized
      // );
      setInterval(() => {
        TotalRewardsFunction(
          userAccountAddress,
          stakingDcentralized,
          metaMaskDecentralized
        );
      }, 5000);
    }
  }, [
    isUserAuthenticated,
    metaMaskDecentralized,
    userAccountAddress,
    stakingDcentralized,
  ]);

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon className={classes.DeawerColor} />
            </IconButton>
            {/* <Typography variant="h6" noWrap>
        Mini variant drawer
      </Typography> */}
            {/* <div style={{ textAlign: "center", width: "100%" }}>
              <img src="/logo.png" style={{ height: 50 }} />
            </div> */}
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx(classes.dashboardBackGroundColor, {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon style={{ color: "white" }} />
              )}
            </IconButton>
          </div>
          <Divider />
          <div style={{ height: "75%" }}>
            <List>
              {links.map((text, index) => (
                <>
                  <Link
                    to={text.to}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <ListItem
                      button
                      key={text.name}
                      onClick={() => text.name === "Logout" && handleLogout()}
                    >
                      <ListItemIcon
                        style={{
                          color: pathname === text.to ? "#08d765" : "white",
                        }}
                      >
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={text.name}
                        style={{
                          color: pathname === text.to ? "#08d765" : "white",
                        }}
                      />
                    </ListItem>
                  </Link>
                  <Divider />
                </>
              ))}
            </List>
          </div>
          <div style={{ textAlign: "center" }}>
            <img
              src="/logo.png"
              style={{ maxWidth: 60, borderRadius: "50%" }}
            />
            <br />
            <span style={{ fontSize: 10 }}>
              &copy; copyright {new Date().getFullYear()}
            </span>
          </div>
        </Drawer>
      </Hidden>
      <main className={classes.content} style={{ width: "100%" }}>
        {matches ? (
          <div
            style={{ textAlign: "center", width: "100%", paddingBottom: 20 }}
          >
            <img src="/logo2.png" style={{ height: 50 }} />
          </div>
        ) : (
          <div className={classes.toolbar} />
        )}
        <Layout>
          <Route exact path="/" component={Dashboard} />
          <Route path="/stakes" component={Stacks} />
          <Route path="/wallet" component={Wallet} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/withdraw" component={WithDraw} />
          <Route path="/referrals" component={Referal} />
        </Layout>
      </main>
    </div>
  );
};

export default DashboardRoutes;
