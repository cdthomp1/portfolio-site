import { ARTICLE_LIST_REQUEST, ARTICLE_LIST_SUCCESS, ARTICLE_LIST_FAIL, /* PROJECT_DETAILS_REQUEST, PROJECT_DETAILS_SUCCESS, PROJECT_DETAILS_FAIL */ } from '../constants/articleConstants';
import axios from 'axios';

export const listArticles = () => async (dispatch) => {
    try {
        dispatch({ type:ARTICLE_LIST_REQUEST })

        const { data } = await axios.get('https://dev.to/api/articles?username=cdthomp1');

        dispatch({ type: ARTICLE_LIST_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ARTICLE_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}