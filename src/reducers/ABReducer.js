import { handleActions } from 'redux-actions'
import * as ACTION_TYPES from '../actions/constants'
import { createSelector } from 'reselect'

const initialState = {
    vote: null,
    categorical: null,
    completed: false,
    disable: false
}

const ABReducer = handleActions({
    [ACTION_TYPES.AB_VOTE_A]: (state, action) => ({
        ...state,
        vote: action.payload,
        categorical: 'A',
        completed: true,
    }),

    [ACTION_TYPES.AB_VOTE_B]: (state, action) => ({
        ...state,
        vote: action.payload,
        categorical: 'B',
        completed: true
    }),

    [ACTION_TYPES.AB_VOTE_DELETE]: (state, action) => ({
        ...initialState,
        completed: true,
        disable: true
    })
}, initialState)

export default ABReducer

// Input selectors
const getABState = state => state.AB

// Selectors
export const hasRebound = createSelector(
    getABState,
    ab => ab.filter(shot => {
        shot.rebound.count > 0 && shot.id  
    })
)

export const getABVote = createSelector(
    getABState,
    abState => abState.vote
)

