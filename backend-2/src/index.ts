import express from 'express'
import zod from 'zod'
export const app = express()

app.use(express.json())

const sumInput = zod.object({
    a: zod.number(),
    b: zod.number()
})


app.post("/sum" , (req,res)=>{
    const {a , b} = req.body;

    const parseResult = sumInput.safeParse({a , b});

    if(!parseResult.success){
        return res.status(400).json({error: "invalid input"})
    }
    const answer = a + b;
    return res.status(200).json({answer}    )
})