const SlidImg = document.querySelectorAll(".slid")


for (let i = 0; i < SlidImg.length; i++) {
    SlidImg[i].addEventListener("click",function () {
        for (let j =0; j < SlidImg.length; j++){
            SlidImg[j].classList.remove("active")
        }
        SlidImg[i].classList.add("active")
    })
}