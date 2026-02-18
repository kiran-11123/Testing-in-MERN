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

    if(a > 10000000 || b > 10000000){
        return res.status(422).json({error: "input too large"})
    }


    const answer = a + b;

  const result = await  prisma.request.create({
        data:{

            type: "sum",
            a : a,
            b : b,
            result: answer
           
        }
    })  


    return res.status(200).json({answer , result}    )
})



app.post("/multiply" , async (req,res)=>{
    const {a , b} = req.body;

    const parseResult = sumInput.safeParse({a , b});

    if(!parseResult.success){
        return res.status(400).json({error: "invalid input"})
    }

    if(a > 10000000 || b > 10000000){
        return res.status(422).json({error: "input too large"})
    }


    const answer = a * b;

   await  prisma.request.create({
        data:{

            type: "multiply",
            a : a,
            b : b,
            result: answer
           
        }
    })  


    return res.status(200).json({answer}    )
})