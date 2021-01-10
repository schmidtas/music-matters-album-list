import React from 'react';
import PropTypes from 'prop-types';
import style from 'styles/BandAlbums.module.scss';

const BandAlbums = ({ band, albums }) => {
  return band && (
    <div key={`${band}_albuns`} className={style.band}>
      <h3 className={style['band__name']}>{band}</h3>
      <ul className={style['band__list']}>

        {albums.map((album, index) => album.title && (
          <li key={`album_${album.title}_${index}`} className={style['album']}>
            <div className={style['album__info']}>
              <p className={style['album__title']}>{album.title}</p>
              <small className={style['album__details']}>
                {album.edition} ({album.type})
              </small>
            </div>
            <p className={style['album__price']}>
              R$ {album.price} ({album.priceCode})
            </p>
          </li>
        ))}

      </ul>
    </div>
  )
};

BandAlbums.propTypes = {
  band: PropTypes.string,
  albuns: PropTypes.object,
}

export default BandAlbums;
