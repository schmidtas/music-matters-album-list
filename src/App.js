import React, { useState } from 'react';
import Container from 'components/Container';
import Loading from 'components/Loading';
import ScrollToTop from 'components/ScrollToTop';
import Navbar from 'components/Navbar';
import AlbunsList from 'components/AlbunsList';
import 'styles/global.scss';
import useLPStock from 'utils/useLPStock';
import { groupBy, throttle } from 'utils/helpers';

const App = () => {
  const [filterValue, setFilterValue] = useState();
  const [stock, , isLoading] = useLPStock(filterValue);
  const stockList = groupBy(stock, 'artist');

  const handleSearchChange = e => throttle(setFilterValue(e.target.value));

  return (
    <>
      <Navbar />
      <Container>
        <h1>Estoque de Discos</h1>
        <input onChange={handleSearchChange} placeholder='Pesquisa' type='search' />

        {isLoading ? <Loading /> : <AlbunsList stockList={stockList} />}

      </Container>
      <ScrollToTop />
    </>
  )
};

export default App;
