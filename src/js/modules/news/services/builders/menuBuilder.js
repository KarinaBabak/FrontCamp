import MenuItemBuilder from './menuItemBuilder';

export default class MenuBuilder {
    constructor() {
        this.item = new MenuItemBuilder();
    }
    
    build(sourceHeadings) {
        return sourceHeadings
                .map ((sourceHeading) => {
                    return this.item.build(sourceHeading);
                })
                .join('');
    };

}