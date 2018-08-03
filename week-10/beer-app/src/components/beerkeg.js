import React from 'react';
import BeerTable from './beertable';

const BeerKeg = props => {
  {
    props.data.forEach(element => {
      return (
        <BeerTable
          name={element.state.name}
          description={element.state.description}
          image_url={element.state.image_url}
        />
      );
    })
  }
}

export default BeerKeg