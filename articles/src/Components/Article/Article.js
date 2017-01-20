import React, { Component } from 'react';
import './article.css';
import $ from "jquery";

class Article extends Component {
  constructor(props) {
    super(props);
    
    this.articleId = props.globalState.selectedId;
    this.changeRoute = props.changeRoute;
    this.redirectToAll = this.redirectToAll.bind(this);
    this.serverUrl = props.globalState.serverUrl;
    this.state = {
        loaded: false,
        article: {}
    };

    this.getDataFromSever();
  }

  redirectToAll() {
    this.changeRoute({
        route: 'getAllArticles',
        selectedId: 0
    });
  }

  getDataFromSever() {
    debugger;
      var self = this;
      $.ajax({
        url: self.serverUrl + self.props.globalState.route,
        type: 'POST',
        data: ({
          "articleId": self.articleId
        }),
        success: function(data) {
            console.log('receivedData');
            console.log(data);
            this.setState({
                article: data,
                loaded: true
          });            
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      })
  }

  generateUrlToImage(pathImg) {
    return this.serverUrl + pathImg;
  }

  render() {
    return (
      <div>
      <p className="backLink" onClick={this.redirectToAll}>Back to all articles</p>
      <div lassName="articleBox">
        <span className="articleDate">{this.state.article.publishDate}</span>          
        <h2 className="articleTitle">{this.state.article.title}</h2>
        <img src={this.generateUrlToImage(this.state.article.imagePath)} className="articleImg" alt={this.state.article.imageTitle} role="presentation"/>
        <p>{this.state.article.content}</p>
      </div>
      </div>
    );
  }
}

export default Article;