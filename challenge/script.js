var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
var mu = document.querySelector(".contenedor-m");
var contenedorParrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

 
function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = encriptarTexto(cajatexto);
}

 function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto();
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto");
    return cajatexto.value
}

function encriptarTexto(mensaje) {
    var textoFinal = "";
    for(var i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case "a":
                textoFinal += "ai";
                break;
            case "e":
                textoFinal += "enter";
                break;
            case "i":
                textoFinal += "imes";
                break;
            case "o":
                textoFinal += "ober";
                break;
            case "u":
                textoFinal += "ufat";
                break;
            default:
                textoFinal += mensaje[i];
        }
    }
    return textoFinal;
}

function desencriptarTexto(mensaje) {
    var textoFinal = "";
    for(var i = 0; i < mensaje.length; i++) {
        switch (mensaje[i]) {
            case "a":
                textoFinal += "a";
                break;
            case "e":
            case "i":
            case "o":
            case "u":
                i += 4;
                break;
            default:
                textoFinal += mensaje[i];
        }
    }
    return textoFinal;
}


const btnCopiar = document.querySelector(".btn-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola");
    {
    margin: 0;
    padding: 0;
    font-family; 'Inter', sans-serif;
    }
    
}

);
