(fetchDataFromServer = () => {
    document.getElementById('loading-svg').style.display = 'block';
    document.querySelector('.table-striped').style.opacity = '0%';
    printMessage('Fetching data From server...', 'info');
    const request = new XMLHttpRequest();
    request.open('GET', 'https://rdsbca.pythonanywhere.com/api/students-register', true);
    request.send();
    request.onload = () => {
        if (request.status == 200) {
            // printMessage(request.responseText, 'success');
            responseText = JSON.parse(request.responseText);
            console.log(responseText);
            const tableBody = document.getElementById('table-body');
            let i = 1;
            for (let tuple of responseText) {
                let th = document.createElement('th');
                th.innerText = i++;
                let tr = document.createElement('tr');
                tr.appendChild(th);
                for (let item of tuple) {
                    let td = document.createElement('td');
                    td.innerText = item;
                    tr.appendChild(td);
                }
                let td = document.createElement('td');
                td.innerHTML = `
                <a href="https://rdsbca.pythonanywhere.com/api/students-register/${tuple[0]}" target="_blank"><i class="material-icons icons registrationIcons">open_in_new</i></a>
                `
                tr.appendChild(td);
                tableBody.appendChild(tr);
            }
            document.getElementById('loading-svg').style.display = 'none';
            document.querySelector('.table-striped').style.opacity = '100%';
        }
        else {
            printMessage(request.responseText, 'danger');
        }
        console.log(request.responseText);
    }
})()

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
    document.getElementById('loading-svg').appendChild(messageDiv);
}