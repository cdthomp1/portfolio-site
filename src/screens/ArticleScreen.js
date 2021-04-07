import React, { useEffect } from 'react';
import {
    useParams
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getArticle } from '../actions/articleAction.js';
import parse from 'html-react-parser';



const ArticleScreen = () => {
    const dispatch = useDispatch();
    let { slug } = useParams();

    useEffect(() => {
        dispatch(getArticle(slug));
    }, [dispatch, slug]);
    const articleObj = useSelector(state => state.article);
    const { loading, article } = articleObj;
    console.log(article)

    var body = article.sanitizedHtml

    return (
        <>
            {loading ? (<p>Loading</p>) : (parse(body))}

        </>
    )
}

export default ArticleScreen
