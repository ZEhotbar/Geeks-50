const inputs = document.getElementById("text_A");
const area_text = document.getElementById("All_text"); 
const limit_text = document.getElementById("left");
const max = 5;

if ( max === -1) {
    inputs.maxLength = 50;
}

area_text.textContent = "";

inputs.addEventListener("input", (event) => {
    limit_text.textContent = max;
    const cut = inputs.value.slice(0,max)
    inputs.value = cut;
    const lengths = inputs.value.length;
    area_text.textContent = lengths;             
}); 


