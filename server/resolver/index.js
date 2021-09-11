
let createUserMutationResolver = require("./userResolver/createUser");
let loginUserMutationResolver = require('./userResolver/login.js');
const userDetailsQueryResolver = require("./userResolver/userDetails");
let rootResolvers = {
    Query: {
        userDetails: userDetailsQueryResolver
    },
    Mutation: {
        createUser: createUserMutationResolver,
        userLogin: loginUserMutationResolver
    }
}

module.exports = rootResolvers