import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            product_name: '',
            price: 0,
            image_url: '',

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
            <div className='main-container'>
                <div className='product-preview'>

                    <img classname='outline' src={image_url} height='200px' width='300px' />
                    <label>Image URL:</label>
                    <div><input name='image_url' value={image_url} onChange={this.handleChange} height='200px' width='300px'/></div>
                    
                    <label>Product Name:</label>
                    <div><input name='product_name' value={product_name} onChange={this.handleChange}/></div>
                    
                    <label>Price:</label>
                    <div><input name='price' value={price} onChange={this.handleChange}/></div>

                    <button className='buttons' onClick={this.resetInput}>Cancel</button>
                    <button className='buttons' onClick={this.handleAddToInventory}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;