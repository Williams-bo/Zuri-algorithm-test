// convertFahrToCelsius algorithm
function printDeg(F) {

    let H = JSON.stringify(F);
    
    if(typeof F === 'number' || !isNaN(parseFloat(F))) {
        let C = (F - 32) * 5/9
        return Number(C.toFixed(4));
    } else if(Array.isArray(F)) {
        return `${H} is not a number but a/an array`;
    }
    else { 
        return `${H} is not a number but a/an ${typeof F}`;
    }
}

console.log(printDeg());

// algorithm for checkYuGiOh code
function checkYuGiOh(n) {
    if (typeof n != 'number') {
        return `iNVALID PARAMETER: ${JSON.stringify(n)}`
    }

    let result = [];
    for (let i = 1; i <= n; i++) {
        let stored_value = [];

        if(i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
            stored_value.push("yu-gi-oh");
        } else if(i % 2 == 0 && i % 3 == 0) {
            stored_value.push("yu-gi");
        } else if (i % 2 == 0 && i % 5 == 0) {
            stored_value.push("yu-oh");
        } else if(i % 2 == 0) {
            stored_value.push("yu");
        } else if(i % 3 == 0) {
            stored_value.push("gi");
        } else if(i % 5 == 0) {
            stored_value.push("oh");
        } if(stored_value.length > 0) {
            result.push(stored_value.join(""))
        } else {
            result.push(i)
        }

    } return result;
}

console.log(checkYuGiOh());
