export default class NewsLayoutBuilder {
    
    constructor(content) {
        this.content = content;
    }
    
    build() {
        this.content.innerHTML = `   
                <ul id="categoryList"></ul>
                <h3 id="titleSource"></h3>
                <div id="articles"></div>`;
    };
   
}