const imagenes =document.querySelectorAll(".img-galeria");
const imagenesLight =document.querySelector(".agregar-imagen");
const contenedorImagenes =document.querySelector(".img-light");
const hamburger1 = document.querySelector(".hamburger");
console.log("ESTOE ES IMAGENES----->",imagenes)
console.log("ESTOE ES IMAGENESlIGHT----->",imagenesLight)
console.log("ESTOE ES CONTENEDOR IMAGENES----->",contenedorImagenes)

const showImages=(imagen)=>{
    imagenesLight.src=imagen
    contenedorImagenes.classList.toggle("show")
    imagenesLight.classList.toggle("showimage")
    hamburger1.style.opacity="0"
 }

imagenes.forEach(imagen=>{
  imagen.addEventListener("click",()=>{
       showImages(imagen.getAttribute("src"))
  })
})
contenedorImagenes.addEventListener("click",(e)=>{
   if(e.target!=imagenesLight){
    contenedorImagenes.classList.toggle("show")
    imagenesLight.classList.toggle("showimage")
    hamburger1.style.opacity="1"
   }
})

