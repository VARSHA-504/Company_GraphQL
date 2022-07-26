const { ApolloServer } = require ("apollo-server");
const { makeExecutableSchema } = require  ("graphql-tools");
const { typeDefs } = require("../ApolloServer/src/schema");
const { resolvers } = require("../ApolloServer/src/resolvers");
const {applyMiddleware} = require('graphql-middleware');
// const context = require('./Context/context');
const adminSchema = require("../Models/adminSchema")
let mongoose = require("mongoose");
const jwt_decode = require('jwt-decode');
require("dotenv").config();

const context = async ({req}) =>{
  let token = req.headers.authorization
   let decoded = await jwt_decode(token);
  return decoded
  
  }

  
const schema = applyMiddleware(
    makeExecutableSchema({
      typeDefs,
      resolvers,
      context
      })
)
  
  const server = new ApolloServer({ schema, context});
  
  
  server.listen(4000).then(({ url }) => {
    console.log(`Server ready at ${url}`);

    
    mongoose.connect("mongodb+srv://test:test@demo.aoloa.mongodb.net/company?retryWrites=true&w=majority")
      .then(() => {
        console.log("Database Connected");
      })
      .catch((err) => {
        console.log(err);
      });
  
    
  });

module.exports = {context};
