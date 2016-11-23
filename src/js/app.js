import newsLoad from './src/js/modules/news/news'; 

window.onload = () => {
    document.querySelectorAll('#news').addEventListener('click', (e) => {
        
        newsLoad();
    });       
};


