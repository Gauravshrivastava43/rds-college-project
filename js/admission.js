(() => {
    const registerButton = document.querySelector('.registerbtn');
    registerButton.addEventListener('click', (event) => {
        event.preventDefault();
        const formData = getFormData()
        if (formData) {
            sendDataToServer(formData);
        }
        else {
            printMessage('Please fill all fields', 'danger');
        }
    });
})()

function getFormData() {
    const data = {
        firstname: document.querySelector('input[name = firstname]').value,
        middlename: document.querySelector('input[name = middlename]').value,
        lastname: document.querySelector('input[name = lastname]').value,
        course: document.querySelector('[name = course]').value,
        gender: document.querySelector('[name = gender]').value,
        country_code: document.querySelector('input[name = country_code]').value,
        phone: document.querySelector('input[name = phone]').value,
        address: document.querySelector('textarea[name = address]').value,
        email: document.querySelector('input[name = email]').value,
        password: document.querySelector('input[name = password]').value
    }
    for (let key in data) {
        if (data[key] == '') {
            console.log('Please fill all fields');
            return false;
        }
    }
    return data;
}
function sendDataToServer(data) {
    console.log(data);
    printMessage('Sending data to server...', 'info');
    const request = new XMLHttpRequest();
    request.open('POST', 'https://rdsbca.pythonanywhere.com/api/students-register', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
    request.onload = () => {
        if (request.status == 200) {
            printMessage(request.responseText, 'success');
        }
        else {
            printMessage(request.responseText, 'danger');
        }
        console.log(request.responseText);
    }
}

function printMessage(message, alertType) {
    if (document.getElementById('message')) {
        const messageDiv = document.getElementById('message');
        messageDiv.className = `alert alert-${alertType}`; // bootstrap class
        messageDiv.innerText = message;
        return;
    }
    /*if message div does not exist, create it*/
    const messageDiv = document.createElement('div');
    messageDiv.id = 'message';
    messageDiv.className = `alert alert-${alertType}`; // bootstrap class
    // messageDiv.classList.add();
    messageDiv.innerText = message;
    messageDiv.style.cssText = `width: 80%; text-align: center; margin: 0 auto; padding: 0.3%; margin-top: -3%; margin-bottom: 3%;`;
    document.body.appendChild(messageDiv);
}