import { useState, useEffect } from 'react';
import { sortBy } from 'lodash';
import { normalizeStock, filterStock, getApiUrl } from 'utils/stockUtils';
import { STOCK_SHEET_PARAMS, PRICE_SHEET_PARAMS } from 'utils/constants';

const useLPStock = (searchValue, styleValue) => {
  const [stock, setStock] = useState();
  const [priceRanges, setPriceRanges] = useState();
  const [styleOptions, setStyleOptions] = useState([]);
  const [isLoadingStock, setIsLoadingStock] = useState(true);
  const [isLoadingPrices, setIsLoadingPrices] = useState(true);
  const isLoading = isLoadingStock || isLoadingPrices;

  useEffect(() => {
    if (!stock) {
      const stockUrl = getApiUrl(STOCK_SHEET_PARAMS)
      fetch(stockUrl)
        .then(response =>
          response.json().then(data => {
            setStock(data.values);
            setIsLoadingStock(false);
          })
        );
    } else {
      const styles = new Set();
      stock.forEach(element => {
        styles.add(element[3]);
      });
      setStyleOptions(styles);
    }
  }, [stock]);

  useEffect(() => {
    if (!priceRanges) {
      const pricesUrl = getApiUrl(PRICE_SHEET_PARAMS)
      fetch(pricesUrl).then(response =>
        response.json().then(data => {
          setPriceRanges(data.values);
          setIsLoadingPrices(false);
        })
      );
    }
  }, [priceRanges]);

  const normalizedStock = normalizeStock(stock, priceRanges);
  return [
    filterStock(normalizedStock, searchValue, styleValue),
    sortBy(Array.from(styleOptions)),
    isLoading
  ];
}

export default useLPStock;
