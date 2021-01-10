import React, { useState, useEffect } from 'react';
import Chevron from 'images/chevron-up.svg';
import style from 'styles/ScrollToTop.module.scss';
import { throttle } from 'utils/helpers';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const btnClasses = [
    style['scroll-to-top'],
    ...(!isVisible ? [style['scroll-to-top--hidden']] : [])
  ].join(' ');

  const toggleButtonVisibility = throttle(() => setIsVisible(window.pageYOffset > 150));

  useEffect(() => {
    window.addEventListener('scroll', toggleButtonVisibility);
    return () => window.removeEventListener('scroll', toggleButtonVisibility);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollTop = () => window.scrollTo(0, 0);

  return (
    <button aria-label={'Voltar ao topo da página'} onClick={scrollTop} className={btnClasses}>
      <img className={style['scroll-to-top__icon']} src={Chevron} alt='' role='presentation' />
    </button>
  )
};

export default ScrollToTop;
