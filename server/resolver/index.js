let createUserMutationResolver = require("./userResolver/createUser");

let rootResolvers = {
    Query: {

    },
    Mutation: {
        createUser: createUserMutationResolver
    }
}

module.exports = rootResolvers