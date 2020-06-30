const fruitsAmount = (arr) => {

    if (arr.length < 3) {
        return arr.length;
    };

    let firstPointer = 0,
        secondPointer = 1,
        type1 = arr[firstPointer],
        type2 = null,
        fruitsQuantity = 0,
        amounts = [];

    while (firstPointer <= arr.length) {

        if (!type2 && arr[secondPointer] !== type1) {
            type2 = arr[secondPointer];
            firstPointer++;
            secondPointer++;
            fruitsQuantity++;

        } else if (type2 && (arr[secondPointer] !== type2 && arr[secondPointer] !== type1)) {
            fruitsQuantity++;
            amounts.push(fruitsQuantity);
            fruitsQuantity = 0;
            type1 = arr[firstPointer];
            type2 = null;

        } else {
            firstPointer++;
            secondPointer++;
            fruitsQuantity++;
        }

    }
    return Math.max(...amounts);

}
console.log(fruitsAmount([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));