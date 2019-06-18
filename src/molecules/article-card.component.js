import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = (props) =>  (
    <div className="article-row">
        <Link to={`/article/${props.article.attributes.drupal_internal__nid}`}>
            <img src={props.article.attributes.cover_image} alt={props.article.attributes.title} />
        </Link>

        <div className="content">
            <Link to={`/article/${props.article.attributes.drupal_internal__nid}`}>
                <h2>{props.article.attributes.title}</h2>
            </Link>
            <p dangerouslySetInnerHTML={{__html:props.article.attributes.body.value}}></p>
        </div>
    </div>
);

export default ArticleCard;

