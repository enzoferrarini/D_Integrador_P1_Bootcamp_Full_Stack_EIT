let idName= document.getElementById('idName');
let idNameMsgError = document.getElementById("idNameMsgError");

let idCategory=document.getElementById('idCategory');
let idCategoryMsgError = document.getElementById("idCategoryMsgError");

let idBrand=document.getElementById('idBrand');
let idBrandMsgError = document.getElementById("idBrandMsgError");

let idPrice=document.getElementById('idPrice');
let idPriceMsgError = document.getElementById("idPriceMsgError");

let idStock=document.getElementById('idStock');
let idStockMsgError = document.getElementById("idStockMsgError");

let idShortDesc=document.getElementById('idShortDesc');
let idShortDescriptMsgError = document.getElementById("idShortDescriptMsgError");

let idStartAge=document.getElementById('idStartAge');
let idStartAgeMsgError = document.getElementById("idStartAgeMsgError");

let idEndAge=document.getElementById('idEndAge');
let idEndAgeMsgError = document.getElementById("idEndAgeMsgError");

let idLongDesc=document.getElementById('idLongDesc');
let idDelivery=document.getElementById('idDelivery');

let idPictureFile=document.getElementById('idPictureFile');
let idFileError = document.getElementById("idFileError");
let validForm=true;

let idBtnAddProduct= document.getElementById("idBtnAddProduct");
idBtnAddProduct.addEventListener('click', addProduct);

let btnFileLoad= document.getElementById("btnFileLoad");
btnFileLoad.addEventListener('click', callFileLoad);

function callFileLoad(e)
{
    e.preventDefault();
    var idPictureFile = document.getElementById('idPictureFile');
    if (idPictureFile) {
        idPictureFile.click();
    }
}

function handleFileChange(){
    var idPictureFile = document.getElementById('idPictureFile');
    var idFileNameSelected = document.getElementById('idFileNameSelected');
    var fileName = idPictureFile.files[0].name;
    idFileNameSelected.value=fileName;
}

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
    idDelivery.checked=false;
}

