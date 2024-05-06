function getArticleGenerator(articles) {

    let articleContent = Array.from(articles);

    let divEl = document.getElementById('content');
    
    return () => {
        if (!articleContent.length) {
            return
        }
        debugger
        let currArtValue = articleContent.shift();
        let newArticle = document.createElement('article');
        newArticle.textContent = currArtValue;
        divEl.appendChild(newArticle);
    }
}
