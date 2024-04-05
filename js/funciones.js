
document.addEventListener("DOMContentLoaded", function(){
//EMPIEZA ACÀ
    let glide = new Glide(".glide",{
        type: 'carousel',
        perView: 3,
        gap:3,
        autoplay:3000,
        hoverpause: true
    });
glide.mount();

});