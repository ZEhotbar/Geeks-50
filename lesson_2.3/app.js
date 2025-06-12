        // <div class="squer"></div>

function creatSquere() {
    const squer  =  document.createElement("div");
    squer.className = "squer";
    return squer;
 }

function createFild(size) {
const appContainer = document.querySelector(".container");
appContainer.innerHTML = "";
for(let i = 0; i < size; i++) {
    const newSquer = creatSquere();
    appContainer.append(newSquer)
    }
}

createFild(252)


const squares = document.querySelectorAll(".squer   ");

for(const squer of squares){
    squer.onmouseover = function(){
        on (squer);
    }
    squer.onmouseleave = function(){
        off(squer)
    }
}

function on(element){
    element.style.backgroundColor = "red";
}
function off(element){
    element.style.backgroundColor = "#555";
}
