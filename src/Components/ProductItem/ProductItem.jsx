import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductItem extends Component {

    _chooseCloth = cloth => {
        this.props.dispatch({
            type: 'SET_CLOTH_MODEL',
            payload: {
                type: cloth.type,
                img: cloth.imgSrc_png
            }
        })
    }

    render() {
        let { imgSrc_jpg, name } = this.props.item
        return (
            <div>
                <img className="card-img-top" src={imgSrc_jpg} alt={imgSrc_jpg} />
                <div className="card-body">
                    <p className="card-title">{name}</p>
                    <button className="btn btn-outline-success" onClick={() => this._chooseCloth(this.props.item)}>Thử đồ</button>
                </div>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         setModel: (payload, img) => {
//             const action = {
//                 type: 'SET_CLOTH_MODEL',
//                 payload,
//                 img
//             }
//             dispatch(action)
//         }
//     }
// }



export default connect()(ProductItem)
