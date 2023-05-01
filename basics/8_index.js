function greet(){
    return function() {
        console.log('Inner function');
    }
}
const returnVal = greet();
returnVal();