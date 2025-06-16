const WinterBTN = document.getElementById("winter");
const SpringBTN = document.getElementById("spring");
const SummerBTN = document.getElementById("summer");
const AutumBTN = document.getElementById("autumn");

function Winter() {
    const winterMonths = ["December", "January", "February"];
    const wrapper = document.getElementById("month-BTN");
    wrapper.innerHTML = "";

    for (let i = 0; i < winterMonths.length; i++) {
        const month = document.createElement("button");
        month.style.backgroundColor = "#b0c4de"
        month.textContent = winterMonths[i];
        wrapper.append(month);
    }
}

WinterBTN.onclick = Winter;


function Spring() {
    const springMonths = ["March","April","May"];
    const wrapper = document.getElementById("month-BTN");
    wrapper.innerHTML = "";
    for (let i = 0; i < springMonths.length; i++) {
        const month = document.createElement("button");;
        month.style.backgroundColor = "#98fb98";
        month .textContent = springMonths[i];
        wrapper.append(month); 
    }
}

SpringBTN.onclick = Spring;

function Summer () {
    const summerMonths = ["June", "july", "August"];
    const wrapper = document.getElementById("month-BTN");
    wrapper.innerHTML = "";
    for (let i = 0; i < summerMonths.length; i++) {
        const month = document.createElement("button");
        month.style.backgroundColor = "#ffeb3b";
        month.textContent = summerMonths[i];
        wrapper.append(month);
    }
}

SummerBTN.onclick = Summer;

function Autum () {
    const autumMonths = ["September", "October", "November"];
    const wrapper = document.getElementById("month-BTN");
    wrapper.innerHTML = "";
    for (let i = 0 ; i < autumMonths.length; i++) {
        const month = document.createElement("button");
        month.style.backgroundColor = "#ffa07a";
        month.textContent = autumMonths[i]
        wrapper.append(month)
    } 
}
AutumBTN.onclick = Autum;  