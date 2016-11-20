class ApiWrapper {

    constructor(url = URL, apiKey = API_KEY) {
        this.url = url;
        this.apiKey = apiKey;
    }

    getRequest(request) {
        return fetch(this.url + request, {method: 'GET', mode: 'cors'})
            .then(response => response.json())
            .catch(error => console.log(error));
    };

    getArticles(source = 'bbc-news') {
        return this.getRequest(`articles?source=${source}&apiKey=${this.apiKey}`);
    };

    getSources() {
        var sources;
        return this.getRequest('sources')
            .then(data => {      
                sources = data.sources; 
                return sources;  
            })
            .catch(error => console.log(error));                   
    };
}

