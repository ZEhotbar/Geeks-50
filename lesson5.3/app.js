// document.body.onclick    

const original = [45, 56, 12, 10, 8, 89, 63];

function NumberC(value) {
    const div = document.createElement("div");
    div.className = "array-item";
    div.textContent = value;
    return div;
}

const originalHtmls = original.map(NumberC);

const originalContainer = document.querySelector("#original");

originalContainer.append(...originalHtmls)

const updatedContainer = document.querySelector("#updated");
const buttons = document.querySelector(".methods");

buttons.onclick = (event) => {
    const element = event.target;
    if (element.tagName !== "BUTTON") return;

    updatedContainer.innerHTML = "";

    if (element.textContent === "map +5") {
        const updated = original.map((item) => item + 5);
        const htmls = updated.map(NumberC);
        updatedContainer.append(...htmls);
        
    }

    if (element.textContent === "map x2") {
        const updated = original.map((item) => item * 2);
        const htmls = updated.map(NumberC);
        updatedContainer.append(...htmls);
    }
    if (element.textContent === "filter > 50") {
        const updated = original.filter((item) => item > 50);
        const htmls = updated.map(NumberC);
        updatedContainer.append(...htmls);
    }
    if (element.textContent === "slice top 3") {
        const updated = original.slice(0, 3);
        const htmls = updated.map(NumberC);
        updatedContainer.append(...htmls);
    }
        
    if (element.textContent === "slice last 4") {
        const updated = original.slice(original.length - 4);
        const html = updated.map(NumberC);
        updatedContainer.append(...html);
    }
       
    if (element.textContent === "reverse") {
        
        // copy array 
        // const copyOriginal = original.slice(); №1
        // const copyOriginal = original.map( x => x); №2
        // const copyoriginal = original.filter( x => true); №3
        // const copyoriginal = [...original] №4
        const copyOriginal = Array.from(original);



        const updated = copyOriginal.reverse();
        const html = updated.map(NumberC);
        updatedContainer.append(...html);
    }
       
    if (element.textContent === "sort ascending") {
        const updated = [...original].sort((a,b) => a - b)
        const html = updated.map(NumberC);
        updatedContainer.append(...html);
    }
    if (element.textContent === "sort descending") {
        const updated = [...original].sort((a,b) => a + b)
        const html = updated.map(NumberC);
        updatedContainer.append(...html);
    }
};