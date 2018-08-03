import React from 'react';
import BeerTable from './beertable';

const BeerKeg = ({beerlist}) => {
  return beerlist.map((element, i) => {
    return (
      <BeerTable
        key={element.id}
        name={element.name}
        description={element.description}
        image_url={element.image_url}
      />
    );
  })
}


export default BeerKeg