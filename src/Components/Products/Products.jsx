import React, { Component } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import { connect } from 'react-redux'

class Products extends Component {
    renderProductsList = () => {
        let { products, choosenCategory } = this.props
        return products.filter(item => item.type === choosenCategory).map((item, index) => {
            return (
                <div className="col-3 mt-2" key={index}>
                    <ProductItem item={item} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="card contaier-fluid">
                <div className="row">
                    {this.renderProductsList()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.ProductReducer,
        choosenCategory: state.ChoosenCategory
    }
}

export default connect(mapStateToProps, null)(Products)