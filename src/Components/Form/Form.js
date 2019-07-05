import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            product_name: '',
            price: 0,
            image_url: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.resetInput = this.resetInput.bind(this);
        this.handleAddToInventory = this.handleAddToInventory.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetInput() {
        this.setState({
            product_name: '',
            price: 0,
            image_url: '',
            addimg: ''
        })
    }

    handleAddToInventory() {
        this.props.createProduct({
            product_name: this.state.product_name,
            image_url: this.state.image_url, 
            price: this.state.price
        })
        this.resetInput();
        
    }
    render() {
        const {product_name, price, image_url} = this.state
        return (
            <div>
                <div className='product-preview'></div>
                <div><label>Image URL:</label><input name='image_url' value={image_url} onChange={this.handleChange} height='200px' width='300px'/></div>
                <div><label>Product Name:</label><input name='product_name' value={product_name} onChange={this.handleChange}/></div>
                <div><label>Price:</label><input name='price' value={price} onChange={this.handleChange}/></div>
                <button onClick={this.resetInput}>Cancel</button>
                <button onClick={this.handleAddToInventory}>Add to Inventory</button>
            </div>
        )
    }
}

export default Form;