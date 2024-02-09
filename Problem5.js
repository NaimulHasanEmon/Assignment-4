function monthlySavings(payments, cost) {
    if (Array.isArray(payments) === false || typeof cost !== 'number') {
        return "invalid input";
    }
    let total = 0;
    for (let i of payments) {
        if (i >= 3000) {
            total -= i * 0.2;
        }
        total += i;
    }
    if (total >= cost) {
        return total - cost;
    }
    return 'earn more';
}

let payments = [1000, 2000, 2500];
let cost = 5000;
console.log(monthlySavings([1000, 2000, 2500], 5000));