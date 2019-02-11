import React, { Component } from 'react';
import axios from 'axios'

import './test.scss';


class Test extends Component {
  state = {
    titles: []
  }      

  componentDidMount () {
    axios.get('https://api.penguinrandomhouse.com/resources/v2/title/domains/PRH.CA/titles/9780771009433?api_key=5cn2g3jayfug88fvazhcn8na')
      .then(response => {
          const titles = response.data.data.titles.map(title => {
              const icon = title._links.filter(link => link.rel === "icon");
              title.cover = icon[0].href;
              return title;
          })
          this.setState({titles});
      })
  }

  render() {
    return (
        <div>
            <p>test api call: getTitle by ISBN</p>
            {this.state.titles.map(title => 
                <div>
                    <h2>{title.title}</h2>
                    <h3>by {title.author}</h3>

                    <img src={title.cover} alt={title.title} />

                    <p>on Sale: {title.onsale}</p>
                    <div>
                        {title.price.map(price => 
                            <p>price: {price.currencyCode} ${price.amount}</p>
                        )}
                        
                    </div>
                </div>
            )}
        </div>
    );
  }
}

export default Test;
