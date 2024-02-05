module.exports = {
calculator : function (x, y, operation) {

    switch (operation) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            /* Comparison Operator == */
            if(y == 0 ){
                return new Error("Y cannot be 0");
            } else {
                 return x / y ;   
            }
        default:
            break;
    }
},

printObject : function (object) {
    for (const key in object){
        const element = object[key];
        console.log(element);
    }
},

printArray : function(array){
    console.log(array);
    console.log(array.length);
}

}