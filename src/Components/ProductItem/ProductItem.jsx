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
            <>
                <img src={imgSrc_jpg} alt={imgSrc_jpg} />
                <p>{name}</p>
                <button className="btn btn-success" onClick={() => this._chooseCloth(this.props.item)}>Thử đồ</button>
            </>
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
