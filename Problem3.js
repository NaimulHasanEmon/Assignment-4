function deleteInvalids(array) {
    if (Array.isArray(array) === false) {
        return "Invalid Array!";
    }

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i]) === false && typeof array[i] === 'number') {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

let array = { num: [1, 2, 3] };
console.log(deleteInvalids(array));