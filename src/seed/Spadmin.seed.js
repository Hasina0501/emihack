const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();
const {sendCreated, sendError} = require('../utils/asyncHandler.utils');
const bcrypt = require('bcrypt')


const seed = async (res,req,next)=>{
    try {
        const superAdmin= await prisma.users.create({
        name: "Hasina",
        email: process.env.email,
        password: bcrypt.hash(process.env.password, 10)
    })
        sendCreated(res, superAdmin);
        next();
    } catch (error) {
        sendError(res, error);
    }
}