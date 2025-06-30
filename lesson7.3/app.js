const textInput = document.querySelector("#url");
const qrCodeContainer = document.querySelector(".card");
const qrCodText = qrCodeContainer.querySelector("h2");


//chang input 


const options = {};

function refrechQrCode() {
    const qrcode = new QRCode("qr-box" , options)
    qrcode.clear();
    qecode.makeCode(textValue.value)
}

const qrcode = new QRCode(document.getElementById("qr-box"), {
        const options = {
        qrcode = new QRCode(document.getElementById("qr-box"),) {
        width: 256,
        height: 256,
        colorDark : qeColorInput.value,
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
        0};
    });

textInput.addEventListener("input" , () => {
    const textValue = textInput.value;
    qrCodText.textContent = textValue;
    qrcode.clear();
    qrcode.makeCode(textValue);
});
