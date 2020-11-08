import React, { useState } from 'react';
import Container from 'components/Container';
import 'styles/global.scss';
import useLPStock from 'utils/useLPStock';
import { groupBy, throttle } from 'utils/helpers';

const App = () => {
  const [filterValue, setFilterValue] = useState();
  const stockList = groupBy(useLPStock(filterValue), 'artist');

  const handleSearchChange = e => throttle(setFilterValue(e.target.value));

  return (
    <Container>
      <h1>Music Matters - Estoque</h1>
      <input defaultValue={filterValue} onChange={handleSearchChange} placeholder='Pesquisa'/>
      <hr/>

        {Object.entries(stockList).map(([band, albums])=> (
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
        ))}

    </Container>
  )
};

export default App;
