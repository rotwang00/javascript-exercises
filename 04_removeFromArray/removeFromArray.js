const removeFromArray = function(arr, ...toBeRemoved) {
    for (let element of toBeRemoved) {
        let index = arr.indexOf(element);
        if (index !== -1) {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
