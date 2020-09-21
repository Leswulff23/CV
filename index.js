import './style.css';
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const middlename = document.getElementById('middlename');
const lastname = document.getElementById('lastname');
const gender = document.getElementById('gender');
const phone = document.getElementById('phone');
const mail = document.getElementById('mail');
const postal = document.getElementById('postal');

form.addEventListener('submit', (e)=> {
    e.preventDefault();
    checkInputs();
});

function checkInputs(){
    const f_name_value= firstname.value.trim();
    const m_name_value= middlename.value.trim();
    const l_name_value= lastname.value.trim();
    const gender_value= gender.value.trim();
    const phone_value= phone.value.trim();
    const mail_value= mail.value.trim();
    const postal_value= postal.value.trim();

    if(f_name_value === '') {
        //show error
        setErrorFor(firstname,'Please fill this field');
    } else {
        setSuccessFor(firstname);
    }
}

function setErrorFor(input, message) {
    const fillGroup =input.parentElement;
    const small = fillGroup.querySelector('small');

    small.innerText = message;
    fillGroup.className = 'fill-group error';
}

function setSuccessFor(input) {
    const fillGroup =input.parentElement;
    fillGroup.className = 'form-control success';
}