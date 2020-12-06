import React, { useState } from 'react';
import Container from 'components/Container';
import Navbar from 'components/Navbar';
import Loading from 'components/Loading';
import 'styles/global.scss';
import useLPStock from 'utils/useLPStock';
import { groupBy, throttle, isObjectEmpty } from 'utils/helpers';

const App = () => {
  const [filterValue, setFilterValue] = useState();
  const stockList = groupBy(useLPStock(filterValue), 'artist');

  const handleSearchChange = e => throttle(setFilterValue(e.target.value));

  return (
    <>
    <Navbar />
    <Container>
      <h1>Estoque de Discos</h1>
      <input defaultValue={filterValue} onChange={handleSearchChange} placeholder='Pesquisa'/>
      <hr/>

        {isObjectEmpty(stockList) ? (
          <Loading />
        ): (
          Object.entries(stockList).map(([band, albums])=> (
            <div key={`${band}_albuns`}>
              <div>
                <h2>{band}</h2>
              </div>
              {albums.map((album, index) => (
                <p key={`album_${album.title}_${index}`}>
                  {album.title} - (R$ {album.price})
                </p>
              ))}
              <hr/>
            </div>
          ))
        )}

    </Container>
    </>
  )
};

export default App;
