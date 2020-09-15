
let form=document.getElementById("form");
let ipt=document.getElementsByClassName("ipt")
let textOne=document.getElementById("text-one")
let textTwo=document.getElementById("text-two")
//let leghtpassword=form.elements[1].value
function validarCorreo(e){
    if(form.elements[0].value==""){
        //alert("Ingrese un correo válido");
        form.style.justifyContent="center"
        textOne.classList.add("hide")
        ipt[0].classList.add("borde")
        e.preventDefault();
    }
}
function validarContraseña(e){
    if(form.elements[1].value.length<=7){
        //alert("Ingrese una contraseña de al menos 8 digitos")"
        textTwo.classList.add("hide")
        ipt[1].classList.add("borde")
        e.preventDefault();
    }
}
let reanudar= function(){
    textOne.classList.remove("hide")
    ipt[0].classList.remove("borde")
    form.style.justifyContent="space-around"
}
let validar= function(e){
    validarCorreo(e)
    validarContraseña(e)

}


form.addEventListener("submit",validar)
//ipt.addEventListener("focus",enfocar)
ipt[0].addEventListener("focus",reanudar)