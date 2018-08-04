import React, { Component } from 'react';
import ProductsList from './components/ProductsList';

class App extends Component {
  render() {
    const productslist = this.props.data.categories[0].playlist
    console.log(this.props.data)
    return ( 
      <div>
      {
        productslist.map((items)=>{
          return <ProductsList {...items} key={items.id} />
        })
      }
      </div>
    )
  }
}

export default App;