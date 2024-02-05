var obj = require('./reuse.js');

/* Object declaration */
var oStudent = {
    "studentID" : 18001,
    "studnetName" : 'Rajesh',
    "marks" : 90
}

/* Array declaration */
var oFlowers = ['Sunflower','Rose','Lily'];

obj.printObject(oStudent); 
console.log('-------------');
obj.printArray(oFlowers); 

try {
    /* Assignment Operator '=' */
    var x = obj.calculator(25,5,'/');
} catch (Error) {
    console.log(Error);
}
console.log('-------------');
console.log(x);