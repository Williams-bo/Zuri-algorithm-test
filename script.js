// 1. convertFahrToCelsius algorithm
function printDeg(F) {
  let H = JSON.stringify(F);

  if (typeof F === "number" || !isNaN(parseFloat(F))) {
    let C = ((F - 32) * 5) / 9;
    document.querySelector(".printDeg").innerText = Number(C.toFixed(4));
    return Number(C.toFixed(4));
  } else if (Array.isArray(F)) {
    document.querySelector(
      ".printDeg"
    ).innerText = `${H} is not a number but a/an array`;
    return `${H} is not a number but a/an array`;
  } else {
    document.querySelector(
      ".printDeg"
    ).innerText = `${H} is not a number but a/an ${typeof F}`;
    return `${H} is not a number but a/an ${typeof F}`;
  }
}
console.log(printDeg());

// 2. checkYuGiOh algorithm
function checkYuGiOh(n) {
  let check = parseFloat(n);
  if (!check) {
    return `iNVALID PARAMETER: ${JSON.stringify(n)}`;
  }

  let result = [];
  for (let i = 1; i <= n; i++) {
    let stored_value = [];

    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
      stored_value.push("yu-gi-oh");
    } else if (i % 2 == 0 && i % 3 == 0) {
      stored_value.push("yu-gi");
    } else if (i % 2 == 0 && i % 5 == 0) {
      stored_value.push("yu-oh");
    } else if (i % 2 == 0) {
      stored_value.push("yu");
    } else if (i % 3 == 0) {
      stored_value.push("gi");
    } else if (i % 5 == 0) {
      stored_value.push("oh");
    }
    if (stored_value.length > 0) {
      result.push(stored_value.join(""));
    } else {
      result.push(i);
    }
  }
  document.querySelector(".checkYuGiOh").innerText = result;
  return result;
}
console.log(checkYuGiOh());
