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

    // calculate total 
    getCalculateTotalAmount()
}
// get input value 
function getInputValue(product) {
    const productInput = document.getElementById(`${product}-input`);
    const productInputNumber = parseInt(productInput.value);
    return productInputNumber;
}

// calculate total 
function getCalculateTotalAmount() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotalAmount = phoneTotal + caseTotal;
    const tax = subTotalAmount / 10;
    const total = subTotalAmount + tax;
    document.getElementById('sub-total').innerText = subTotalAmount;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
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

function getRemoveItem(product) {
    const productRemove = document.getElementById(`${product}-remove`);
    productRemove.style.display = 'none';

}

// handel phne remove item 
document.getElementById('phone-remove-item').addEventListener('click', function () {
    getRemoveItem('phone')
})

// handel case remove item 
document.getElementById('case-remove-item').addEventListener('click', function () {
    getRemoveItem('case')
})

