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

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        mostraSucesso(input);
    } 
    else {
        mostraError(input, "E-mail não é válido!")
    }
}


function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        if(input.value.trim() === ''){
            mostraError(input, `${getFieldName(input)}, compo Obrigatório!`);
        }
        else {
            mostraSucesso(input);
        }
    });
};

//Get field

function getFieldName(input){
     return input.id.charAt(0).toUpperCase() + input.id.slice(1);
} 

// check input

function checkLength(input, min, max){
    if(input.value.length < min){
        mostraError(input, `${getFieldName(input)} precisa ter no mínimo ${min} caracteres`);
    }
    else if (input.value.length > max) {
        mostraError(input, `${getFieldName(input)} não poder mais ${max} caracteres`);
    }
    else {
        mostraSucesso(input);
    }
}

// verificação se a senha é igual a confirmação de senha. 

function checkSeSenhasSaoIgauis(input1, input2) {
    if(input1.value !== input2.value) {
        mostraError(input2, "Senhas não são iguais!")
    }

}



form.addEventListener("submit", function(e){
    e.preventDefault();

    checkRequired([nomeUsuario, emailUsuario, senha, senha2]);
    checkLength(nomeUsuario, 3, 15);
    checkLength(senha, 6, 25);
    checkEmail(emailUsuario);
    checkSeSenhasSaoIgauis(senha, senha2);


    // código inicial
    
   /* if(nomeUsuario.value === ""){
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
    }*/
});