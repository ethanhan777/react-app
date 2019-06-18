import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.scss';
import Articles from './components/articles.component';
import Article from './components/article.component';

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

library.add(faSpinner)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <header className="App-header">
          <Link to="/"><h1 className="page-title">React App</h1></Link>
          </header>

          <Switch>
            <Route path="/" exact component={Articles} />
            <Route exact path="/article/:id" render={(props) => {
              let articleNid = props.location.pathname.replace('/article/', '');
              return (
                <Article
                  articleNid={articleNid}
                />
              )
            }} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
