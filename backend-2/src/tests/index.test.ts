import {describe , expect , it ,vi} from 'vitest'
import request from 'supertest'
import { app } from '../index'
import { prisma } from '../db'


vi.mock('../db')

describe('POST /sum' , ()=>{

    it("should return the sum of two numbers" , async()=>{

       vi.mocked(prisma.request.create).mockResolvedValue({
        id: 1,
        type: "sum",
         a: 1,

         b: 2,
         result: 3
       })
         const res = (await request(app).post("/sum").send({
            a:1,
            b:2
         }));
          
         console.log(res.body)

         expect(res.statusCode).toBe(200);
         expect(res.body.result).toEqual({
            id: 1,
            type: "sum",
             a: 1,
               b: 2,
               result: 3
         });
         expect(res.body.result.result).toBe(3);
         expect(res.body.answer).toBe(3);

    })


     it("should return the sum of two negative numbers" , async()=>{
         const res = (await request(app).post("/sum").send({
            a:-1,
            b:-2
         }));

         expect(res.status).toBe(200);
         expect(res.body.answer).toBe(-3);

    })


     
})



describe('POST /multiply' , ()=>{

    it("should return the product of two numbers" , async()=>{
         const res = (await request(app).post("/multiply").send({
            a:1,
            b:2
         }));


         expect(res.statusCode).toBe(200);
         expect(res.body.answer).toBe(2);

    })


     it("should return the product of two negative numbers" , async()=>{
         const res = (await request(app).post("/multiply").send({
            a:100000000000000000000000000000,
            b:-2
         }));

         expect(res.status).toBe(422);
         expect(res.body.error).toBe("input too large");

    })


     
})