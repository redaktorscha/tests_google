const changeLicenseKey = (str, key) => {
    str = str.split('-').join('');

    let arr = str.toUpperCase().split('');

    let newArr = [],
        group = '';

    for (let i = arr.length - 1, k = 1; i >= 0, k <= arr.length; i--, k++) {

        group += arr[i];
        
        if (!(k % key)) {
            newArr.push(group.split('').reverse().join(''));            
            group = '';
        }
    };

    if (group.length) {
        newArr.push(group)
    };
    return newArr.reverse().join('-');
}