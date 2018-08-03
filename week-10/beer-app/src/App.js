import React from "react";

import Title from "./components/titles";
import Form from "./components/form";
import BeerTable from "./components/beertable";
import Pagination from "./components/pagination";
import BeerKeg from "./components/beerkeg";

class App extends React.Component {
  state = {
    name: undefined,
    description: undefined,
    image_url: undefined
  }

  getBeer = async (e) => {
    e.preventDefault();
    const api_call = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=8');
    const data = await api_call.json();
    console.log(data);
    this.setState({
      name: data[0].name,
      description: data[0].description,
      image_url: data[0].image_url
    });
  }

  render() {
    return (
      <div>
        <Title />
        <Form getBeer={this.getBeer} />
        <BeerTable
          name={this.state.name}
          description={this.state.description}
          image_url={this.state.image_url}
        />
        <Pagination />
      </div>
    )
  }
}

export default App;


/*

  <BeerKeg
          data={this.data}
        />
*/