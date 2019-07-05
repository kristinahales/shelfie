import React, {Component} from 'react';

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.resetInput = this.resetInput.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetInput() {
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }
    render() {
        const {name, price, imgurl} = this.state
        return (
            <div>
                <div><label>Image URL:</label><input name='imgurl' value={imgurl} onChange={this.handleChange}/></div>
                <div><label>Product Name:</label><input name='name' value={name} onChange={this.handleChange}/></div>
                <div><label>Price:</label><input name='price' value={price} onChange={this.handleChange}/></div>
                <button onClick={this.resetInput}>Cancel</button>
                <button>Add</button>
            </div>
        )
    }
}

export default Form;