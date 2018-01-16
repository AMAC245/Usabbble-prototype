import { combineReducers } from 'redux'
import GalleryReducer  from './GalleryReducer'
import ABReducer from './ABReducer'


const rootReducer = combineReducers({
    ab: ABReducer,
    gallery: GalleryReducer
})

export default rootReducer