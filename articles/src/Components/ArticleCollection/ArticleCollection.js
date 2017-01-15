import React, { Component } from 'react';
import './article.css';
import $ from "jquery";

class ArticleCollection extends Component {
    constructor(props) {
            
        super(props);
        this.articles = [];
        this.changeRoute = props.changeRoute;
        this.selectArticle = this.selectArticle.bind(this);
        // this.articles = [{
        //     id:1,
        //     title: "title1",
        //     content: "content1",
        //     publishDate: new Date().toLocaleDateString(),
        //     category: "category",
        //     imagePath: "picture1484296905157.jpeg",
        //     imageTitle: "imageTitle1"
        // }, {
        //     id:2,
        //     title: "title2",
        //     content: "content2",
        //     publishDate: new Date().toLocaleDateString(),
        //     category: "category",
        //     imagePath: "picture1484296905157.jpeg",
        //     imageTitle: "imageTitle2"
        // },{
        //     id:3,
        //     title: "title3",
        //     content: "content3",
        //     publishDate: new Date().toLocaleDateString(),
        //     category: "category",
        //     imagePath: "picture1484296905157.jpeg",
        //     imageTitle: "imageTitle3"
        // }];

        //this.articleId = props.globalState.articles;
    }

    selectArticle(e) {
        const { articleId } = e.target.dataset;
        this.changeRoute({
            route: 'Article',
            selectedId: articleId
        });
  }

    componentWillMount() {
    debugger;
      var self = this;
      $.ajax({
        url: 'http://localhost:4000/' + self.props.globalState.route,
        dataType: 'json',
        type: 'POST',
        cache: false,
        success: function(data) {
            console.log('receivedData');
            console.log(data);
            this.props.globalState.articles = data;
          //   self.setState({
          //       articles: data
          // });            
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      })
  }

    render() {
        debugger;
        console.log('render');
        console.log(this.state);
        return (
            <div>
            {
                this.props.globalState.articles.map((article) => 
                    <div key={article._id} data-articleId={article._id} onClick={this.selectArticle}>
                        <div className="articleBox">
                            <span className="articleDate">{article.publishDate}</span>          
                            <h2 className="articleTitle">{article.title}</h2>
                            <img src={article.imagePath} className="articleImg" alt='imgName' role="presentation"/>
                            <p>{article.content}</p>
                        </div> 
                    </div>   
            )   
            }
            </div>        
        );
  }
}

export default ArticleCollection;
