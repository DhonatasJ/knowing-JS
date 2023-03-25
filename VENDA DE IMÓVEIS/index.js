const rName = document.getElementById(`name`);
const rSurname = document.getElementById(`surname`);
const rEmail = document.getElementById(`email`);
const rPassword = document.getElementById(`password`);
const rPasswordConfrim = document.getElementById(`passwordConfirm`);
const imgFront = document.getElementById(`img-front`);
const imgBack = document.getElementById(`img-back`);
const btnRegister = document.getElementById(`btn-register`);
let vName = document.getElementById(`vName`);
let vSurname = document.getElementById(`vSurname`);
let vEmail = document.getElementById(`vEmail`);
let vPassword = document.getElementById(`vPassword`);
let vPasswordConfirm = document.getElementById(`vPasswordConfirm`);
let vAge = document.getElementById(`vAge`);
let vCpf = document.getElementById(`vCpf`);

btnRegister.addEventListener(`click`, (e) => {
    const regEx = /^[a-zA-Z\s]+$/;
    if (!regEx.test(rName.value) || rName.value.trim() === ``) {
        e.preventDefault();
        return vName.innerHTML = `Please, enter a valid name!`
    }
    else { vName.innerHTML = ` ` }

    if (!regEx.test(rSurname.value) || rSurname.value.trim() === ``) {
        e.preventDefault();
        vSurname.innerText = "Please, enter a valid surname!";
    }
    else { vSurname.innerText = ` ` }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(rEmail.value)) {
        e.preventDefault();
        return vEmail.innerHTML = `Please, enter a valid e-mail!`
    }
    else {
        vEmail.innerHTML = ``
    }

    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[.@#$%^&+=])(?=\S+$).{8,}$/;
    if (rPassword.value.length < 8) {
        e.preventDefault();
        vPassword.innerHTML = `Password must contain at least 8 characters!`;
    } else if (!regexPassword.test(rPassword.value)) {
        vPassword.innerHTML = `Your password must contain uppercase and lowercase letters, numbers and special characters!`;
    } else {
        vPassword.innerHTML = ``;
    };

    if (rPasswordConfrim.value != rPassword.value) {
        vPasswordConfirm.innerHTML = `This password is not compatible with the previous password!`
    }
    else {
        vPassword.innerHTML = ``
    }
    let dateOfBirthInput = new Date(document.getElementById("date-of-birth").value);
    let today = new Date();
    let age = today.getFullYear() - dateOfBirthInput.getFullYear();
    let month = today.getMonth() - dateOfBirthInput.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < dateOfBirthInput.getDate())) {
        age--
    }

    if (age <= 18 || age.value === "") {
        vAge.innerHTML = `You need to be of legal age!`
    }
    else {
        vAge.innerHTML = ``
    }

    let cpf = document.getElementById(`myCpf`);

    function validateCPF(cpf) {
        if (typeof cpf !== 'string' || cpf.length === 0) {
            return false;
        }

        cpf = cpf.replace(/[._-]/g, '');
        if (cpf.length != 11) {
            return false;
        }

        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf.charAt(i)) * (10 - i)
        }
        let rest = 11 - (sum % 11);
        let dig1 = rest > 9 ? 0 : rest;

        sum2 = 0;
        for (let i = 0; i < 10; i++) {
            sum2 += parseInt(cpf.charAt(i)) * (11 - i);
        }

        rest2 = 11 - (sum2 % 11);
        let dig2 = rest2 > 9 ? 0 : rest2;

        if (cpf.charAt(9) == dig1 && cpf.charAt(10) == dig2) {
            return true;
        } else {
            return false;
        }
    }

    if (!validateCPF(cpf.value)) {
        vCpf.innerText = `invalid CPF!`
    }

    function validForm() {
        if (!imgFront.value) {
            rgFront.innerText = 'Please, insert a image!';
        } else {
            rgFront.innerText = '';
        }
        return true;
    }
    validForm();

    function validFormBack() {
        if (!imgBack.value) {
            rgBack.innerHTML = `Please, insert a image!`
        }
        else {
            return true
        }
    }
    validFormBack();
});

