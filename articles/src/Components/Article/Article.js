import React, { Component } from 'react';
import './article.css';
import $ from "jquery";

class Article extends Component {
  constructor(props) {
    super(props);
    debugger;
    this.articleId = props.globalState.selectedId;
    this.changeRoute = props.changeRoute;
    this.redirectToAll = this.redirectToAll.bind(this);
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
        url: 'http://localhost:4000/' + self.props.globalState.route,
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

  render() {
    return (
      <div>
      <p className="backLink" onClick={this.redirectToAll}>Back to all articles</p>
      <div className="articleBox">
        <span className="articleDate">{this.state.publishDate}</span>          
        <h2 className="articleTitle">{this.state.title}</h2>
        <img src='picture1484296905157.jpeg' className="articleImg" alt='imgName' role="presentation"/>
        <p> </p>
      </div>
      </div>
    );
  }
}

export default Article;
