import { buildSchema } from 'type-graphql';

import VideoResolver from './video';
import ArticleResolver from './article';

export default async () => {
  const schema = await buildSchema({
    resolvers: [VideoResolver, ArticleResolver],
  });

  return schema;
};
