let color = prompt("Цвет светофора")

if (color === "Красный") {
    console.log('Стой!!!')
    alert('Стой')
} else if (color === 'Зеленый') {
    console.log ('Газуй')
    alert('Газуй')
} else if (color === 'Желтый') {
    console.log('Жди')
    alert('ЖДИ')
} else  {
    console.log("Неправильный ввод :)")
    alert("Error неверный ввод")
}

alert('lol')