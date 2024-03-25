document.addEventListener("DOMContentLoaded", function(){
//EMPIEZA ACÀ
    const submenu = document.querySelector(".submenu");
    const tieneSubmenu = submenu.parentNode;
    const grupoSubmenus = Array.from(tieneSubmenu);
    console.log(grupoSubmenus);
    
    grupoSubmenus.forEach((item) =>{
        let icono = this.querySelector("span");
        item.addEventListener("mouseover", () =>{
            icono.classList.remove("caret_down");
            icono.classList.add("caret_up");

        });
        item.addEventListener("mouseleave", () =>{
            icono.classList.remove("caret_up");
            icono.classList.add("caret_down");
            

        });
    });


   

});