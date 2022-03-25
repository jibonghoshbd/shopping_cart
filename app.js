function productNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(`${product}-input`);
    let productInputNumber = parseInt(productInput.value);
    if (isIncreasing) {
        productInputNumber = productInputNumber + 1;
    } else if (productInputNumber > 0) {
        productInputNumber = productInputNumber - 1;
    }
    // update total
    productInput.value = productInputNumber;
    const productTotal = document.getElementById(`${product}-total`);

    productTotal.innerText = productInputNumber * price;
}

// handel phone plus btn
document.getElementById('phone-plus').addEventListener('click', function () {
    productNumber('phone', 1219, true);

})
// hanel phne minus btn  
document.getElementById('phone-minus').addEventListener('click', function () {
    productNumber('phone', 1219, false);

})

// handel case plus btn 
document.getElementById('case-plus').addEventListener('click', function () {
    productNumber('case', 59, true);

})
// handel case minus btn  
document.getElementById('case-minus').addEventListener('click', function () {
    productNumber('case', 59, false);

})





