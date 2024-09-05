//Create a function that takes an array of values resistance that are connected in series, 
//and calculates the total resistance of the circuit in ohms. 
//The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).
//Rule:   RT = R1 + R2 + R3 ...



function sum() {
    let arrResistance = [];

    let sumResistance = arrResistance.reduce((acc, curr) => {
        return acc + curr
        }, 0)
    

        return sumResistance
}

console.log(sum([1, 5, 6, 3]));
// console.log(arrResistance([16, 3.5, 6]));
// console.log(arrResistance([0.5, 0.5]));
