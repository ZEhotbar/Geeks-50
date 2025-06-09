const h1 = document.getElementById("test")

let magicNumbder = parseFloat(h1.textContent);
magicNumbder += 10;
h1.textContent = magicNumbder;
