import { jod, subtract, guna, bhaag } from '../scripts/calculator';

test("adds 2 numbers",()=>{
    expect(
        jod(2,2)
    )
    .toEqual(4)
})

test("subtracts 2 numbers",()=>{
    expect(
        subtract(6,2)
    )
    .toEqual(4)
})

test("multiplies 2 numbers",()=>{
    expect(
        guna(2,2)
    )
    .toEqual(4)
})

test("divides 2 numbers",()=>{
    expect(
        bhaag(8,2)
    )
    .toEqual(4)
})