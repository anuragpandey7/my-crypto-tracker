const url = ` https://api.coingecko.com/api/v3/search/trending/`;
//api.coingecko.com/api/v3/search/trending/
 function GetTrendingData() {
  return fetch(url).then((res) => res.json());
}

export default GetTrendingData
