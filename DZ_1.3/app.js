const comandMony = document.getElementById("mony_span");
const comandEnergy = document.getElementById("energy_span");
const comandBtn = document.getElementById("butn_custom");

function click() {
    let mony = Number(comandMony.textContent);
    let energy = Number(comandEnergy.textContent);

    if (energy >= 10) {
        energy -= 10;
        mony += 2;
    }

    comandMony.textContent = mony;
    comandEnergy.textContent = energy;
}

comandBtn.onclick = click;



// lol