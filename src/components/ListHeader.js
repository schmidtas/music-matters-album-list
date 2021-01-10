import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import style from 'styles/ListHeader.module.scss';

const ListHeader = ({ onSearchChange }) => {
  const handleSearchChange = e => onSearchChange(e.target.value);

  return (
    <div className={style['list-header']}>
      <h1 className={style['list-header__title']}>Estoque de Discos</h1>
      <div className={style['list-header__filters']}>
        <input
          className={style['list-header__search']}
          placeholder='Pesquisar'
          type='search'
          onChange={debounce(handleSearchChange)}
        />
      </div>
    </div>
  )
};

ListHeader.propTypes = {
  onSearchChange: PropTypes.func
}

export default ListHeader;
