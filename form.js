let enviar= document.getElementById("enviar");
let form= document.getElementById("formulario");

// enviar.addEventListener("click" , ()=>{ 

enviar.addEventListener("click", validarForrmulario)

function validarForrmulario(){
//   e.prevenDefault();
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const commit= document.getElementById("commit").value
  
  const nombre = document.getElementById("nombre");
   nombre.textContent = `
   name : ${name}`
  const gmail = document.getElementById("contacto");
   gmail.textContent = `
   email : ${email}`
  const comentarios = document.getElementById("comentarios");
   comentarios.textContent = commit
 };


