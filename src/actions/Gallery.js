import { createAction } from 'redux-actions'
import thunk from 'redux-thunk'
import * as ACTION_TYPES from './constants'

const ENDPOINT = 'https://api.dribbble.com/v1/shots'
const ACCESS_TOKEN = 'access_token=859f432cad2e206603ed29d9c5728f0c14673e2ea14c453b07f3b05a36cd2fea'

export const fetchGalleryShots = () => dispatch => {
    dispatch(fetchShots())
    fetch(`${ENDPOINT}?${ACCESS_TOKEN}`)
        .then(response => response.json())
        .then(shots => dispatch(fetchSuccess(shots)))
        .catch(error => dispatch(fetchReject(error)))     
}

export const fetchShots = createAction(
    ACTION_TYPES.FETCH_SHOTS,
    promise => promise
)

export const fetchSuccess = createAction(
    ACTION_TYPES.FETCH_SHOTS_SUCCESS,
    shots => shots
)

export const fetchReject = createAction(
    ACTION_TYPES.FETCH_SHOTS_REJECT,
    error => error
)