const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const results1 = document.querySelector('#results1')

    if (height == '' || height < 0 || isNaN(height)) {
        results.innerText = `Enter a valid height ${height}`
    } else if (weight == '' || weight < 0 || isNaN(weight)) {
        results.innerText = `Enter a valid weight ${weight}`
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
        switch (true) {
            case bmi < 18.6:
                results1.innerText = `You are UnderWeight`
                break;
            case bmi > 18.6 && bmi < 24.9:
                results1.innerText = `You're weight is Normal`
                break;
            case bmi > 24.9:
                results1.innerText = `You are OverWeight`
                break;
            default:
                break;
        }
    }

})