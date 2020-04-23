import React, { Component } from 'react'
import './StyleModel.css'
import { connect } from 'react-redux'

class Model extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contain: "images/background/background_998.jpg",
            body: "images/allbody/bodynew.png",
            bikinitop: "images/allbody/bikini_branew.png",
            bikinibottom: "images/allbody/bikini_pantsnew.png",
            model: "images/model/1000new.png",
            feetleft: "images/allbody/feet_high_leftnew.png",
            feetright: "images/allbody/feet_high_rightnew.png"
        }
    }

    renderModel = () => {
        let { model } = this.props
        return (
            <>
                <div className="bikinitop" style={{ backgroundImage: `url(${model.topclothes})`, backgroundSize: 'cover' }}></div>
                <div className="bikinibottom" style={{ backgroundImage: `url(${model.botclothes})`, backgroundSize: 'cover' }}></div>
            </>
        )
    }

    render() {
        return (
            <div className="contain mt-3" style={{ background: `url(${this.state.contain})` }}>
                <div className="body" style={{ background: `url(${this.state.body})` }}></div>
                <div className="model" style={{ background: `url(${this.state.model})` }}></div>
                <div className="bikinitop" style={{ background: `url(${this.state.bikinitop})` }}></div>
                <div className="bikinibottom" style={{ background: `url(${this.state.bikinibottom})` }}></div>
                <div className="feetleft" style={{ background: `url(${this.state.feetleft})` }}></div>
                <div className="feetright" style={{ background: `url(${this.state.feetright})` }}></div>
                {this.renderModel()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    model: state.ModalReducer
})

export default connect(mapStateToProps, null)(Model)
