let idName= document.getElementById('idName');
let idNameMsgError = document.getElementById("idNameMsgError");

let idEmail=document.getElementById('idEmail');
let idEmailMsgError = document.getElementById("idEmailMsgError");

let idComentario=document.getElementById('idComentario');
let idComentarioMsgError = document.getElementById("idComentarioMsgError");

let validForm=true;

let idBtnComment= document.getElementById("idBtnComment");
idBtnComment.addEventListener('click', sendComment);

function showMsgError(htmlElement,htmlElementMsg, msg)
{
    htmlElement.setAttribute('aria-invalid', 'true');
    htmlElementMsg.innerText = msg;
    htmlElementMsg.style.display = "block";
    validForm = false;
    htmlElementMsg.classList.remove("hidden");
    htmlElementMsg.classList.add("animation");
}

function cleanMsgError(htmlElement,htmlElementMsg)
{
    htmlElement.setAttribute('aria-invalid', 'false');
    htmlElementMsg.innerText = "";
    htmlElementMsg.style.display = "none";
    htmlElementMsg.classList.remove("animation");
    htmlElementMsg.classList.add("hidden");
}

function cleanForm(){
    var inputCollection=document.getElementsByTagName("input");
    var textareaCollection=document.getElementsByTagName("textarea");
    var errorsCollection=document.getElementsByClassName("erroMessage");
    for (let index = 0; index < inputCollection.length; index++) {
        inputCollection[index].value="";
    }
    for (let index = 0; index < textareaCollection.length; index++) {
        textareaCollection[index].value="";
    }
    for (let index = 0; index < errorsCollection.length; index++) {
        errorsCollection[index].classList.remove("animation");
        errorsCollection[index].classList.add("hidden");
        errorsCollection[index].innerText = "";
        errorsCollection[index].style.display = "none";
    }
}

function validateName(string){
    if (verificarNoVacio(string)){
        if(verificarCaracteresAlfabeticos(string)){        
            if(validarLongitudCadena(idName.value, 2, 20)){ 
                cleanMsgError(idName,idNameMsgError);  
            } 
            else {
                let msg="Mínimo 2 caracteres y Máximo 20";
                showMsgError(idName,idNameMsgError,msg);
            }
        }
        else
        {
            let msg="Solo se permiten caracteres alfabéticos";
            showMsgError(idName,idNameMsgError,msg);
        }
    }else{
        let msg="Campo Obligatorio";
        showMsgError(idName,idNameMsgError,msg);        
    }
}

function validateEmail(string){
    if (verificarNoVacio(string)){            
        if(validarEmail(idEmail.value)){ 
            cleanMsgError(idEmail,idEmailMsgError);  
        } 
        else {
            let msg="E-mail inválido";
            showMsgError(idEmail,idEmailMsgError,msg);
        }
    }else{
        let msg="Campo Obligatorio";
        showMsgError(idEmail,idEmailMsgError,msg);        
    }
}

function validateComment(string){
    if (verificarNoVacio(string)){             
        if(validarLongitudCadena(idComentario.value, 2, 255)){ 
            cleanMsgError(idComentario,idComentarioMsgError);  
        } 
        else {
            let msg="Mínimo 2 caracteres y Máximo 255";
            showMsgError(idComentario,idComentarioMsgError,msg);
        }
    }else{
        let msg="Campo Obligatorio";
        showMsgError(idComentario,idComentarioMsgError,msg);        
    }
}

function sendComment(e){
    e.preventDefault();
    validForm=true;  
    validateName(idName.value.trim());
    validateEmail(idEmail.value.trim());
    validateComment(idComentario.value.trim());
   
    if(validForm){
        //Simulo envío de comentario
        //y muestro el comentario enviado
        let msg="Se ha enviado el siguiente comentario correctamente:<br><br>";
        msg=msg+"Nombre y Apellido: <strong>"+idName.value.trim().toUpperCase()+"</strong><br>";
        msg=msg+"E-mail: <strong>"+idEmail.value.trim()+"</strong><br><br>";
        msg=msg+"Comentario: <strong>"+idComentario.value.trim()+"</strong>";
        showStickyMsg(msg);
        cleanForm();
    }
}
