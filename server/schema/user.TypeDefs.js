let { gql } = require('apollo-server')

let userTypeDefs = gql`

type CreateUserMutationResponses{
    token:String,
    text:String,
    color:String,
    success:Boolean

}

 type Query{
    details:String
}

 type Mutation{
    createUser(name:String,email:String,password:String,img:String):CreateUserMutationResponses
}


`

module.exports = userTypeDefs