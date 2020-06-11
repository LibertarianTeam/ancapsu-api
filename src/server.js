require('dotenv').config();

const { ApolloServer } = require('apollo-server');

const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  cors: { origin: '*' },
  context: (context) => ({ request: context.req, response: context.res }),
});

const serverOpts = {
  port: process.env.PORT || 4000,
};

async function start() {
  const { url } = await server.listen(serverOpts);

  console.log(`\n\t🚀 Server ready at ${url}\n`);
}

start();
