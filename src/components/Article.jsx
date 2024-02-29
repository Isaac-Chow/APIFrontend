import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Article = () => {
    const { id } = useParams();

    const [article, setArticle] = useState([]);

    const handleGetArticles = () => {
        axios.get(`/articles/${parseInt(id)}/`).then(
            value => {
                console.log(value.data);
                console.log(typeof value.data)
                setArticle(value.data);
            }
        )
    }

    // Called when the component is first rendered
    useEffect(
        () => {
            handleGetArticles();
        },
        []
    );

    return(
        <div>
            {/* <div>
                <button className='btn btn-primary' onClick={ handleGetArticles }>Show Articles</button>
            </div> */}
            <div className="container">
                <div className="row">
                    <div className="col">

                        <div className='card'>
                            <img className="card-img-top" src={article.image} alt="" />
                            <h3 className='card-title'>{ article.title }</h3>
                            <hr />
                            
                            <div className='card-body'>
                                <p>
                                    { article.content }
                                </p>
                            </div>
                            <div className='card-footer d-flex justify-content-end'>
                                <span>
                                    {/* <small className="text-muted">{ article.author }</small> */}
                                    <small className="text-muted">{ article.date } </small>
                                </span>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default Article;