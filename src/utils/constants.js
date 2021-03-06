export const abi = [
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "PERCENTS_DIVIDER",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    inputs: [{ name: "userAddress", type: "address" }],
    name: "getUserDownlineCount",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    name: "AdminlockWithdrawl",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    inputs: [{ name: "userAddress", type: "address" }],
    name: "getUserDividends",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    name: "AdmindlockStaking",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "string" }],
    constant: true,
    name: "name",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ name: "success", type: "bool" }],
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_amount", type: "uint256" },
    ],
    name: "approve",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    inputs: [{ name: "userAddress", type: "address" }],
    name: "getUserAvailable",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    name: "AdminlockBuying",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "basepercent3",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    name: "AdminUnlockWithdrawl",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ name: "success", type: "bool" }],
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_amount", type: "uint256" },
    ],
    name: "transferFrom",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  { name: "destruct", stateMutability: "Nonpayable", type: "Function" },
  {
    inputs: [{ name: "amount", type: "uint256" }],
    name: "_mint",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint8" }],
    constant: true,
    name: "decimals",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "TIME_STEP",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "address" }],
    constant: true,
    inputs: [{ name: "userAddress", type: "address" }],
    name: "getUserReferrer",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    inputs: [{ type: "uint256" }],
    name: "REFERRAL_LIMITS",
    stateMutability: "View",
    type: "Function",
  },
  { name: "withdraw", stateMutability: "Nonpayable", type: "Function" },
  {
    outputs: [{ name: "success", type: "bool" }],
    inputs: [{ name: "_value", type: "uint256" }],
    name: "burn",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "totalWithdrawn",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "tokenSold",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "totalInvested",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    inputs: [{ name: "_value", type: "uint256" }],
    name: "balTrx",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    inputs: [{ type: "uint256" }],
    name: "REFERRAL_PERCENTS",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [
      { name: "referrer", type: "address" },
      { name: "reffrals", type: "uint256" },
      { name: "bonus", type: "uint256" },
      { name: "withdrawRef", type: "uint256" },
      { name: "start", type: "uint256" },
    ],
    constant: true,
    inputs: [{ type: "address" }],
    name: "refusers",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    constant: true,
    name: "lockwithdrawl",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    name: "AdminUnlockSelling",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "getContractBalance",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ name: "balance", type: "uint256" }],
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "address[]" }],
    constant: true,
    inputs: [{ name: "userAddress", type: "address" }],
    name: "totalreferrals",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "totalDeposits",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    name: "withdrawReferralReward",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    inputs: [{ name: "userAddress", type: "address" }],
    name: "getUserTotalDeposits",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    inputs: [{ name: "_numberOfTokens", type: "uint256" }],
    name: "tokenToTron",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    inputs: [{ name: "_numberOfTokens", type: "uint256" }],
    name: "trontotoken",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    name: "AdmindUnlockStaking",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "basepercent2",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "address" }],
    constant: true,
    name: "owner",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    inputs: [
      { name: "oldAddress", type: "address" },
      { name: "newAddress", type: "address" },
    ],
    name: "updateUser",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    inputs: [{ name: "_value", type: "uint256" }],
    name: "setPrice",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "string" }],
    constant: true,
    name: "symbol",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    inputs: [{ name: "_value", type: "uint256" }],
    name: "decreaseSupply",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "price",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    constant: true,
    name: "lockSelling",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    name: "AdminUnlockBuying",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    name: "AdminlockUstake",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    inputs: [{ name: "_newOwner", type: "address" }],
    name: "changeOwner",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [
      { name: "checkpoint", type: "uint256" },
      { name: "totalTokenBought", type: "uint256" },
      { name: "totalTokenSold", type: "uint256" },
      { name: "basepercent", type: "uint256" },
    ],
    constant: true,
    inputs: [{ type: "address" }],
    name: "users",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    inputs: [{ name: "userAddress", type: "address" }],
    name: "getUserAmountOfDeposits",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ name: "success", type: "bool" }],
    inputs: [
      { name: "_to", type: "address" },
      { name: "_amount", type: "uint256" },
    ],
    name: "transfer",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    name: "AdminUnlockUnstak",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    constant: true,
    name: "lockBuying",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "viewSupply",
    stateMutability: "View",
    type: "Function",
  },
  {
    inputs: [{ name: "_symbol", type: "string" }],
    name: "setSymbol",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    inputs: [
      { name: "target", type: "address" },
      { name: "freeze", type: "bool" },
    ],
    name: "FreezeAcc",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "totalUsers",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [
      { type: "uint256" },
      { type: "uint256" },
      { type: "uint256" },
      { type: "uint256" },
      { type: "uint256" },
      { type: "uint256" },
    ],
    constant: true,
    inputs: [
      { name: "userAddress", type: "address" },
      { name: "index", type: "uint256" },
    ],
    name: "getUserDepositInfo",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    inputs: [{ name: "_value", type: "uint256" }],
    name: "balToken",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    inputs: [{ name: "_name", type: "string" }],
    name: "setName",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "TokenBought",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    constant: true,
    inputs: [{ type: "address" }],
    name: "frozen",
    stateMutability: "View",
    type: "Function",
  },
  {
    inputs: [
      { name: "_numberOfTokens", type: "uint256" },
      { name: "_value", type: "uint256" },
    ],
    name: "invest",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ name: "remaining", type: "uint256" }],
    constant: true,
    inputs: [
      { name: "_owner", type: "address" },
      { name: "_spender", type: "address" },
    ],
    name: "allowance",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    name: "basepercent1",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    constant: true,
    name: "lockStaking",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    inputs: [
      { name: "_number", type: "uint256" },
      { name: "_value", type: "uint256" },
    ],
    name: "UpdateBase",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    name: "AdminlockSelling",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    inputs: [{ name: "userAddress", type: "address" }],
    name: "getUserReferralBonus",
    stateMutability: "View",
    type: "Function",
  },
  {
    outputs: [{ name: "success", type: "bool" }],
    payable: true,
    inputs: [
      { name: "_numberOfTokens", type: "uint256" },
      { name: "_refferer", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "buyTokens",
    stateMutability: "Payable",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    inputs: [
      { name: "target", type: "address" },
      { name: "freeze", type: "bool" },
    ],
    name: "UnfreezeAcc",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "bool" }],
    inputs: [
      { name: "_numberOfTokens", type: "uint256" },
      { name: "_value", type: "uint256" },
    ],
    name: "sellTokens",
    stateMutability: "Nonpayable",
    type: "Function",
  },
  {
    outputs: [{ type: "uint256" }],
    constant: true,
    inputs: [{ name: "userAddress", type: "address" }],
    name: "getUserTotalWithdrawn",
    stateMutability: "View",
    type: "Function",
  },
  {
    inputs: [{ name: "_owner", type: "address" }],
    stateMutability: "Nonpayable",
    type: "Constructor",
  },
  { payable: true, stateMutability: "Payable", type: "Fallback" },
  {
    inputs: [{ type: "uint256" }, { type: "address" }],
    name: "Sell",
    type: "Event",
  },
  {
    inputs: [{ type: "uint256" }, { type: "address" }],
    name: "Buy",
    type: "Event",
  },
  {
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "NewDeposit",
    type: "Event",
  },
  {
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { name: "amount", type: "uint256" },
    ],
    name: "Withdrawn",
    type: "Event",
  },
  {
    inputs: [
      { indexed: true, name: "referrer", type: "address" },
      { indexed: true, name: "referral", type: "address" },
      { indexed: true, name: "level", type: "uint256" },
      { name: "amount", type: "uint256" },
    ],
    name: "RefBonus",
    type: "Event",
  },
  {
    inputs: [
      { name: "target", type: "address" },
      { name: "frozen", type: "bool" },
    ],
    name: "Freeze",
    type: "Event",
  },
  {
    inputs: [
      { name: "target", type: "address" },
      { name: "frozen", type: "bool" },
    ],
    name: "Unfreeze",
    type: "Event",
  },
  {
    inputs: [
      { name: "a", type: "address" },
      { name: "_value", type: "uint256" },
    ],
    name: "Burn",
    type: "Event",
  },
];
export const contractAddress = "TXkpVcZu2dbXbkYz265ZZ8zrmptrs17b5P";
export const refDefaultAddress = "TL8ZxcUKJNBRwCCMgb1jNVTvqGaTWoweos";

// export const contractAddress = "TZ1C7fQavUvqHdLRX5NjwfMyi89u1PZ28r";
// TRpndMFBy2Xn38PvYfRNmUfKxBZt4svSiH;
