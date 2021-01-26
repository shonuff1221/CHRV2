import axios from "axios";
import {
  Grid,
  Paper,
  makeStyles,
  Box,
  Button,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableFooter,
  TablePagination,
  useTheme,
  IconButton,
  TableHead,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import {
  LastPage,
  FirstPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@material-ui/icons";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import BuyPopup from "../buyModal";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import { environment } from "../../environment";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { contractAddress } from "../../utils/constants";
import TronGrid from "trongrid";
// table data & styling

const useStyles2 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
  table: {
    minWidth: 500,
  },
}));

function Transactions() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [eventName, setEventName] = React.useState("Sell");
  const [eventData, setEventData] = React.useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setEventName(event.target.value);
  };

  const getReducer = useSelector((state) => state.UserReducer);
  const { userPersonalBalance, userAccountAddress } = getReducer;
  useEffect(() => {
    setInterval(() => {
      getContractTransferEventsByUser(eventName);
      console.log("updating 1");
    }, 300000);
  }, []);
  useEffect(() => {
    getContractTransferEventsByUser(eventName);
  }, [eventName]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const [rows, setRows] = useState([]);
  const getContractTransferEventsByUser = async (eventName) => {
    let result = [];
    let tronGrid = new TronGrid(window?.tronWeb);
    try {
      let continueToken = "";
      let res = await tronGrid.contract.getEvents(contractAddress, {
        only_confirmed: true,
        event_name: eventName,
        limit: 200,
        filters: {
          block_number: "11671083",
        },
      });
      // result:
      // 0: "10000000"
      // 1: "0x7ce4b1706a92435bb8c8e2ce5d6c496351685498"
      // transaction_id: "a7cef8ee90977e6134b3da6d143b592b1591c759e0db7cdbeb15f5e348c99db3"
      let newArr = [];
      res &&
        res.data &&
        res.data.forEach((element) => {
          if (
            window?.tronWeb?.address?.fromHex(element?.result[1]) ===
            userAccountAddress
          ) {
            newArr.push({
              transaction_id: element?.transaction_id,
              token: element?.result[0],
              source: window?.tronWeb?.address?.fromHex(element?.result[1]),
            });
          }
        });
      setRows([...newArr]);
    } catch (error) {
      console.error(error);
      console.log(error);
    } finally {
      return result;
    }
  };
  const handleChangePage = (e, page) => {
    console.log(e, page);
    setPage(page);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
  };
  return (
    <>
      <Grid
        container
        className={classes.root}
        spacing={3}
        style={{ width: "100%" }}
      >
        <Grid item xs={12} sm={6} lg={6}>
          <Paper className={classes.card}>
            <div className={classes.left}>
              <div className={classes.buyIcon}>
                <IconButton className={classes.outlineBtn} onClick={handleOpen}>
                  <ShoppingBasketIcon className="white" />
                </IconButton>
              </div>
            </div>
            <div className={classes.right}>
              <p className="margin-none white">Total ChargeV2 Balance</p>
              <h6 className="white">
                {userPersonalBalance ? userPersonalBalance : 0} ChargeV2
              </h6>
              <p className="margin-none small-para white">
                Selling Fast, Buy Now
              </p>
            </div>
          </Paper>
        </Grid>
        {/* <Grid item xs={12} sm={6} lg={4}>
          <Paper className={classes.card}>
            <div className={classes.left}>
              <div className={classes.buyIcon}>
                <IconButton className={classes.outlineBtn} onClick={handleOpen}>
                  <ShoppingBasketIcon className="white" />
                </IconButton>
              </div>
            </div>
            <div className={classes.right}>
              <p className="margin-none white">Week's Earning</p>
              <h6 className="white">0 WAVE</h6>
             </div>
          </Paper>
        </Grid> */}
        <Grid item xs={12} sm={6} lg={6}>
          <Paper className={classes.card}>
            <div className={classes.left}>
              <div className={classes.buyIcon}>
                <IconButton className={classes.outlineBtn} onClick={handleOpen}>
                  <ShoppingBasketIcon className="white" />
                </IconButton>
              </div>
            </div>
            <div className={classes.right}>
              <p className="margin-none white">Buy</p>
              <div className={classes.buyTokens}>
                <h5 className="white">ChargeV2 Tokens</h5>
                <Button className={classes.button} onClick={handleOpen}>
                  Buy
                </Button>
              </div>
              {/* <p className="margin-none small-para white">Stake and earn up to 3% Per Month, Stake Now</p> */}
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.dropDown}>
            <FormControl className={classes.selectBox}>
              {/* <InputLabel id="demo-customized-select-label">A</InputLabel> */}
              <Select
                labelId="demo-customized-select-label"
                id="demo-customized-select"
                value={eventName}
                onChange={handleChange}
                // input={<BootstrapInput />}
              >
                {/* <MenuItem value="">
                  <em>None</em>
                </MenuItem> */}
                <MenuItem value="Sell">Sell Tokens</MenuItem>
                <MenuItem value="Buy">Buy Tokens</MenuItem>
                <MenuItem value="Withdrawan">Withdraw Tokens</MenuItem>
              </Select>
            </FormControl>
            {/* <Button className={classes.searchBtn}>Search</Button> */}
          </div>
        </Grid>
        <Grid item xs={12}>
          {/* <Box className={classes.cirlceBox}>
            <Box className={classes.cirlceIcon}>
              <FaQuestionCircle className={classes.icon} />
              <p>No Record Found</p>
            </Box>
          </Box> */}
          <Box className={classes.tableBox}>
            {/* <div className={classes.top}>
            <h6 className="white">Recent Wallet Transactions</h6>
            <Button className={classes.btn}>Active</Button>
          </div> */}
            <TableContainer
              component={Paper}
              className={classes.tableTransparnet}
            >
              <Table
                className={classes.table}
                aria-label="custom pagination table"
              >
                <TableHead className={classes.tableHeader}>
                  <TableRow>
                    <TableCell style={{ color: "white" }}>
                      Transaction ID
                    </TableCell>
                    <TableCell style={{ color: "white" }}>Source</TableCell>
                    <TableCell style={{ color: "white" }}>Token</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.tableBody}>
                  {rows &&
                    rows
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => (
                        <TableRow key={row.transaction_id}>
                          <TableCell style={{ color: "white" }} scope="row">
                            {row.transaction_id.slice(0, 8) +
                              "..." +
                              row.transaction_id.slice(56, 64)}
                          </TableCell>
                          <TableCell style={{ color: "white" }} align="left">
                            {row.source}
                          </TableCell>
                          <TableCell style={{ color: "white" }} align="left">
                            {row.token / 1000000}
                          </TableCell>
                        </TableRow>
                      ))}

                  {/* {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )} */}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      style={{ color: "white" }}
                      rowsPerPageOptions={[5, 10, 25]}
                      colSpan={3}
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: { "aria-label": "rows per page" },
                        native: true,
                      }}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                      // ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Grid>
      <BuyPopup open={open} handleClose={handleClose} />
    </>
  );
}

export default Transactions;

function TablePaginationActions(props) {
  const classes = useStyles2();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? (
          <LastPage style={{ color: "white" }} />
        ) : (
          <FirstPage style={{ color: "white" }} />
        )}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight style={{ color: "white" }} />
        ) : (
          <KeyboardArrowLeft style={{ color: "white" }} />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft style={{ color: "white" }} />
        ) : (
          <KeyboardArrowRight style={{ color: "white" }} />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? (
          <FirstPage style={{ color: "white" }} />
        ) : (
          <LastPage style={{ color: "white" }} />
        )}
      </IconButton>
    </div>
  );
}

function createData(name, calories, fat) {
  return { name, calories, fat };
}
