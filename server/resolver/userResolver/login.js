let User = require('../../model/user.js')
let jwt = require('jsonwebtoken')
let loginUserMutationResolver = async (parent, args, ctx) => {
    let { email, password, type } = args

    let userx = await User.findOne({ email })
    console.log(userx);
    if (!userx) {
        return {
            token: '',
            text: 'There is no user associated with this email',
            color: "danger",
            success: false
        }
    }
    let userxId = userx._id

    if (userx && type == 'oAuth') {
        let token = await jwt.sign({ userxId, email }, 'horro')
        return {
            token,
            text: 'Successfully,login to your account',
            color: 'success',
            success: true
        }
    }

    if (userx.password == password && type == 'manual') {

        let token = await jwt.sign({ userxId, email }, 'horro')
        return {
            token,
            text: 'Successfully,login to your account',
            color: 'success',
            success: true
        }
    } else if (type == 'manual') {
        return {
            token: "",
            text: 'Wrong credentials',
            color: 'danger',
            success: false
        }
    }


}

module.exports = loginUserMutationResolver