export default class MenuItemBuilder {
    
    build(sourceHeading) {
        return `<li class='category'>${sourceHeading.name}
                    <ul>
                        ${(sourceHeading.sources
                            .map((source) => this.buildSource(source))).join('\n')}
                    </ul>
                </li>`;
    };

    buildSource(source) {
        return `<li id="${source.id}" class="source" title="${source.description}">
                    <img 
                        src="${source.urlToLogo}" 
                        class="source_logo" 
                        id="${source.id}"
                        <span id="${source.id}" class="source_txt">${source.name}</span>
                </li>`;
    }

}