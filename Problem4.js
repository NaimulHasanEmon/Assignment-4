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

// let object = { name: "maisha", birthYear: 2002, siteName: "Facebook" };
console.log(password({ name: "Kolimuddin", birthYear: 200, siteName: "google" }));