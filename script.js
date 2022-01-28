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

    confirm(result.message);
}