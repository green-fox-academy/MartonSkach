import React from 'react';

const BeerTable = props => (
  <div>
    <p>Name: {props.name}</p>
    <p>Desc: {props.description}</p>
    <img src={props.image_url} alt="ingyensoer" />
  </div>
)

export default BeerTable;