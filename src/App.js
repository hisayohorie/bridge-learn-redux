import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { addProduct } from './actions';
import {deleteProduct} from './actions';


import { API_BASE_URL } from './constants/api-url';

const mapStateToProps = state => ({
  products: state.products,
})

const mapDispatchToProps = {
  addProduct,
  deleteProduct,
}

class App extends Component {
  componentDidMount() {
    this.props.addProduct({
      name: 'Table',
      department: 'Furniture',
      price: '300.00',
      stock: 5,
    });
  }

  render() {
    const { products, addProduct, deleteProduct } = this.props;
    return (
      <div>
        {products.map(product => <div>{product.name}</div>)}
        <button onClick={ () => addProduct({ name: 'Sofa' }) }>Add Sofa</button>
        <button onClick={ () => deleteProduct({ name: 'Table' })}>Delete Table</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
