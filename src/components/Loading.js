import React from 'react';
import styles from 'styles/Loading.module.scss';
import LoadingSvg from 'images/loading.svg';

const Loading = () => (
  <div className={styles.loading} aria-label='Carregando'>
    <img src={LoadingSvg} alt='Carregando conteúdo' />
  </div>
)

export default Loading;
