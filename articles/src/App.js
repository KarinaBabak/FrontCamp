import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './Components/Article/Article';
import ArticleCollection from './Components/ArticleCollection/ArticleCollection';
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.changeRoute = this.changeRoute.bind(this);
    
    this.state = {
      route: "getAllArticles",
      selectedId: 0,
      articles: []
    };  

  }

  changeRoute (newRoute) {
    this.setState({
      route: newRoute.route,
      selectedId: newRoute.selectedId, 
      articles: newRoute.articles
    });
  }


  render() {
    return this.state.route === "Article" ?
      <Article globalState={this.state} changeRoute={this.changeRoute} /> :
      <ArticleCollection globalState={this.state} changeRoute={this.changeRoute} />
  }
}

export default App;
