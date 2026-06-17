const {bcrypt} = require("bcrypt")
const jwt = require("jsonwebtoken")
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

const login = async (credentials)=>{
    try {
        const {email, password} = Credentials
        const user = await prisma.user.findUnique({where: email})

        const token = jwt.sign(
            {
            id: user.id,
            email: user.email
            },
            process.env.jwtSecret,
            {expiresIn: "1h"}
        )
        return token
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {login}