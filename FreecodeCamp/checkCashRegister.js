function checkCashRegister(price, cash, cid) {
  const currencyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1.0],
    ["FIVE", 5.0],
    ["TEN", 10.0],
    ["TWENTY", 20.0],
    ["ONE HUNDRED", 100.0],
  ];

  let changeDue = cash - price;
  let totalCid = cid.reduce((acc, curr) => acc + curr[1], 0);

  if (totalCid < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCid === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    let changeArr = [];
    for (let i = currencyUnit.length - 1; i >= 0; i--) {
      let coinName = currencyUnit[i][0];
      let coinValue = currencyUnit[i][1];
      let coinTotal = cid[i][1];
      let coinCount = (coinTotal / coinValue).toFixed(0);

      if (changeDue >= coinValue) {
        let amountNeeded = Math.floor(changeDue / coinValue);
        let amountToGive = Math.min(amountNeeded, coinCount) * coinValue;
        changeDue = (changeDue - amountToGive).toFixed(2);
        if (amountToGive > 0) {
          changeArr.push([coinName, amountToGive]);
        }
      }
    }

    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: changeArr };
    }
  }
}

// Example usage:
let price = 19.5;
let cash = 20;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90.0],
  ["FIVE", 55.0],
  ["TEN", 20.0],
  ["TWENTY", 60.0],
  ["ONE HUNDRED", 100.0],
];

console.log(checkCashRegister(price, cash, cid));
