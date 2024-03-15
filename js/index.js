const container = document.querySelector(".container");

const qrCodeBtn = document.querySelector("#qr-form button");

const qrCodeInput = document.querySelector("#qr-form input")

const qrcodeImg = document.querySelector("#qr-code img")

function generateQRCode() {

  const qrCodeInputValue = qrCodeInput.value;
  console.log(qrCodeInputValue)

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando código ...";

  qrcodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`


  qrcodeImg.addEventListener("load", () => {
    container.classList.add("active")
    qrCodeBtn.innerText = "Código Gerado";
  })

}

qrCodeBtn.addEventListener("click", () => {
  generateQRCode()
})

qrCodeInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    generateQRCode()
  }
})


qrCodeInput.addEventListener("keyup", (e) => {
  if (!qrCodeInput.value) {
    container.classList.remove("active")
    qrCodeBtn.innerText = "Gerar QR Code";
  }
})