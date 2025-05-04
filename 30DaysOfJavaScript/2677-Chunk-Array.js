/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunkedArr = [];

    if (arr.length === 0) {
        return arr;
    }

    for(let i = 0; i < arr.length; i+= size) {
        let subArr = [];
        for (let j = i; j < i + size && j < arr.length; j++) {
            subArr.push(arr[j]);
        }   
        chunkedArr.push(subArr);
    }

    return chunkedArr;
};
