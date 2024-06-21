

//AGRANDAR FOTOS
let imagenes=document.querySelectorAll(".imagen1");//crea un array con todas las imágenes
    for(let i =0; i < imagenes.length; i++){
    imagenes[i].addEventListener("mouseover",function(){
    imagenes[i].style.width="500px";
    })

    imagenes[i].addEventListener("mouseout",function(){
        imagenes[i].style.width="400px";
    })
}





// Despegable. Se crea un array
let tabla = new Map([["Nevera","entre 0,250 - 0,350 kW"], ["Vitrocerámica","entre 0,900 - 2,000 kW"],["Microondas","entre 0,900 - 1,500 kW"],["Horno","entre 1,200 - 2,200 kW"]]);
// creamos variable select para seleccionar el id del html despeElectrodo
let select= document.querySelector("#despeElectrodo");
// aqui asociamos producto,potencia con el array de table que creamos y lo metemos en el elemento que se crea option.
for (let [producto,potencia] of tabla){
    let electro=document.createElement("option");
    electro.textContent=producto;
    electro.setAttribute("id",producto);
    select.appendChild(electro);
}

select.addEventListener("change",function(){
    let electroS = tabla.get(select.value);//get es recuperar el valor que tiene el mapa en la clave que se lee en el select
    // cogemos el id electro del html y le decimos que salga "la potencia es entre + y en electroS coge el valor de la tabla"
    document.querySelector("#electro").innerHTML="La Potencia es entre "+ electroS;
    document.querySelector("#"+electroS).style.border="2px solid black";
    bordeActivo=electroS;
})





function validarFormulario() {
    // TRIM elimina todos los espacios de un cadena de texto, dejando solo un espacio entre cada palabra.

    let nombre = document.querySelector('#nombre').value.trim();
    let email = document.querySelector('#email').value.trim();
    let telefono = document.querySelector('#telefono').value.trim();
    let mensaje = document.querySelector('#mensaje').value.trim();
    let mensajeValidacion = document.querySelector('#mensajeValidacion');


     // Validación básica de campos
     if (nombre === '' || email === '' || mensaje === '') {
        mensajeValidacion.innerHTML = 'Por favor, complete todos los campos obligatorios.';
        mensajeValidacion.style.color = 'red';
        mensajeValidacion.style.textAlign = 'center';
        return false;
    }

      // Si todos los campos son válidos, se enviará el formulario
      mensajeValidacion.innerHTML = 'Formulario enviado correctamente.';
      mensajeValidacion.style.color = 'green';
      mensajeValidacion.style.textAlign = 'center';
      return true;
  }
  