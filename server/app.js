let { ApolloServer } = require('apollo-server')
require('dotenv').config()
let mongoose = require('mongoose');
const User = require('./model/user');
const rootResolvers = require('./resolver');

const rootTypeDefs = require('./schema');
mongoose.connect(`mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@social.qepvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('connected mongodb,Alhamdulillah');
})

let server = new ApolloServer({
    resolvers: rootResolvers,
    typeDefs: rootTypeDefs,
    context: ({ req }) => {

        let token = req.headers.authorization
        return {
            token
        }
        // throw new AuthenticationError('you must be logged in')
    }
})

server.listen({ port: process.env.PORT || 5000 }).then(({ url }) => {
    console.log(`server is running on ${url},alhamdulillah`);
})