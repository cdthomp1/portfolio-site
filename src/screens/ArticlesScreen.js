import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listArticles } from '../actions/articlesAction.js';
import ArticleCard from "../components/ArticleCard.js"
import Navigation from '../components/Navigation';

const ArticlesScreen = () => {
    const articleDispatch = useDispatch();
    const articleList = useSelector(state => state.articleList);
    const { articles } = articleList;


    useEffect(() => {
        articleDispatch(listArticles());
    }, [articleDispatch])

    return (
        <>
            
            <h1>Articles</h1>
            <div class="post-wrapper" id="articles">
                {articles.map(article => {
                    if (article.cover_image !== null) {
                        return <ArticleCard key={article.id} article={article} />
                    } else {
                        return <></>
                    }
                }
                )}
            </div>


        </>
    )
}

export default ArticlesScreen;
