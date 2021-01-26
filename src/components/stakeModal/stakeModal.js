import React from "react";
import {
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  Grid,
  IconButton,
  TextField,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import clsx from "clsx";
import TronHelper from "../../utils/TronHelper";
import { StakeToken } from "../../userDataFunctions";
// import { environment } from "../../environment";
import FormHelperText from "@material-ui/core/FormHelperText";
// import FormControl from '@material-ui/core/FormControl';
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import { useSelector } from "react-redux";
import { contractAddress } from "../../utils/constants";
import { toast } from "react-toastify";

// import {useStyles} from './styles';
const useStyles = makeStyles((theme) => ({
  select: {
    color: "#fff !important",
    "& .stakeContainerCheck": {
      color: "#fff !important",
    },
    "& .stakeContainerCheck .MuiSelect-select.MuiSelect-select": {
      color: "#fff !important",
    },
    "& .MuiSelect-select.MuiSelect-select": {
      color: "#fff !important",
    },
    "& .MuiSelect-select": {
      color: "#fff !important",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3),
    maxHeight: 450,
    maxWidth: 900,
    borderRadius: 20,
    backgroundSize: "cover",
    backgroundColor: "#222A31",
  },
  btn: {
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  formField: {
    width: "100%",
    color: "#1282C2",
    backgroundColor: "rgba(57,55,62,1)",
    borderColor: "#19C6C7",
    "&:focus": {
      borderColor: "#19C6C7",
    },
    "& .MuiInputBase-input": {
      color: "#fff",
    },
    "& .MuiFormLabel-root": {
      color: "#fff !important",
    },
  },
  float: {},
  clearBtn: {
    backgroundColor: "#D33949",
    color: "white",
    borderRadius: 20,
    marginTop: 10,
    float: "right",
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
    "&:hover": {
      backgroundColor: "#D33949",
    },
  },
  withDrawBtn: {
    background: "linear-gradient(90deg, #08d765 10%, #08d765 90%)",
    backgroundSize: "200% 100%",
    width: 150,
    color: "white",
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 10,
    paddingRight: 5,
    float: "right",
    "&:focus": {
      outline: "none",
      boxShadow: "none",
    },
  },
}));

export default function StakPopup({ handleUpdateValues, handleClose, open }) {
  const classes = useStyles();
  const [numberOfTokens, setNumberOfTokens] = React.useState("");
  const [getDate, setGetDate] = React.useState("");
  const [loader, setLoader] = React.useState(false);

  const getReducer = useSelector((state) => state.UserReducer);

  const {
    metaMaskDecentralized,
    userAccountAddress,
    oneTokenPrice,
    eatherInUsdt,
    stakingDcentralized,
  } = getReducer;

  // console.log("here is the contract---->", metaMaskDecentralized);

  const closeTheModal = (isTrue) => {
    if (isTrue) {
      handleClose();
    }
  };

  const ManageLoader = (isFalse) => {
    setLoader(isFalse);
  };

  const BuyTokenFunction = async () => {
    if (numberOfTokens === "" || getDate === "") {
    } else {
      setLoader(true);
      if (metaMaskDecentralized && stakingDcentralized && userAccountAddress) {
        // let amount = parseInt(
        //   (1 / eatherInUsdt) * oneTokenPrice * numberOfTokens
        // );
        let final = JSON.stringify(numberOfTokens * 1000000000);

        // let tronValue = await tokenTOTron();

        let contract = await window?.tronWeb?.contract().at(contractAddress);

        contract
          .invest(numberOfTokens * 1000000, getDate)
          .send({
            feeLimit: 100000000,
            shouldPollResponse: true,
          })
          .then((output) => {
            handleUpdateValues();
            localStorage.setItem("reload", true);
            console.log("- Output:", output, "\n");
            setLoader(false);
            toast.success("Your transaction has been confirmed");
            handleClose();
          })
          .catch((e) => {
            toast.error(e.message);

            handleUpdateValues();
            localStorage.setItem("reload", true);
            console.log("===============error");
            setLoader(false);
          });
        console.log(getDate, numberOfTokens);
        // StakeToken(
        //   metaMaskDecentralized,
        //   final,
        //   userAccountAddress,
        //   closeTheModal,
        //   getDate,
        //   stakingDcentralized,
        //   ManageLoader
        // );
      }
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.header}>
              <div>
                <h5 className="white" style={{ color: "green" }}>
                  {" "}
                  Stake ChargeV2
                </h5>
                {/* <small className="white">Fields with <span className="red">*</span> are mendatory</small> */}
              </div>
              <IconButton className={classes.btn} onClick={handleClose}>
                <Close className="white" />
              </IconButton>
            </div>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                className={`${classes.marginTop} stakeContainerCheck`}
              >
                <FormControl
                  className={classes.formControl}
                  style={{ width: "100%" }}
                >
                  {/* <InputLabel htmlFor="age-native-simple">Age</InputLabel> */}
                  <Select
                    // style={{ color: "#fff !important" }}
                    className={classes.select}
                    native
                    value={getDate}
                    onChange={(e) => setGetDate(e.target.value)}
                    inputProps={{
                      name: "age",
                      id: "age-native-simple",
                    }}
                  >
                    <option
                      // aria-label="None"
                      value=""
                      style={{ backgroundColor: "#14142B", color: "#fff" }}
                    >
                      Select Days
                    </option>
                    <option
                      value={7}
                      style={{ backgroundColor: "#14142B", color: "#fff" }}
                    >
                      7 Days Pool - 1% daily
                    </option>
                    <option
                      style={{ backgroundColor: "#14142B", color: "#fff" }}
                      value={14}
                    >
                      14 Days Pool - 2% daily
                    </option>
                    <option
                      style={{ backgroundColor: "#14142B", color: "#fff" }}
                      value={30}
                    >
                      30 Days Pool - 3% daily
                    </option>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} className={classes.marginTop}>
                <TextField
                  className={classes.formField}
                  value={numberOfTokens}
                  onChange={(e) => setNumberOfTokens(e.target.value)}
                  id="outlined-basic"
                  label="Enter number of tokens"
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                className={clsx(classes.marginTop, classes.float)}
              >
                {loader ? (
                  <Button className={classes.withDrawBtn} paddingRight="20px">
                    Loading...
                  </Button>
                ) : (
                  <Button
                    onClick={BuyTokenFunction}
                    className={classes.withDrawBtn}
                    paddingRight="20px"
                  >
                    Stake Tokens
                  </Button>
                )}
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
