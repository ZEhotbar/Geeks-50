

const passwordNumber = document.querySelectorAll('span')
const buttonRefresh = document.querySelector('button')

function generatePassword() {
    passwordNumber.textContent = '';
    for(let i = 0 ; i < passwordNumber.length; i++) {
        const random = Math.floor(Math.random() * 10);
        passwordNumber[i].textContent = random;
}
}


buttonRefresh.addEventListener('click', generatePassword)

generatePassword();
