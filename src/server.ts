import 'reflect-metadata';
import './plugins/dotenv';

import { ApolloServer } from 'apollo-server';
import buildSchema from './resolvers';

async function main() {
  const schema = await buildSchema();
  const server = new ApolloServer({
    schema,
    introspection: true,
    cors: { origin: '*' },
    context: context => ({ request: context.req, response: context.res }),
  });

  const { url } = await server.listen({ port: process.env.PORT || 4000 });
  console.info(`\n\t🚀 Server ready at ${url}\n`);
}

main();