//Función que almacena un producto en el LocalStorage
function saveProduct(p){
    var allProducts;
    if(localStorage.getItem('products'))
        allProducts= JSON.parse(localStorage.getItem('products'));
    else
        allProducts=[];

    allProducts.push(p);
    localStorage.setItem('products', JSON.stringify(allProducts));
    console.log(JSON.parse(localStorage.getItem('products')));
    showStickyMsg("Producto guardado exitosamente...");
    cleanForm();
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

function validateCategory(string){
    // alert();
    if (verificarNoVacio(string)){
        if(verificarCaracteresAlfabeticos(string)){        
            if(validarLongitudCadena(idCategory.value, 2, 20)){ 
                cleanMsgError(idCategory,idCategoryMsgError);  
            } 
            else {
                let msg="Mínimo 2 caracteres y Máximo 20";
                showMsgError(idCategory,idCategoryMsgError,msg);
            }
        }
        else
        {
            let msg="Solo se permiten caracteres alfabéticos";
            showMsgError(idCategory,idCategoryMsgError,msg);
        }
    }else{
        let msg="Campo Obligatorio";
        showMsgError(idCategory,idCategoryMsgError,msg);        
    }
}

function validateBrand(string){
    if (verificarNoVacio(string)){
        if(verificarCaracteresAlfabeticos(string)){        
            if(validarLongitudCadena(idBrand.value, 2, 20)){ 
                cleanMsgError(idBrand,idBrandMsgError);  
            } 
            else {
                let msg="Mínimo 2 caracteres y Máximo 20";
                showMsgError(idBrand,idBrandMsgError,msg);
            }
        }
        else
        {
            let msg="Solo se permiten caracteres alfabéticos";
            showMsgError(idBrand,idBrandMsgError,msg);
        }
    }else{
        let msg="Campo Obligatorio";
        showMsgError(idBrand,idBrandMsgError,msg);        
    }
}

function validateShortDesc(string){
    if (verificarNoVacio(string)){             
        if(validarLongitudCadena(idShortDesc.value, 2, 20)){ 
            cleanMsgError(idShortDesc,idShortDescriptMsgError);  
        } 
        else {
            let msg="Mínimo 2 caracteres y Máximo 20";
            showMsgError(idShortDesc,idShortDescriptMsgError,msg);
        }
    }else{
        let msg="Campo Obligatorio";
        showMsgError(idShortDesc,idShortDescriptMsgError,msg);        
    }
}

function validatePrice(string){
    if (verificarNoVacio(string)){             
        if(validarNumeroDecimal(idPrice.value)){ 
            cleanMsgError(idPrice,idPriceMsgError);  
        } 
        else {
            let msg="Solo se permiten Valores Númericos (123; 123.123,00)";
            showMsgError(idPrice,idPriceMsgError,msg);
        }
    }else{
        let msg="Campo Obligatorio";
        showMsgError(idPrice,idPriceMsgError,msg);        
    }
}

function validateStock(string){
    if (verificarNoVacio(string)){             
        if(validarNumeroEnteroPositivo(idStock.value)){ 
            cleanMsgError(idStock,idStockMsgError);  
        } 
        else {
            let msg="Solo se permiten Valores Enteros Positivos mayores que 0";
            showMsgError(idStock,idStockMsgError,msg);
        }
    }else{
        let msg="Campo Obligatorio";
        showMsgError(idStock,idStockMsgError,msg);        
    }
}

function validateAges(strStartAge, strEndAge){
    let ageStartValid=true;
    let ageEndValid=true;

    if (verificarNoVacio(strStartAge)){             
        if(validarNumeroEnteroPositivo(strStartAge)){ 
            cleanMsgError(idStartAge,idStartAgeMsgError);  
        } 
        else {
            let msg="Solo se permiten Valores Enteros Positivos mayores que 0";
            showMsgError(idStartAge,idStartAgeMsgError,msg);
            ageStartValid=false;
        }
    }else{
        let msg="Campo Obligatorio";
        showMsgError(idStartAge,idStartAgeMsgError,msg);    
        ageStartValid=false;    
    }

    if (verificarNoVacio(strEndAge)){             
        if(validarNumeroEnteroPositivo(strEndAge)){ 
            cleanMsgError(idEndAge,idEndAgeMsgError);  
        } 
        else {
            let msg="Solo se permiten Valores Enteros Positivos mayores que 0";
            showMsgError(idEndAge,idEndAgeMsgError,msg);
            ageEndValid=false;
        }
    }else{
        let msg="Campo Obligatorio";
        showMsgError(idEndAge,idEndAgeMsgError,msg);    
        ageEndValid=false;    
    }

    if(ageStartValid && ageEndValid)
    {
        if(parseInt(strStartAge)>parseInt(strEndAge))
        {
            cleanMsgError(idEndAge,idEndAgeMsgError); 
            let msg="La edad Desde no puede ser mayor que Hasta";
            showMsgError(idStartAge,idStartAgeMsgError,msg);
        }
    }
}

function validateFileSelection(inputFile){
    if(fileSelected(inputFile))
    {
        cleanMsgError(inputFile,idFileError); 
    }
    else{
        let msg="Debe seleccionar un archivo";
        showMsgError(inputFile,idFileError,msg);
    }
}


function addProduct(e){
    e.preventDefault();
    validForm=true;  
    validateName(idName.value.trim());
    validateCategory(idCategory.value.trim());
    validateBrand(idBrand.value.trim());
    validateStock(idStock.value.trim());
    validatePrice(idPrice.value.trim());    
    validateShortDesc(idShortDesc.value.trim());
    validateAges(idStartAge.value.trim(), idEndAge.value.trim());
    validateFileSelection(idPictureFile);
    if(validForm){
        //Creo un nuevo producto que envío a LS
        const newProduct={
            nameProduct: idName.value.trim(),
            priceProduct: parseFloat(idPrice.value.trim()),
            stockProduct: parseInt(idStock.value.trim()), 
            brandProduct: idBrand.value.trim(),
            categoryProduct: idCategory.value.trim(),
            shortDescriptionProduct: idShortDesc.value.trim(),
            longDescriptionProduct: idLongDesc.value.trim(),
            freeDeliveryProduct: idDelivery.checked,
            startAgeProduct: parseInt(idStartAge.value.trim()),
            endAgeProduct: parseInt(idEndAge.value.trim()),
            pictureProduct:idPictureFile.files[0].name         
        }
        console.log(newProduct);
        saveProduct(newProduct);       
    }
}
