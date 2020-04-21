import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let { item } = this.props
        return (
            <div className="card p-2 my-2">
                <img src={item.imgSrc_jpg} />
                <p>{item.name}</p>
                <button className="btn btn-success">Thử đồ</button>
            </div>
        )
    }
}
