import React from 'react'
// https://api.coingecko.com/api/v3/search/trending
const GetDataById = (id) => {
  return fetch(`https://api.coingecko.com/api/v3/coins/${id}`).then(res => res.json())
}

export default GetDataById

