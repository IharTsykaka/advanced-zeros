module.exports = function getZerosCount(number, base) {
    var zeroCount = number;
    for(var i = 2; i <= base; i++){
        if(base % i == 0){
            var baseMax = 0;
            while(base % i == 0) { 
                baseMax++;
                base /= i;
            }
            var numCopy = number;
            var numCount = 0;
            while (numCopy / i > 0) {
                numCount += Math.floor(numCopy / i);		  
                numCopy /= i;	
            }
            if(zeroCount > numCount / baseMax)
                zeroCount = numCount / baseMax;
        }
    }
    return Math.floor(zeroCount);  
}
