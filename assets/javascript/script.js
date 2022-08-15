//Criptografar
const inputTexto = document.querySelector('.input-texto')
const mensagem = document.querySelector('.mensagem')
const textoSaida = document.querySelector('.texto-saida')
const btnCopiar = document.querySelector('#btnCopiar ')


function btnCriptografar() {
    const textoEncriptado = encriptar(inputTexto.value)
    if(textoEncriptado == ""){
        alert("Você precisa digitar um texto para Criptografar")
        return textoEncriptado
    }
    mensagem.value = textoEncriptado
    mensagem.style.color='#0A3871'
    textoSaida.style.display='none'
    btnCopiar.style.display='block'
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "obter"], ["u", "ufat"],["aimes", "ai"]]

    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    mensagem.style.fontSize='30px'
    return stringEncriptada
    
    
}

//Desencriptografar
function btnDescriptografar() {
    const textDesencriptado = desencriptar(mensagem.value)
    if(textDesencriptado == ""){
        alert("Digite o texto que deseja Descriptografar")
        return textDesencriptado
    }
    mensagem.value = textDesencriptado
    mensagem.style.color='#0A3871'
    mensagem.style.fontSize='30px'
   
}

function desencriptar(stringDesencriptar) {
    let desencriptarCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "obter"], ["u", "ufat"],["aimes", "ai"]]


    stringDesencriptar = stringDesencriptar.toLowerCase()

    for ( let contador = 0; contador < desencriptarCodigo.length; contador++){
        if(stringDesencriptar.includes(desencriptarCodigo[contador][1])){
            stringDesencriptar = stringDesencriptar.replaceAll(desencriptarCodigo[contador][1], desencriptarCodigo[contador][0])
        }
    }
    return stringDesencriptar
}

function copiar() {
    let conteudoCopiar = mensagem
    conteudoCopiar.select()
    document.execCommand('copy')
    alert('Conteúdo Copiado!')
    
}