import React from 'react';
import style from 'styles/Container.module.scss';

const Container = ({ children }) => <div className={style.container} children={children } />;

export default Container;
