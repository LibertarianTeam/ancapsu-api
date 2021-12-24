import { Field, ObjectType } from 'type-graphql';
import { AuthorType, CategoryType } from '.';

@ObjectType()
class ArticleType {
  @Field()
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  category?: CategoryType;

  @Field({ nullable: true })
  authors?: AuthorType;

  @Field({ nullable: true })
  status?: string;
}

export { ArticleType };
