const ratingValue = document.querySelector(".rating-value");
const starsContainer = document.querySelector(".stars");
const ratingText = document.querySelector(".label-description");

function createStar(index,isChecked) {
    const star = document.createElement("div");
    // star.className = "fa", "fa-star";
    star.classList.add("fa", "fa-star");
    if(isChecked) {
        star.classList.add("checked");
    }
    // star.setAttribute("data-index", index)
    star.dataset.index = index
    return star;
}

function createRating(rate) {
    const MAX_RATE = 5;
    starsContainer.innerHTML = "";
    for (let i = 1; i <= MAX_RATE; i++) {
        const star = createStar(i,rate >= i);
        starsContainer.append(star);
    }
}

createRating(0);

starsContainer.onclick = function(event) {
    const rate = Number(event.target.dataset.index);
    if(!rate) return;
    ratingValue.dataset.value = rate;
    createRating(rate); 
    if(rate === 5) {
        fireConfetti();
    }
}


starsContainer.onmouseover = function(event) {
    const rate = Number(event.target.dataset.index);
    if(!rate) return;
    switch(rate) {
        case 1 :
            ratingText.dataset.content = "Bule shite!!"
        case 2 :
            ratingText.dataset.content = "FUCK!!"
        case 3 :
            ratingText.dataset.content = "bead!!"
        case 4 :
            ratingText.dataset.content = "LOL!!"
        case 5:
            ratingText.dataset.content = "GOOD SUKING boy!!"
};
}

function fireConfetti() {
    confetti({    
        particleCount: 200,
        angle: 60,    
        spread: 100,
        origin: { x: 0 },    
    });
    confetti({    
        particleCount: 200,
        angle: 120,    
        spread: 55,
        origin: { x: 1 },    
    });
}