import {
    ARTICLE_REQUEST,
    ARTICLE_SUCCESS,
    ARTICLE_FAIL
} from '../constants/articleConstants'

export const articleReducer = (state = { }, action) => {
    switch (action.type) {
        case ARTICLE_REQUEST:
            return { loading: true }
        case ARTICLE_SUCCESS:
            return { loading: false, article: action.payload }
        case ARTICLE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
