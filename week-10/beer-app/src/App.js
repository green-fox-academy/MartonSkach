import React from "react";

import Title from "./components/titles";
import BeerTable from "./components/beertable";
import Pagination from "./components/pagination";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      beerName: undefined,
      description: undefined,
      imageSrc: undefined,
    };
  }

  getBeer() {

    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=8')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let content = data.results.map((name) => {
          return (
            <div key={name.results}>
              <h2>{name.data.name} </h2>
            </div>
          )
        })
        this.setState({ beerName: content });
        console.log("state", this.state.name);
      })
  }

  render() {
    return (
      <div>
        <div>
          <Title />
        </div>
        <div>
          <BeerTable />
        </div>
        <div>
          <Pagination />
        </div>

        <div>
          <h2>{this.state.beerName}fdsdfds</h2>
        </div>
      </div>
    );
  }
};



export default App;



