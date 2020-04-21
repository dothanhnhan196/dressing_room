import React, { Component } from 'react'

export default class Categories extends Component {
    render() {
        return (
            <div className="btn-group">
                <button className="button">Quần áo</button>
                <button className="button">Phụ kiện</button>
                <button className="button">Tóc</button>
                <button className="button">Người mẫu</button>
                <button className="button">Khung nền</button>
            </div>
        )
    }
}
