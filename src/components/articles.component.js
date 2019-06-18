import React, { Component } from 'react';
import axios from 'axios'
import ArticleCard from '../molecules/article-card.component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/global.scss';
import '../styles/articles.scss';


class Articles extends Component {
  state = {
    articles: []
  }

  componentDidMount () {
    const requestUrl = 
      'http://d8.localhost:8000/jsonapi/node/article' +
      '?include=field_image' +
      '&sort[sort-created][path]=created' +
      '&sort[sort-created][direction]=DESC';
    axios.get(requestUrl)
      .then(response => {
          const articles = response.data.data.map(article => {
              const imageStyles = response.data.included.filter(
                include => include.id === article.relationships.field_image.data.id
              );
              article.attributes.cover_image = imageStyles[0].links.large.href;
              return article;
          })
          this.setState({articles});
      })
  }

  render() {
    return (
        <div className="container">
            <h2>Demo API call</h2>
            { this.state.articles && this.state.articles.length ?
                <div className="articles">
                  {this.state.articles.map(article => 
                      <ArticleCard 
                      key={article.attributes.drupal_internal__nid} 
                      article={article}
                    />
                  )}
                </div>
                :
                <FontAwesomeIcon icon="spinner" size="lg" spin />
            }
        </div>
    );
  }
}

export default Articles;
