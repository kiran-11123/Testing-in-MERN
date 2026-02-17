import express from 'express'
import zod from 'zod'
export const app = express()
app.use(express.json())


const sumInput = zod.object({
    a:zod.number(),
    b:zod.number()
})





app.post("/sum" , (req,res)=>{

    const parsedResponse = sumInput.safeParse(req.body);

    if(!parsedResponse.success){

        return res.status(400).json({
            message : "Invalid input"
        })  



    }
     
    const a  = req.body.a;
    const b = req.body.b;

    const answer = a+b;

    return res.status(200).json({
        answer
    })
})



 



