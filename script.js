function abrirNovaTela(){
    var login = document.getElementById("login")
    var senha = document.getElementById("senha")
    
    if(login.value.toLowerCase() === "melissa" && senha.value.toLowerCase() === "miguel"){
        window.location = "amor.html"
    } else{
        alert("Erro. DICA: CASAL DE FILHOS COM A LETRA M")
    }

}