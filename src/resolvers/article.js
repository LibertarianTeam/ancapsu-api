const visaoLibertaria = require('../services/visao-libertaria');

const type = 'article';
const { VISAO_LIBERTARIA_API } = process.env;

function handleArticleResponse(articles) {
  return articles.map((article) => {
    article.status = article.statusName;
    article.description = article.startingText;
    article.authors.status = article.authors.statusText;

    article.category = article.categories.categories.map((category) => ({
      name: category.label,
      label: category.category,
    }));

    article.image = `${VISAO_LIBERTARIA_API}/article/image?id=${article.id}`;

    return article;
  });
}

module.exports = {
  queries: {
    async articleList(_, { ini = 0, max = 12 }, { response }) {
      const options = { type, ini, max };
      const responseData = await visaoLibertaria.list(options);

      response.header('X-Total-Count', responseData.total);
      const articles = handleArticleResponse(responseData.articles);

      return articles;
    },
    async articleCategory(_, { categ, ini = 0, max = 12 }, { response }) {
      const options = { type, categ, ini, max };
      const responseData = await visaoLibertaria.category(options);

      response.header('X-Total-Count', responseData.total);
      const articles = handleArticleResponse(responseData.articles);

      return articles;
    },
    async articleSearch(_, { search, ini = 0, max = 12 }, { response }) {
      const options = { type, search, ini, max };
      const responseData = await visaoLibertaria.search(options);

      response.header('X-Total-Count', responseData.total);
      const articles = handleArticleResponse(responseData.articles);

      return articles;
    },
  },
};
