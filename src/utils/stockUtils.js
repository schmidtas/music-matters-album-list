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

export const filterStock = (stock, searchValue, styleValue) => {
  if (!searchValue && !styleValue) return stock;

  const lowerFilterValue = searchValue?.toLowerCase().trim();

  return stock.filter(item => {
    const containsSearch = searchValue ? (
      item.title.toLowerCase().includes(lowerFilterValue) ||
      item.artist.toLowerCase().includes(lowerFilterValue)
    ) : true;

    const matchStyle = styleValue ? item.style === styleValue : true;

    return containsSearch && matchStyle;
  });
}

export const getApiUrl = params =>
  `${GOOGLE_SHEET_API_URL}${MUSIC_MATTERS_SHEET_ID}/values/${params[0]}!${params[1]}?key=${GOOGLE_SHEET_API_KEY}`;
