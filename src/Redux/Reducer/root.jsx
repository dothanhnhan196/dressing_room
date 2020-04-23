import { combineReducers } from 'redux'
import { ProductReducer } from './ProductReducer.jsx'
import { CategoriesReducer } from './CategoriesReducer.jsx'
import { ChoosenCategoryReducer } from './ChoosenCategoryReducer.jsx'
import { ModalReducer } from './ModelReducer.jsx'

const RootReducer = combineReducers({
    ProductReducer,
    CategoriesReducer,
    ChoosenCategory: ChoosenCategoryReducer,
    ModalReducer
})

export default RootReducer