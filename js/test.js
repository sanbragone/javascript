const precios = [
  {
    symbol: "ETHBTC",
    price: "0.07051000",
  },
  {
    symbol: "LTCBTC",
    price: "0.00254700",
  },
  {
    symbol: "BNBBTC",
    price: "0.01290300",
  },
  {
    symbol: "NEOBTC",
    price: "0.00047300",
  },
  {
    symbol: "BCCBTC",
    price: "0.07908100",
  },
  {
    symbol: "GASBTC",
    price: "0.00012600",
  },
  {
    symbol: "BNBETH",
    price: "0.18300000",
  },
  {
    symbol: "BTCUSDT",
    price: "23451.20000000",
  },
  {
    symbol: "ETHUSDT",
    price: "1653.50000000",
  },
];

for (let i = 0; i < precios.length; i++) {
  console.log(precios[i].price);
}

for (const price of precios) {
  console.log(price.price);
}
