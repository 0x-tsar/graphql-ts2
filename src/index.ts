const { ApolloServer, gql } = require("apollo-server");

const typeDefs = {};

const resolvers = {};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`server started at: ${url}`));
