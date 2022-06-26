import { capitalize } from '../scripts/capitalize';

test("capitalizes 1st letter",()=>{
    expect(
        capitalize("ahoy")
    ).toMatch("Ahoy")
})