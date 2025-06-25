// <div class="square"></div>
function createSquare() {
  const square = document.createElement("div");
  square.className = "square";
  return square;
}

function createField(size) {
  const appContainer = document.querySelector(".container");
  appContainer.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const newSquare = createSquare();
    appContainer.append(newSquare);
  }
}

createField(160);
const squares = document.querySelectorAll(".square");


for(const square of squares) {
    square.onmouseover = function(){
        on(square);
    }
    square.onmouseleave = function(){
        off(square);
    }
}

function on(element){
    element.style.backgroundColor = "red";
}

function off(element){
    element.style.backgroundColor = "#555";
}


const sizesButtons = document.querySelectorAll("#sizes input[type=radio]");

for (const sizesButton of sizesButtons) {
    sizesButton.addEventListener("change", (event) => {
        const id = event.target.id;
        switch(id) {
            case "size-s":
                createField(64);
                break;
            case "size-m":
                createField(128);
                break;
            case "size-l":
                createField(256);
                break;
        }
    })
}2

const selectSizeS= new Event("change")
sizesButtons[0].dispatchEvent(selectSizeS)
sizesButtons[0].checked = true;