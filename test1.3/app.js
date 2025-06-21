const NumberSpan = document.querySelector('.number');
const buttonMuinus = document.querySelector('.muinus');
const buttonPlus = document.querySelector('.plus');
const buttonReset = document.querySelector('.reset')
let number = 0;

NumberSpan.textContent = number;

buttonMuinus.addEventListener('click', () =>{
    number--;
    NumberSpan.textContent = number;
    if (number < 0){
        NumberSpan.style.color = ('var(--color_two)');
    }
    else if (number === 0) {
        NumberSpan.style.color = ('var(--color_zero')
    }
});


buttonPlus.addEventListener('click', () => {
    number++;
    NumberSpan.textContent = number;
    if (number > 0){
        NumberSpan.style.color = ('var(--color_one)')
    }
    else if( number === 0){ { 
        NumberSpan.style.color = ('var(--color_zero)');
    }
    }
});

buttonReset.addEventListener('click', () => {
    number = 0;
    NumberSpan.textContent = number
    NumberSpan.style.color = ('var(--color_zero)');
});

