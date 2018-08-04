import React, { Component } from 'react';
import ProductsList from './components/ProductsList';
import { connect } from'react-redux'

class App extends Component {
  render() {
    
    // const productslist = this.props.data.categories[0].playlist
    //const categories = this.props.data.categories[0].playlist
    const categories = this.props.categories[0].playlist
    console.log(this.props.data)

    return ( 
      <div>
        <ProductsList
            categories={this.props.categories}
            // handleOpenModal={this.handleOpenModal}
          />
      {
        // productslist.map((items)=>{
          categories.map((items)=>{
          return <ProductsList {...items} key={items.id} />
        })
      }
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    categories: state.data.categories
  }
}

export default connect(mapStateToProps)(App)