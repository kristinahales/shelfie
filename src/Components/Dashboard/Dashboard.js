import React, {Component} from 'react';
import Product from '../Product/Product';

class Dashboard extends Component {
    render() {
        return (
            <div>
                {
                    this.props.inventory.map(product => {
                        return (
                            <Product 
                            key={product.product_id}
                            product={product}
                            deleteProduct={this.props.deleteProduct}
                            />
                        )
                    })
                }
               
                
            </div>
        )
    }
}

export default Dashboard;