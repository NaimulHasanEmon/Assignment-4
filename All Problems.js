function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        console.log('Invalid input!');
        return;
    }
    return (ticketSale * 120) - (500 + (8 * 50));
}


function checkName(name) {
    if (typeof name !== 'string') {
        return 'invalid';
    }

    name = name.toLowerCase();

    if (name[name.length - 1] === 'a' ||
        name[name.length - 1] === 'y' ||
        name[name.length - 1] === 'i' ||
        name[name.length - 1] === 'e' ||
        name[name.length - 1] === 'o' ||
        name[name.length - 1] === 'u' ||
        name[name.length - 1] === 'w') {
        return 'Good Name';
    }
    return 'Bad Name';
}


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


function password(obj) {
    if (!(obj.hasOwnProperty('birthYear'))) {
        return "invalid";
    }
    let yearDigit = obj['birthYear'].toString();

    if(!(obj.hasOwnProperty('name') && obj.hasOwnProperty('birthYear') && obj.hasOwnProperty('siteName')) || (yearDigit.length < 4)) {
        return "invalid";
    }
    let capitalName = obj["siteName"];
    let pass = capitalName.charAt(0).toUpperCase() + capitalName.slice(1).concat("#").concat(obj['name']).concat("@").concat(obj['birthYear']);
    return pass;
}


function monthlySavings(arr, livingCost) {
    if (Array.isArray(arr) === false || typeof livingCost !== 'number') {
        return "invalid input";
    }
    let total = 0;
    for (let i of arr) {
        if (i >= 3000) {
            total -= i * 0.2;
        }
        total += i;
    }
    if (total >= livingCost) {
        return total - livingCost;
    }
    return 'earn more';
}