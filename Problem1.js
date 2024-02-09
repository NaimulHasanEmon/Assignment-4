function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        console.log('Invalid input!');
        return;
    }
    return (ticketSale * 120) - (500 + (8 * 50));
}

let ticketSale = 10;
console.log(calculateMoney(ticketSale));