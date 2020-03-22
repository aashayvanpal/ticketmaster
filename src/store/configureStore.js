import { createStore, combineReducers } from 'redux'
import countReducer from '../reducers/count.js'

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer
    })
    )
    return store
}

export default configureStore