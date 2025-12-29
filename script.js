const input = document.getElementById("qr-input");
const size = document.getElementById("size");
const qrDiv = document.querySelector(".qr");
const generate = document.getElementById("generate");
const download = document.getElementById("download");

// download.disabled=true;

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

download.addEventListener("click",(e)=>{
    e.preventDefault();
   const img = document.querySelector(".qr img");

if(img !== null){
     fetch(img.src)
   .then( res=> res.blob())
   .then( (blob)=>{
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href=url;
    a.download="QR_Code.png";

    document.body.appendChild(a);
    a.click();

   document.body.removeChild(a);
    URL.revokeObjectURL(url); 
   } )  

}
   
})
