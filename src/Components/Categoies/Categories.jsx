import React, { Component } from 'react'
import { connect } from 'react-redux'

class Categories extends Component {


    renderCategoriesBtn = () => {
        let { categoriesList, setcategory, choosenCategory } = this.props
        return categoriesList.map((item, index) => {
            return (
                <div
                    key={index} className={choosenCategory === item.type ? 'btn btn-primary' : ' btn btn-light'}
                    onClick={() => setcategory(item.type)}>{item.showName}
                </div>
            )
        })
    }

    render() {
        return (
            <div className="btn-group mt-3 container-fluid">
                {this.renderCategoriesBtn()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categoriesList: state.CategoriesReducer,
        choosenCategory: state.ChoosenCategory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setcategory: (payload) => {
            const action = {
                type: 'SET_CLOTHES',
                payload
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)

