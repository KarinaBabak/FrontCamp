import React, { Component } from 'react';
import './article.css';
import $ from "jquery";

class Article extends Component {
  constructor(props) {
    super(props);
    this.articleId = props.globalState.selectedId;
    this.changeRoute = props.changeRoute;
    this.redirectToAll = this.redirectToAll.bind(this);
    console.log(this.props.url);
  }

  redirectToAll() {
    this.changeRoute({
        route: 'getAllArticles',
        selectedId: 0
    });
  }

  render() {
    return (
      <div>
      <p className="backLink" onClick={this.redirectToAll}>Back to all articles</p>
      <div className="articleBox">
        <span className="articleDate">s</span>          
        <h2 className="articleTitle">100 Women: How South Korea stopped its parents aborting girls</h2>
        <img src='picture1484296905157.jpeg' className="articleImg" alt='imgName' role="presentation"/>
        <p> For every 100 baby girls born in India, there are 111 baby boys. In China, the ratio is 115 to 100. One other country saw similar rates in 1990, but has since brought its population back into balance. How did South Korea do it? Yvette Tan reports.
"One daughter is equal to 10 sons," was the message desperately being promoted by the South Korean government.
It was some two decades ago and gender imbalance was at a high, reaching 116.5 boys for every 100 girls at its peak. The preference for sons goes back centuries in Korean tradition. They were seen to carry on the family line, provide financial support and take care of their parents in old age.
"There was the idea that daughters were not regarded as part of their own family after marriage," says Ms Park-Cha Okkyung, the executive director of the Korean Women's Associations United.
The government was looking for a solution - and fast.
In an effort to reduce the incidence of selective abortions, South Korea enacted a law in 1988 making it illegal for a doctor to reveal the gender of a foetus to expectant parents.
At the same time women were also becoming more educated, with many more starting to join the workforce, challenging the convention that it was the job of a man to provide for his family.
It worked, but it was not for one reason alone. Rather, a combination of these factors led to the eventual gender rebalancing.
South Korea was acknowledged as the "first Asian country to reverse the trend in rising sex ratios at birth", in a report by the World Bank.
In 2013, the ratio was down to 105.3, a number comparable to major Western nations such as Canada.</p>
      </div>
      </div>
    );
  }
}

export default Article;
