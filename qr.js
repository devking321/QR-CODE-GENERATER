const input = document.getElementById("qr-input");
const size = document.getElementById("size");
const qrDiv = document.querySelector(".qr");
const generate = document.getElementById("generate");
const download = document.getElementById("download");

download.disabled=true;

generate.addEventListener("click", () => {
    if (input.value.length >= 1) {
        genQrCode();
        download.style.visibility="visible"
    }
    else {
        alert("Enter Text or URL")
    }

    
});

function genQrCode() {
    download.disabled=false;
    qrDiv.innerHTML = ""
    new QRCode(qrDiv, {
        text: input.value,
        height: size.value,
        width: size.value,
        colorLight: "white",
        colorDark: "black"
    })
};

download.addEventListener("click",()=>{
   const img = document.querySelector(".qr img");

   if(img !== null){
    let imgAt = img.getAttribute("src");
    download.setAttribute("href",imgAt);
   }
   else{
   download.disabled
   }
    // const link = document.createElement("a");
    // link.href=img.src;
    // link.download="qrcode.png";
   
})