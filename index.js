
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
    window.location.reload(true);
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
        setFasle(firstname,'Please fill this field');
    } else {
        setTrue(firstname);
    }

    if(m_name_value === '') {
        //show error
        setFasle(middlename,'Please fill this field');
    } else {
        setTrue(middlename);
    }

    if(l_name_value === '') {
        //show error
        setFasle(lastname,'Please fill this field');
    } else {
        setTrue(lastname);
    }
//////////////////////////////////////////////////////////////////////////////
    if(gender_value === '') {
        //show error
        setFasle(mail,'Please fill this field');
    } else {
        setTrue(mail);
    }
///////////////////////////////////////////////////////////////////////////////
    if(phone_value === '') {
        //show error
        setFasle(phone,'Please fill this field');
    } else if(!ValidPhone(phone_value)) {
        setFasle(phone,'Phone number is not valid');
    } else{
        setTrue(phone);
    }

    if(mail_value === '') {
        //show error
        setFasle(mail,'Please fill this field');
    } else if(!Validmail(mail_value)){
        setFasle(mail, 'Email is not valid');
    } else {
        setTrue(mail);
    }
    
    if(postal_value === '') {
        //show error
        setFasle(postal,'Please fill this field');
    } else {
        setTrue(postal);
    }
}

function setFasle(input, message) {
    const fillGroup =input.parentElement;
    const small = fillGroup.querySelector('small');

    small.innerText = message;
    fillGroup.className = 'fill-group error select';
}

function setTrue(input) {
    const fillGroup =input.parentElement;
    fillGroup.className = 'fill-group success select';
}

function Validmail(mail){
    return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(mail);
}

function ValidPhone(phone){
    return /^[0-9]{10}$/.test(phone);
}