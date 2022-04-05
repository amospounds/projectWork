for (let i = 1; i <= 100; i++){
    if (i % 2 === 0){
        EvenGroup.push(i);
    }
    else{
        OddGroup.push(i);
    }
}

console.log(EvenGroup.length + " is even");  
console.log(OddGroup.length + " is odd");