document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel__slide");
    let currentSlide = 0;
   
    // Función para mostrar la diapositiva actual
    function showSlide(index) {   
        slides.forEach((slide, i) => {
            let b=document.getElementById('B'+i);
            if(i === index)
            {              
                if(currentSlide==i)  
                {
                    b.style.backgroundColor='#838383';
                    slide.style.backgroundImage = 'url("img/banner/B'+index+'.png")';
                    slide.classList.toggle("hidden");	
                }		
            }
            else
            {
                b.style.backgroundColor='#e5e5e5';               
                slide.classList.add("hidden");
            }	 
        });
    }

    // Función para pasar a la siguiente diapositiva
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function selectSlide() {
        console.log(e.getAttribute('id'));
    }

    // Función para pasar a la diapositiva anterior
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Agregar eventos a los botones de siguiente y anterior
    const btnBanner = document.querySelectorAll(".buttonBanner");
    btnBanner.forEach((bb, i) => {
        bb.addEventListener('click', function(e) {
            clearInterval(intervalRefresf);            
            if(e.target.getAttribute('value')!=currentSlide)
            {currentSlide=parseInt(e.target.getAttribute('value'));
                showSlide(currentSlide);
            }
            intervalRefresf=setInterval(nextSlide, 4000);  
          });
    });

    showSlide(0);
	let intervalRefresf=setInterval(nextSlide, 4000);
    let idNoMostrar=document.getElementById("idNoMostrar");
    idNoMostrar.addEventListener('click',saveSelection); 

    showStickyMsg("Aprovecha las ofertas con todos los medios de pagos y con descuentos del <strong>20%</strong> hasta el <strong>50%</strong>. Promoción válida al <strong>31/01/2024</strong>");
    
    let htmlButtonCollecttion=document.getElementsByClassName("btn__comprar");
    for (let index = 0; index < htmlButtonCollecttion.length; index++) {
        htmlButtonCollecttion[index].addEventListener('click',addToCart);
        
    }
    
});

function addToCart(){
    showStickyMsg("Producto añadido al carrito exitosamente");
}

function saveSelection(){
    let idNoMostrar=document.getElementById("idNoMostrar");
    localStorage.setItem('showWelcomeMsg', !idNoMostrar.checked);
}



let msgInit="Bienvenido al <strong>Desafío Integral</strong> - <strong>PARTE 1</strong>";
msgInit=msgInit+"<br>";
msgInit=msgInit+"Alumno <strong>FERARINI ENZO</strong><br><br>";
msgInit=msgInit+"<strong>Cuestiones a tener en cuenta:</strong> <br>";
msgInit=msgInit+" - Los productos que se visualizan en la portada son totalmente estáticos, con lo que el <strong>Alta de Nuevos Productos</strong> solo serán almancenados en Local Storage pero no se visualizarán dinámicamente en esta primera entrega. En un corto plazo se realizarán las modificaciones necesarias para que los productos sean cargados automaticamente. <br><br>";
msgInit=msgInit+" - El mensaje que Ud. se encuentra leyendo, será visible mientras no haga click en la selección de <strong>No volver a Mostrar</strong>. Dicha selección es almacenada en el Local Storage, por lo que en caso de querer volver a visualizarlo, deberá eliminar la variable almacenada.<br><br>";
msgInit=msgInit+" - En las páginas accesibles <strong>Contacto, Alta Producto y Nosotros</strong> no se visualizarán navegaciones entre páginas. Para volver a la página principal, basta con hacer <strong>click</strong> en el logo <strong>Juguetería Cósmica</strong>.<br><br>";
msgInit=msgInit+" - Los mensajes del tipo <strong>Sticky</strong> solo permanecerán visibles por un lapso de 7seg.<br>";



if(localStorage.getItem('showWelcomeMsg')){
    let s= JSON.parse(localStorage.getItem('showWelcomeMsg'));
    if(s==true)
        mostrarPopup(msgInit);
}
else
{
    localStorage.setItem('showWelcomeMsg', true);
    mostrarPopup(msgInit);
}




