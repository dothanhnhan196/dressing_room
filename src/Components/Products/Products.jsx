import React, { Component } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { connect } from 'react-redux'

class Products extends Component {
    renderProductsList = () => {
        let { products } = this.props
        console.log(products)
        return products.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <ProductItem item={item} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="row">
                {this.renderProductsList()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.ProductReducer.products
    }
}

export default connect(mapStateToProps, null)(Products)