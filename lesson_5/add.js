let color = prompt("Цвет светофора")

if (color === "Красный" || color === 'red') {
    console.log('Стой!!!')
    alert('Стой')
} else if (color === 'Зеленый' || color === 'green') {
    console.log ('Газуй')
    alert('Газуй')
} else if (color === 'Желтый' || color === "yellow") {
    console.log('Жди')
    alert('ЖДЫ')
} else  {
    console.log("Неправильный ввод :)")
    alert("Error неверный ввод")
}

alert('lol')