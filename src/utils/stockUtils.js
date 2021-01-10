import { GOOGLE_SHEET_API_URL, GOOGLE_SHEET_API_KEY, MUSIC_MATTERS_SHEET_ID } from 'utils/constants';

const normalizePriceRanges = (prices = {}) => {
  return prices.map(item => ({ key: item[0], value: item[1] }))
}

const getPrice = (prices, priceKey) => {
  const priceFilter = prices.find(price => price.key === priceKey);
  return priceFilter ? priceFilter.value : priceKey;
}

export const normalizeStock = (stock = [], prices) => {
  const normalizedStock = [];
  const normalizedPrices = prices && normalizePriceRanges(prices);

  stock.map(item => normalizedStock.push({
    artist: item[0].trim(),
    title: item[1].trim(),
    edition: item[2].trim(),
    style: item[3].trim(),
    type: item[4].trim(),
    price: normalizedPrices ? getPrice(normalizedPrices, item[5]) : item[5],
    priceCode: item[5]
  }));

  return normalizedStock;
}

export const filterStock = (stock, filterValue) => {
  if (!filterValue) return stock;

  const lowerFilterValue = filterValue.toLowerCase();
  return stock.filter(item =>
    item.title.toLowerCase().includes(lowerFilterValue.trim()) || item.artist.toLowerCase().includes(lowerFilterValue.trim())
  );
}

export const groupBy = (xs, key) => {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const getApiUrl = params =>
  `${GOOGLE_SHEET_API_URL}${MUSIC_MATTERS_SHEET_ID}/values/${params[0]}!${params[1]}?key=${GOOGLE_SHEET_API_KEY}`;
