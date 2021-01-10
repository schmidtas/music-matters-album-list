import React from 'react';
import PropTypes from 'prop-types';
import style from 'styles/Container.module.scss';

const Container = ({ children, className }) => <div className={`${style.container} ${className ? className : ''}`} children={children} />;

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Container;
