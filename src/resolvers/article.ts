import { Args, Query, Resolver } from 'type-graphql';
import visaoLibertaria from '../services/visao-libertaria';

import { ArticleType } from '../types/article';
import { CategoryArgsType, DefaultArgsType, SearchArgsType } from '../types';

const type = 'article';
const { VISAO_LIBERTARIA_API } = process.env;

function handleArticleResponse(articles: any[]): ArticleType[] {
  return articles.map(article => {
    const lvArticle: ArticleType = { ...article };

    lvArticle.status = article.statusName;
    lvArticle.description = article.startingText;

    if (!lvArticle.authors) lvArticle.authors = {};
    lvArticle.authors.status = article.authors.statusText || '';

    lvArticle.category = {};
    lvArticle.category.name = article.categories?.mainCategory?.label || '';
    lvArticle.category.label = article.categories?.mainCategory?.category || '';

    lvArticle.categories =
      article.categories?.categories?.map((category: any) => ({
        name: category.label,
        label: category.category,
      })) || [];

    lvArticle.image = `${VISAO_LIBERTARIA_API}/article/image?id=${article.id}`;

    return lvArticle;
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
