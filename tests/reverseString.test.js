import { reverseStr } from '../scripts/reverseString';

test("spell it backwards i'll show you",()=>{
    expect(
        reverseStr("love")
    ).toMatch("evol") 
})