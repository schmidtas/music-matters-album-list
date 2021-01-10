import React from 'react';
import { isObjectEmpty } from 'utils/helpers';
import BandAlbums from 'components/BandAlbums';
import style from 'styles/BandAlbums.module.scss';

const AlbunsList = ({ stockList }) => {
  return isObjectEmpty(stockList) ?
    <p className={style['band__empty']}>Nenhum resultado encontrado</p> :
    Object.entries(stockList).map(
      ([band, albums]) => <BandAlbums key={`${band}_albums`} {...{ band, albums }} />
    )
};

export default AlbunsList;
