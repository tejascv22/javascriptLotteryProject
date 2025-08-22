console.log("welcome to java script")
console.log("execution the forth instruction before 3 instrocution")
setTimeout(function(){
    for(i=0;i<300000000;i++){
        if (i==200000000){
            console.log("it is executed now")
        }
    }
})
console.log("it is forth instruction")