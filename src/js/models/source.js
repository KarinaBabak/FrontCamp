class Source {
    constructor(id, name, description, category, urlToLogo) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category.replace(/-/g, ' ');
        this.urlToLogo = urlToLogo;
    }
};