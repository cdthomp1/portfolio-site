import { ARTICLE_REQUEST, ARTICLE_SUCCESS, ARTICLE_FAIL } from '../constants/articleConstants';
import axios from 'axios';

export const getArticle = (slug) => async (dispatch) => {
    try {
        dispatch({ type:ARTICLE_REQUEST })

        var request = {
            method: 'get',
            url: `/api/getArticle/${slug}`,
            headers: {
                slug
            }
        }

        const { data } = await axios(request);

        dispatch({ type: ARTICLE_SUCCESS, payload: data.article })
    } catch (error) {
        dispatch({ type: ARTICLE_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message })
    }
}