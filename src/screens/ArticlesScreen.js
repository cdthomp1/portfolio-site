import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listArticles } from '../actions/articlesAction.js';
import ArticleCard from "../components/ArticleCard.js"
import Loader from "../components/Loader.js";
import UhOh from "../screens/Uh-Oh"

const ArticlesScreen = () => {
    const articleDispatch = useDispatch();
    const articleList = useSelector(state => state.articleList);
    const { articles, loading, error } = articleList;


    useEffect(() => {
        articleDispatch(listArticles());
    }, [articleDispatch])

    return (
        <>
            <h1>Articles</h1>
            <div className="post-wrapper" id="articles">{ loading ? (
                <Loader />
            ) : error ? (
                <UhOh variant='danger'>{error}</UhOh>
            ) : loading === false && articles !== null ? (articles.map(article => {
                    if (article.cover_image !== null && article.draft === false) {
                        return <ArticleCard key={article.id} article={article} />
                    } else {
                        return <></>
                    }
                }
                )) : (<></>)}
            </div>
        </>
    )
}

export default ArticlesScreen;
