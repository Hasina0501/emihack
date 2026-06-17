const loginService = require("../services/Auth.service")
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const {sendSuccess, sendError} = require("../utils/asyncHandler.utils")
const bcrypt = require('bcrypt')

const login = async (req,res)=>{
    try {
        const {email, password} = req.body
        const validPassword = await bcrypt.compare(password, user.password)
        const user = prisma.user.findUnique({where: email})
        if(!user){
            return sendError(res, "email introuvable")
        }
        if(!validPassword){
            return sendError(res, "mot de passe incorrect")
        }

        const connected = await loginService.login(req.body)
    } catch (error) {
        sendError(res, error)
    }
}

module.exports = {login}