import React, { Component } from 'react';
import './article.css';
import $ from "jquery";

class ArticleCollection extends Component {
    constructor(props) {
            
        super(props);
        this.articles = [];
        this.changeRoute = props.changeRoute;
        this.selectArticle = this.selectArticle.bind(this);

        this.state = {
            loaded: false,
            articles: []
        };

        this.getDataFromSever(); 
    }

    selectArticle(e, id) {
        this.changeRoute({
            route: 'getArticle',
            selectedId: id
        });
  }

    getDataFromSever() {
      var self = this;
      $.ajax({
        url: self.props.globalState.serverUrl + self.props.globalState.route,
        dataType: 'json',
        type: 'POST',
        cache: false,
        success: function(data) {
            this.setState({
                articles: data,
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
            {
                this.state.loaded ?
                    this.state.articles.map((article) => 
                    <div key={article._id} data-id={article._id} onClick={(e) => {this.selectArticle(e, article._id)}} className="article">
                        <div className="cover_article" style={{backgroundImage: `url('${this.props.globalState.serverUrl + article.imagePath}')`}} role="presentation"></div>
                        <div className="info"><i>{article.publishDate}</i></div>
                        <div className="title">{article.title}</div>
                        <div className="description">{article.description}</div>
                    </div>
                    )   
                    : <div>Loading... </div>   
            }
            </div>
        );
  }
}

export default ArticleCollection;
