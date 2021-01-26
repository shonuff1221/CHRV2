import React from "react";
import {
  Modal,
  Backdrop,
  Fade,
  Grid,
  IconButton,
  TextField,
  Button,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import clsx from "clsx";
import { useStyles } from "./styles";
import { BuyToken } from "../../userDataFunctions";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
// import Web3 from "web3";
import { contractAddress, refDefaultAddress } from "../../utils/constants";

export default function BuyPopup({ handleReloadValues, handleClose, open }) {
  const classes = useStyles();
  const [numberOfTokens, setNumberOfTokens] = React.useState("");
  const [loader, setLoader] = React.useState(false);

  const getReducer = useSelector((state) => state.UserReducer);
  const {
    metaMaskDecentralized,
    userAccountAddress,
    oneTokenPrice,
    eatherInUsdt,
    stakingDcentralized,
    waveCurrentPrice,
    withoutwaveCurrentPrice,
    supplyValue,
  } = getReducer;

  // console.log("here are the d center===>", metaMaskDecentralized);

  const closeTheModal = (isTrue) => {
    if (isTrue) {
      handleClose();
    }
  };

  const ManageLoader = (isFalse) => {
    setLoader(isFalse);
  };
  // const web3 = new Web3(Web3.givenProvider || "http://localhost8545");

  async function tokenTOTron() {
    let value, contract;
    contract = await window?.tronWeb.contract().at(contractAddress);
    return new Promise(async (resolve, reject) => {
      value = await contract.tokenToTron(1000000).call();
      resolve(value);
    });
  }
  const BuyTokenFunction = async () => {
    if (numberOfTokens === "") {
    } else if (numberOfTokens > 300000) {
      toast.warning(
        "limit exceeded 300000 per transaction just for ETH handling!"
      );
    } else {
      console.log(metaMaskDecentralized, "asdsadsadsad");
      let add = document.getElementById("refer").value;

      setLoader(true);
      if (metaMaskDecentralized && userAccountAddress && stakingDcentralized) {
        try {
          console.log("value==>" + numberOfTokens);
          let url = new URL(document.getElementById("refer").value);

          let referalAddress = localStorage.getItem("ref")
            ? localStorage.getItem("ref")
            : refDefaultAddress;
          let tronValue = await tokenTOTron();

          let contract = await window?.tronWeb?.contract().at(contractAddress);

          contract
            .buyTokens(
              numberOfTokens * 1000000,
              referalAddress,
              numberOfTokens * tronValue
            )
            .send({
              feeLimit: 100000000,
              callValue: numberOfTokens * tronValue,
              shouldPollResponse: true,
            })
            .then((output) => {
              console.log("- Output: buy tokens", output, "\n");
              toast.success("Your transaction has been confirmed");
              setLoader(false);
              handleReloadValues();
              localStorage.setItem("reload", true);
              handleClose();
            })
            .catch((e) => {
              toast.error(e.message);

              setLoader(false);
              handleReloadValues();
            });
        } catch (error) {
          // User denied account access...
          console.log("sss", error);
          handleReloadValues();
          toast.error(error);
          localStorage.setItem("reload", true);
          setLoader(false);
        }

        // let addZero = supplyValue ? Number(getVal + "0") : getVal;

        // BuyToken(
        //   metaMaskDecentralized,
        //   numberOfTokens,
        //   userAccountAddress,
        //   closeTheModal,
        //   convert,
        //   stakingDcentralized,
        //   getVal,
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
                <h5 className="white">Buy ChargeV2 Token</h5>
                <small className="white" style={{ color: "#48C6C8" }}>
                  {/* 1 wave = ({price}) */}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  {/* Your TRX balance = ({walletBalance + " TRX"}) */}
                </small>
              </div>
              <IconButton className={classes.btn} onClick={handleClose}>
                <Close className="white" />
              </IconButton>
            </div>
            <Grid container spacing={3}>
              <Grid item xs={12} className={classes.marginTop}>
                <TextField
                  className={classes.formField}
                  id="outlined-basic"
                  label="Enter number of tokens"
                  variant="outlined"
                  style={{ color: "#fff" }}
                  value={numberOfTokens}
                  onChange={(e) => setNumberOfTokens(e.target.value)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                className={clsx(classes.marginTop, classes.float)}
              >
                {loader ? (
                  <Button className={classes.withDrawBtn}>Loading...</Button>
                ) : (
                  <Button
                    className={classes.withDrawBtn}
                    onClick={BuyTokenFunction}
                  >
                    Submit Request
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
