import { ARTICLES_LIST_REQUEST, ARTICLES_LIST_SUCCESS, ARTICLES_LIST_FAIL } from '../constants/articlesConstants';
import axios from 'axios';

export const listArticles = () => async (dispatch) => {
    try {
        dispatch({ type:ARTICLES_LIST_REQUEST })

        const { data } = await axios.get('https://dev.to/api/articles?username=cdthomp1');

        dispatch({ type: ARTICLES_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ARTICLES_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}