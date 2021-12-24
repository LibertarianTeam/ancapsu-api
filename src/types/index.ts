import { ArgsType, Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
class CategoryType {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  label?: string;
}

@ObjectType()
class CollaboratorType {
  @Field({ nullable: true })
  id?: string;

  @Field({ nullable: true })
  name?: string;
}

@ObjectType()
class AuthorType {
  @Field({ nullable: true })
  suggested?: CollaboratorType;

  @Field({ nullable: true })
  authored?: CollaboratorType;

  @Field({ nullable: true })
  revised?: CollaboratorType;

  @Field({ nullable: true })
  narrated?: CollaboratorType;

  @Field({ nullable: true })
  produced?: CollaboratorType;

  @Field({ nullable: true })
  date?: string;

  @Field({ nullable: true })
  status?: string;
}

@ArgsType()
class DefaultArgsType {
  @Field(() => Int, { defaultValue: 0 })
  ini: number;

  @Field(() => Int, { defaultValue: 12 })
  max: number;
}

@ArgsType()
class CategoryArgsType extends DefaultArgsType {
  @Field()
  categ: string;
}

@ArgsType()
class SearchArgsType extends DefaultArgsType {
  @Field()
  search: string;
}

export { CategoryType, CollaboratorType, AuthorType, DefaultArgsType, CategoryArgsType, SearchArgsType };
