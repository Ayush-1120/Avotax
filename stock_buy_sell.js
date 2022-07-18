// To calculate maximum profits from stock exchange with given stock rate per day.

/*
  You're given an array of positive integers representing the prices of a single stock on
  various days (each index in the array represents a different day). You're also
  given an integer k, which represents the number of transactions
  you're allowed to make. One transaction consists of buying the stock on a
  given day and selling it on another, later day.
  Write a function that returns the maximum profit that you can make by buying
  and selling the stock, given k transactions.
  Note that you can only hold one share of the stock at a time; in other words,
  you can't buy more than one share of the stock on any given day, and you can't
  buy a share of the stock if you're still holding another share. Also, you
  don't need to use all k transactions that you're allowed.
  Sample Input
  prices = [5, 11, 3, 50, 60, 90]
  k = 2
  Sample Output
  93 // Buy: 5, Sell: 11; Buy: 3, Sell: 90
*/

function maxProfitWithKTransactions(prices, k) {
  let maximas = splitLocalMximas(prices);
  let profits = getAllProfits(maximas);
  let totalProfit = 0;
  for (let i=0; i < k; i++){
    totalProfit += profits[profits.length-i-1];
  }
  return totalProfit;
}

function getAllProfits(maximas) {
  let profits = [];
  for (let i = 0; i < maximas.length; i++) {
    let arr = maximas[i].sort(function(a, b){return a - b});
    let profit = arr[arr.length-1] - arr[0];
    profits.push(profit);
  }
  return profits.sort(function(a, b){return a - b});
}

function splitLocalMximas(prices) {
  let maximas = [];
  let min = -Infinity;
  let tempMaxima = [];
  for(let i = 0; i < prices.length; i++) {
    if(prices[i] >= min) {
      tempMaxima.push(prices[i]);
      min = prices[i];
    } else {
      min = prices[i];
      maximas.push(tempMaxima);
      tempMaxima = [prices[i]];
    }
    if (i === prices.length-1 && tempMaxima.length){
      maximas.push(tempMaxima);
      tempMaxima = [];
    }
  }
  return maximas;
}

// let prices = [5,11,3,50,60,90,5,4];
// let k = 3
// maxProfitWithKTransactions(prices, k); // 93

// Do not edit the line below.
exports.maxProfitWithKTransactions = maxProfitWithKTransactions;
