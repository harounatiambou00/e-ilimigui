import { bookReducer } from "./bookReducer"

const reducers = combineReducers({
    allProducts : productReducer
})

export default reducers