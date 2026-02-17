 import {describe , expect , it} from '@jest/globals'

 import { sum ,multiply } from '../index'

 describe('sum' , ()=>{
     

    it('adds 1+2 to equals to  3' , ()=>{

        const result = sum(1,2);
         expect(result).toBe(3);
    })

    it('adds 3+4 is equals to 7' ,()=>{
         expect(sum(3,4)).toBe(7)
    })

 })

 describe('Testing in multiply function' , ()=>{
      
    it('multiply 5*2 equals to 10',()=>{
         
        expect(multiply(5,2)).toBe(10);
    })

    it('multiply 5*5 equals to 25',()=>{
         
        expect(multiply(5,5)).toBe(25);
    })




 })