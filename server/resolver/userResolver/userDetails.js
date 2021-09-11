
let jwt = require('jsonwebtoken');
const User = require('../../model/user');


let userDetailsQueryResolver = async (parent, args, ctx) => {
    let { token } = ctx

    let userDecoded = await jwt.decode(token, 'horror')

    let userx = await User.findOne({ email: userDecoded.email })

    return {
        id: userx._id,
        name: userx.name,
        email: userx.email,
        img: userx.img
    }


}

module.exports = userDetailsQueryResolver