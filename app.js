function getInputNumber(isIncreasing) {
    const caseInput = document.getElementById('case-input');
    const caseInputNumber = parseInt(caseInput.value);
    if (isIncreasing) {
        caseInput.value = caseInputNumber + 1;
    } else if (caseInputNumber > 0) {
        caseInput.value = caseInputNumber - 1;
    }

}

// handel case plus btn 
document.getElementById('case-plus').addEventListener('click', function () {
    getInputNumber(true);

})
// handel case minus btn  
document.getElementById('case-minus').addEventListener('click', function () {
    getInputNumber(false);
    /* 
    const caseInput = document.getElementById('case-input');
    const caseInputNumber = parseInt(caseInput.value) ;
    caseInput.value = caseInputNumber - 1; 
    */
})