import { createAction } from 'redux-actions'
import * as ACTION_TYPES from './constants'

export const voteA = createAction(
    ACTION_TYPES.AB_VOTE_A,
    vote => vote
)

export const voteB = createAction(
    ACTION_TYPES.AB_VOTE_B,
    vote => vote
)

export const voteDisable = createAction(
    ACTION_TYPES.AB_VOTE_DELETE,
    disable => disable
)


