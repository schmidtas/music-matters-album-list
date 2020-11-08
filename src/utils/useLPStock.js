import { useState, useEffect } from 'react';
import { normalizeStock, filterStock, getApiUrl } from 'utils/stockUtils';
import { STOCK_SHEET_PARAMS, PRICE_SHEET_PARAMS } from 'utils/constants';

const useLPStock = filterValue => {
  const [stock, setStock] = useState();
  const [priceRanges, setPriceRanges] = useState();

  useEffect(() => {
    if(!stock) {
      const stockUrl = getApiUrl(STOCK_SHEET_PARAMS)
      fetch(stockUrl)
        .then(response =>
          response.json().then(data => setStock(data.values))
        );
    }
  }, [stock]);

  useEffect(() => {
    if(!priceRanges) {
      const pricesUrl = getApiUrl(PRICE_SHEET_PARAMS)
      fetch(pricesUrl).then(response =>
        response.json().then(data => setPriceRanges(data.values))
      );
    }
  }, [priceRanges]);

  const normalizedStock = normalizeStock(stock, priceRanges);
  return filterStock(normalizedStock, filterValue);
}

export default useLPStock;
