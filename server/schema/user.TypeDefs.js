let { gql } = require('apollo-server')

let userTypeDefs = gql`

type MutationResponses{
    token:String,
    text:String,
    color:String,
    success:Boolean

}
type UserDetails{
    id:String,
    name: String,
    email: String,
    img: String
}
 type Query{
    details:String,
    userDetails(token:String):UserDetails
}

 type Mutation{
    createUser(name:String,email:String,password:String,img:String):MutationResponses
    userLogin(email:String,password:String,type:String):MutationResponses
}


`

module.exports = userTypeDefs