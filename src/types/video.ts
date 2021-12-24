import { Field, ObjectType } from 'type-graphql';
import { AuthorType, CategoryType } from '.';

@ObjectType()
class VideoType {
  @Field()
  id: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  youtubeLink?: string;

  @Field({ nullable: true })
  bitchuteLink?: string;

  @Field({ nullable: true })
  lbryLink?: string;

  @Field({ nullable: true })
  rumbleLink?: string;

  @Field({ nullable: true })
  dailymotionLink?: string;

  @Field({ nullable: true })
  embedLink?: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  category?: CategoryType;

  @Field({ nullable: true })
  authors?: AuthorType;

  @Field({ nullable: true })
  status?: string;
}

export { VideoType };
