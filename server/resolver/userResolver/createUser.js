let User = require("../../model/user")
let jwt = require('jsonwebtoken')
let createUserMutationResolver = async (parent, args, ctx) => {
    let { name, email, password, img } = args
    console.log(args);
    let alreadyUser = await User.find({ email })
    if (alreadyUser.length > 0) {
        return {
            token: null,
            text: 'Already , created account with this email',
            color: 'danger',
            success: false
        }
    }
    let newUser = new User({
        name,
        email,
        password,
        img
    })

    let userx = await newUser.save()
    let userxId = userx._id
    let token = await jwt.sign({ userxId, email }, 'horror')

    return {
        token,
        text: 'Successfully,created an account',
        color: 'succcess',
        success: 'true'
    }

}

module.exports = createUserMutationResolver