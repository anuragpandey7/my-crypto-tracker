const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&price_change_percentage=1h&locale=en&precision=3";

function GetCryptoData() {
  return fetch(url).then((res) => res.json());
}

export default GetCryptoData;
