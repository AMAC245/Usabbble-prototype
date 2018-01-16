import { handleActions } from 'redux-actions'
import { createSelector } from 'reselect'
import * as ACTION_TYPES from '../actions/constants'

const initialState = {
    shots: [],
    fetching: false,
    error: false
}

const GalleryReducer = handleActions({
    [ACTION_TYPES.FETCH_SHOTS]: (state, action) => ({
        ...state,
        fetching: true
    }),

    [ACTION_TYPES.FETCH_SHOTS_SUCCESS]: (state, action) => ({
        ...state,
        shots: action.payload,
        fetching: false,
    }),

    [ACTION_TYPES.FETCH_SHOTS_REJECT]: (state, action) => ({
        ...state,
        fetching: false,
        error: action.payload
    })
}, initialState)

//export default reducers
export default GalleryReducer

//Input-selector
const galleryState = state => state.gallery

export const getGalleryShots = state => state.gallery.shots

//(selectors) prepares data to be displayed by ui
export const getGalleryFetching = createSelector(
    galleryState,
    state => state.fetching
)

export const getAnimatedShots = createSelector(
    getGalleryShots,
    shots => shots.filter(img => img.animated && img)       
)
