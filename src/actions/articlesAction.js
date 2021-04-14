import { ARTICLES_LIST_REQUEST, ARTICLES_LIST_SUCCESS, ARTICLES_LIST_FAIL } from '../constants/articlesConstants';
import axios from 'axios';

export const listArticles = () => async (dispatch) => {
    try {
        dispatch({ type:ARTICLES_LIST_REQUEST })

        const { data } = await axios.get('/api/getArticles');

        dispatch({ type: ARTICLES_LIST_SUCCESS, payload: data.articles })
    } catch (error) {
        dispatch({ type: ARTICLES_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}