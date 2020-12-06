import React from 'react';
import style from 'styles/Container.module.scss';

const Container = ({ children, className }) => <div className={`${style.container} ${className ? className : ''}`} children={children } />;

export default Container;
