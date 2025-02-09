/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let currentVal = init
    let object = {
        increment: function() {
            currentVal++;
            return currentVal;
        },
        decrement: function() {
            currentVal --;
            return currentVal; 
        },
        reset: function() {
            currentVal = init;
            return currentVal;
        }
        
    }

    return object;
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */