const form = document.getElementById("form");
const nomeUsuario = document.getElementById("nome-usuario");
const emailUsuario = document.getElementById("email-usuario");
const senha = document.getElementById("senha-usuario");
const senha2 = document.getElementById("senha2-usuario");

// mensagem de erro
function mostraError(input, mensagem){
    const controleForm = input.parentElement;
    controleForm.className = "form-control erro"
    const small = controleForm.querySelector('small');
    small.innerText = mensagem;
}

// sucesso

function mostraSucesso(input){
    const controleForm = input.parentElement;
    controleForm.className = "form-control sucesso";

}

// validando o e-mail

function emailValido(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   return re.test(String(emailUsuario).toLowerCase());
}


form.addEventListener("submit", function(e){
    e.preventDefault();

    if(nomeUsuario.value === ""){
        mostraError(nomeUsuario,'Favor preencher o campo Nome!')
    } else {
        mostraSucesso(nomeUsuario);
    }
    
    if(emailUsuario.value === ""){
        mostraError(emailUsuario,'Favor preencher o campo E-mail!');
    } 
    else if(!emailValido(emailUsuario.value)){
        mostraError(emailUsuario,'E-mail não é válido');

    }   
    else {
        mostraSucesso(emailUsuario);
    }
    
    if(senha.value === ""){
        mostraError(senha,'Favor preencher o campo Senha!')
    } else {
        mostraSucesso(senha);
    }

    if(senha2.value === ""){
        mostraError(senha2,'Favor confirme sua senha!')
    } else {
        mostraSucesso(senha2);
    }
})