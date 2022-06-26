function jaancho(input){
    let average = input.reduce(  (a,b)=> a+b, 0) / input.length ;
    let min = Math.min.apply(null, input);
    let max = Math.max.apply(null, input);
    let length = input.length ;

    return { average, min, max, length };
}

export {jaancho};