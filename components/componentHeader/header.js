function btnOpenClose(){ 
    const contenedoVentana = document.querySelector(".window-content");
   const btnAbrirVentana = document.getElementById("btn-open");
   const btnCerrarVentana = document.getElementById("btn-close");
   btnAbrirVentana.addEventListener("click", ()=>{
     contenedoVentana.style.display ="flex";
   })
   btnCerrarVentana.addEventListener("click", ()=>{
     contenedoVentana.style.display = "none"
   });
 }
function headerComponent(el){
    const componentEl = document.createElement("div");
    componentEl.className = "header_content"

    componentEl.innerHTML = `   
        <div class="header_logo-container">
         <a href="./index.html"><img src="./images/logo-inicio.png" alt="logo" class="header_logo-img"></a>
        </div>

        <div class="header_window">
            <button id="btn-open" class="header_btn-open-window">&#9776;</button>
            <div class="window-content">
                <button id="btn-close" class="window-btn-close">X</button>
                <div class="container_menu-options">
                    <div class="menu-options">
                        <a class="menu-link" href="./servicios.html">Servicios</a>
                        <a class="menu-link" href="./portfolio.html">Portfolio</a>
                        <a class="menu-link" href="./contacto.html">Contacto</a>
                    </div>
                </div>

            </div>
        </div>

        <div class="header_options">
            <a href="./portfolio.html" class="option-secelected">Portfolio</a>
            <a href="./servicios.html" class="option-secelected">Servicios</a>
            <a href="./contacto.html" class="option-secelected">Contacto</a>
        </div>
    `
    el.appendChild(componentEl);
    btnOpenClose();
}