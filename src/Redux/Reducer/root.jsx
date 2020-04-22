import { combineReducers } from 'redux'
import { ProductReducer } from './ProductReducer.jsx'
import { CategoriesReducer } from './CategoriesReducer.jsx'

const RootReducer = combineReducers({
    ProductReducer, 
    CategoriesReducer

})

export default RootReducer