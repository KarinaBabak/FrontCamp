export default class TitleBuilder {
    
    build(title) {
        this.checkExistingTitle();
        return '<h3 id="titleSource">' + "News from " + title + '</h3>'
    };

    checkExistingTitle() {
        let existingTitle = document.getElementById('titleSource');
        if(existingTitle) {
            existingTitle.remove();
        }
    }
}