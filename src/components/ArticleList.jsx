import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from 'react-router-dom';

const ArticleList = () => {

    const [articles, setArticles] = useState([]);

    const handleGetArticles = () => {
        axios.get("/articles/").then(
            value => {
                console.log(value.data);
                console.log(typeof value.data)
                setArticles(value.data);
            }
        )
    }

    useEffect(
        () => {
            handleGetArticles();
        },
        []
    )

    return(
        <div>
            
            {
                articles.length === 0
                ?
                    <div>
                         <p>Check Backend Connection then hit the button below</p>
                        <button className='btn btn-primary mb-3' onClick={handleGetArticles}>Show Projects</button>
                    </div>
                :
                articles.map(
                    (article, idx) => {
                        return (
                            <div key={idx} className='card mb-3'>

                                <h3 className='card-title'>{article.title}</h3>
                                <div className='card-body'>
                                    { article.content }
                                </div>
                                <div className='card-footer'>
                                    <span>
                                        <Link to={`/articles/${article.id}`} className='btn btn-primary'>View Article</Link>
                                    </span>
                                    <span className="d-flex justify-content-between">
                                        <small className="text-muted">{ article.author }</small>
                                        <small className="text-muted">{ article.date }</small>
                                    </span>
                                </div>
                            </div>
                        )
                    } 
                )
            }
        </div>
    )

}

export default ArticleList;