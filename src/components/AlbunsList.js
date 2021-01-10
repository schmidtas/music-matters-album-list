import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import BandAlbums from 'components/BandAlbums';
import style from 'styles/BandAlbums.module.scss';

const AlbunsList = ({ stockList }) => {
  return isEmpty(stockList) ?
    <p className={style['band__empty']}>Nenhum resultado encontrado</p> :
    Object.entries(stockList).map(
      ([band, albums]) => <BandAlbums key={`${band}_albums`} {...{ band, albums }} />
    )
};

AlbunsList.propTypes = {
  stockList: PropTypes.object
}

export default AlbunsList;
