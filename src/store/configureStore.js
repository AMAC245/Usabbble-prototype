import { createStore, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'


export default () => {
    const store = createStore(
        rootReducer, 
        compose(
            applyMiddleware(thunk),
            window.devToolsExtension && window.devToolsExtension() 
        )         
    )

    return store
}


