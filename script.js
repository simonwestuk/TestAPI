regForm.onsubmit = async function(e) {

    e.preventDefault();

    let data = {}

    let formData = new FormData(regForm);

    formData.forEach((value, key) => 
    {
        data[key] = value
    });

    let response = await fetch('https://localhost:44309/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).catch(function (error) {
        console.log(error);
    });

    let result = await response.json();
    console.log(result)
    let errorArr = Object.values(result.errors);
    console.log(errorArr.length)
    let errorMsg = ''

    for(let i = 0; i < errorArr.length; i++)
    {
       // console.log(errorMsg += errorArr[i].errors[0].errorMessage + '\n');
        errorMsg += errorArr[i].errors[0].errorMessage + '\n';

    }

    confirm(result.message + '\n' + errorMsg);
}