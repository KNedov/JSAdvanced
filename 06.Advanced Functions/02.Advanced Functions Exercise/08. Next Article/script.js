function getArticleGenerator(articles) {
  return () => {
    if (articles.length > 0) {
      let sentence = articles.shift();

      let div = document.getElementById("content");
      let article = document.createElement("article");

      article.textContent = sentence;
      div.appendChild(article);
    }
  };
}
