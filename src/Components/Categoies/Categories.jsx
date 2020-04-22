import React, { Component } from 'react'
import { connect } from 'react-redux'

class Categories extends Component {

    renderCategoriesBtn = () => {
        let { categories } = this.props
        return Object.values(categories).map((item, index) => {
            return (
                <div key={index} className="btn btn-secondary">{item.showName}</div>
            )
        }, console.log(this.props.categories))
    }

    render() {
        return (
            <div className="btn-group">
                {this.renderCategoriesBtn()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.CategoriesReducer
    }
}

export default connect(mapStateToProps, null)(Categories)

