import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';

class App extends Component {
  constructor() {
    super()
    this.state = {
      inventory: [],
    }
    this.createProduct = this.createProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  componentDidMount() {
  axios.get('/api/products')
    .then(res => {
      this.setState({
        inventory: res.data
      })
    });
  }

  createProduct(product) {
    return axios.post('/api/products', product)
    .then(res => {
      this.setState({
        inventory: res.data
      })
    })
    .catch(err => console.log(err))
  }

  deleteProduct(id) {
    axios.delete(`/api/products/${id}`)
    .then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        
          <div className='main-container'>
            <Dashboard inventory={this.state.inventory} deleteProduct={this.deleteProduct}/>
            <Form createProduct={this.createProduct}/>
                              
          </div>
      </div>
    
    );
  }

}

export default App;
