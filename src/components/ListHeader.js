import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import style from 'styles/ListHeader.module.scss';

const ListHeader = ({ onSearchChange, onSelectChange, styleOptions }) => {
  const handleSearchChange = e => onSearchChange(e.target.value);

  const handleSelectChange = e => onSelectChange(e.target.value);

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

        <select onChange={handleSelectChange} className={style['list-header__select']}>
          <option value=''>Estilos</option>
          {styleOptions.map(style => (
            <option key={`style_${style}`} value={style} >{style}</option>
          ))}
        </select>
      </div>
    </div>
  )
};

ListHeader.propTypes = {
  onSearchChange: PropTypes.func,
  onSelectChange: PropTypes.func,
  styleOptions: PropTypes.array
}

export default ListHeader;
