import { Args, Query, Resolver } from 'type-graphql';
import visaoLibertaria from '../services/visao-libertaria';

import { ArticleType } from '../types/article';
import { CategoryArgsType, DefaultArgsType, SearchArgsType } from '../types';

const type = 'article';
const { VISAO_LIBERTARIA_API } = process.env;

function handleArticleResponse(articles: any[]): ArticleType[] {
  return articles.map((article) => {
    article.status = article.statusName;
    article.description = article.startingText;

    if (!article.authors) article.authors = {};
    article.authors.status = article.authors.statusText;

    article.category = article.categories?.categories?.map((category: any) => ({
      name: category.label,
      label: category.category,
    }));

    article.image = `${VISAO_LIBERTARIA_API}/article/image?id=${article.id}`;

    return article;
  });
}

@Resolver()
class ArticleResolver {
  @Query(() => [ArticleType])
  async articleList(@Args() { ini, max }: DefaultArgsType) {
    const response = await visaoLibertaria.get<any>(type, 'list', { ini, max });
    const articles = handleArticleResponse(response.data.articles);

    return articles;
  }

  @Query(() => [ArticleType])
  async articleCategory(@Args() { categ, ini, max }: CategoryArgsType) {
    const response = await visaoLibertaria.get<any>(type, 'category', { categ, ini, max });
    const articles = handleArticleResponse(response.data.articles);

    return articles;
  }

  @Query(() => [ArticleType])
  async articleSearch(@Args() { search, ini, max }: SearchArgsType) {
    const response = await visaoLibertaria.post<any>(type, 'search', { SearchString: search }, { ini, max });
    const articles = handleArticleResponse(response.data.articles);

    return articles;
  }
}

export default ArticleResolver;
