import React, { Component } from 'react'
import Header from '../../Layout/Header/Header'
import Footer from '../../Layout/Footer/Footer'
import Categories from '../../Components/Categoies/Categories'
import Products from '../../Components/Products/Products'
import Model from '../../Components/Model/Model'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="row">
                    <div className="col-6">
                        <Categories />
                        <Products />
                    </div>
                    <div className="col-6">
                        <Model />
                    </div>
                </div>
                <br/>
                <Footer />
            </div>
        )
    }
}
