import express from 'express'
import zod from 'zod'
export const app = express()


import { prisma } from './db'


app.use(express.json())

const sumInput = zod.object({
    a: zod.number(),
    b: zod.number()
})


app.post("/sum" , async (req,res)=>{
    const {a , b} = req.body;

    const parseResult = sumInput.safeParse({a , b});

    if(!parseResult.success){
        return res.status(400).json({error: "invalid input"})
    }
    const answer = a + b;

   await  prisma.sum.create({
        data:{
            a,
            b,
            result: answer
        }
    })  


    return res.status(200).json({answer}    )
})