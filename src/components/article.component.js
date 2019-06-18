import React, { Component } from 'react';
import axios from 'axios'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../styles/global.scss';

class Article extends Component {
  state = {
    articleDetail: []
  }

  componentDidMount () {
    const requestUrl = 
      'http://d8.localhost:8000/jsonapi/node/article' +
      '?include=field_image' +
      `&filter[nid][value]=${this.props.articleNid}`;
      
    axios.get(requestUrl)
      .then(res => {
          const articleDetail = res.data.data.map(article => {
              const imageStyles = res.data.included.filter(
                include => include.id === article.relationships.field_image.data.id
              );
              article.attributes.cover_image = imageStyles[0].links.large.href;
              return article;
          })
          this.setState({articleDetail});
      })
  }

  render() {
    return (
      <div className="container article-detail">
        { this.state.articleDetail && this.state.articleDetail.length ?
          <div>
            <img 
            src={this.state.articleDetail[0].attributes.cover_image} 
            alt={this.state.articleDetail[0].attributes.title} />
            <div className="content">
                <h2>{this.state.articleDetail[0].attributes.title}</h2>
                <p dangerouslySetInnerHTML={{__html:this.state.articleDetail[0].attributes.body.value}}></p>
            </div>
          </div>
          :
          <FontAwesomeIcon icon="spinner" size="lg" spin />
        }
      </div>
    );
  }
}

export default Article;
