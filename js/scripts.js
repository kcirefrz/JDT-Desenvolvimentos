var sendForm = document.querySelector('#submit');

sendForm.addEventListener('click', (e) => {
    let inputs = document.querySelectorAll('#input');
    let message = document.querySelector('form textarea');

    if (inputs.value == "" || message.value == "") {
        var submit = function toSubmit() {
            e.preventDefault();
        }; 
    } else {

    }
    submit();
});