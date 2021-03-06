import React, { useState } from 'react';
import { groupBy } from 'lodash';
import Container from 'components/Container';
import Loading from 'components/Loading';
import ScrollToTop from 'components/ScrollToTop';
import Navbar from 'components/Navbar';
import ListHeader from 'components/ListHeader';
import AlbunsList from 'components/AlbunsList';
import 'styles/global.scss';
import useLPStock from 'utils/useLPStock';

const App = () => {
  const [searchValue, setSearchValue] = useState();
  const [selectedStyle, setSelectedStyle] = useState();
  const [stock, styleOptions, isLoading] = useLPStock(searchValue, selectedStyle);
  const stockList = groupBy(stock, 'artist');

  return (
    <>
      <Navbar />
      <Container>
        <ListHeader
          onSearchChange={setSearchValue}
          onSelectChange={setSelectedStyle}
          styleOptions={styleOptions}
        />

        {isLoading ? <Loading /> : <AlbunsList stockList={stockList} />}

      </Container>
      <ScrollToTop />
    </>
  )
};

export default App;
