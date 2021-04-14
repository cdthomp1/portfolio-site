import {
    ARTICLES_LIST_REQUEST,
    ARTICLES_LIST_SUCCESS,
    ARTICLES_LIST_FAIL
} from '../constants/articlesConstants'

export const articlesListReducer = (state = { articles: [] }, action) => {
    switch (action.type) {
        case ARTICLES_LIST_REQUEST:
            return { loading: true, articles: [] }
        case ARTICLES_LIST_SUCCESS:
            return { loading: false, articles: action.payload }
        case ARTICLES_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

