
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const msgOne = document.querySelector('#msg-01');
const msgTwo = document.querySelector('#msg-02');

weatherForm.addEventListener('submit', event => {
    event.preventDefault();
    msgOne.innerHTML = 'Please wait to fetch weather...';
    msgTwo.innerHTML = '';
    let location = search.value;
    fetch('http://127.0.0.1:3000/weather?address='+ location).then(response => {
        response.json().then(data => {
            if (data.error) {
                msgOne.innerHTML = data.error;
                return 1;
            }
            msgOne.innerHTML = data.location;
            msgTwo.innerHTML = data.forecast;
        });
    });
})