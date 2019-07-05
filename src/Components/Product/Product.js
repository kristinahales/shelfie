import React, {Component} from 'react';
import './Product.css'

class Product extends Component {
    render() {
        return (
            <div className='product-container'>
                <div className='image-container'>
                    <img src={this.props.product.image_url} width='300px' height='200px'/>
                </div>

                <div className='word-container'>
                    <h2>{this.props.product.product_name}</h2>
                    <h3>${this.props.product.price}</h3>
                    <button className='button' onClick={() => this.props.deleteProduct(this.props.product.product_id)}>Delete</button>
                    <button className='button'>Edit</button>
                </div>
                
            </div>
        )
    }
}

export default Product;