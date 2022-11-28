'use strict'


// SEGURO CONTACTO
var basico = document.getElementById('basico');
var intermedio = document.getElementById('intermedio');
var premiun = document.getElementById('premiun');

    // Inicio validacion precios
basico.addEventListener('click', ()=>{
    console.log(basico.checked);
    if(basico.checked == true){
        console.log("estoy");
        intermedio.disabled = true;
        premiun.disabled = true;
        document.getElementById('monto').innerHTML = "Basico: $500";
    }else{
        intermedio.disabled = false;
        premiun.disabled = false;
        document.getElementById('monto').innerHTML = "";
    }
});

intermedio.addEventListener('click', ()=>{
    if(intermedio.checked == true){
        basico.disabled = true;
        premiun.disabled = true;
        document.getElementById('monto').innerHTML = "Intermedio: $1000";
    }else{
        basico.disabled = false;
        premiun.disabled = false;
        document.getElementById('monto').innerHTML = "";
    }
});

premiun.addEventListener('click', ()=>{
    if(premiun.checked == true){
        basico.disabled = true;
        intermedio.disabled = true;
        document.getElementById('monto').innerHTML = "Premium: $1500";
    }else{
        basico.disabled = false;
        intermedio.disabled = false;
        document.getElementById('monto').innerHTML = "";
    }
});

    // Fin validacion precios

    // DNI
var dni = document.getElementById('dni');

dni.addEventListener('keyup', ()=>{
    
    validadni();
    
    console.log(dni.value.length);
    console.log(dni.value);

    if(dni.value.length == 2 || dni.value.length == 6 ){
        dni.value = dni.value + ".";
        console.log("estoy");
        
    }
    
});


function validadni(){
    let x = dni.value;
    let letars = "abcdefghijklñnmopqrstxvwzy+´{-;:@#$%&%()=?¡";
    for (const key in x) {
        
        console.log(x , x[key] );

        for (const s in letars) {
            if( x[key] == letars[s]){
                alert("Debe ingresar bien el formato");
            }
        }
        
    }

}

// Fin DNI

// TELEFONO
var tel = document.getElementById('telefono');

tel.addEventListener('keyup', ()=>{
    
    validadnumero();
    
    console.log(tel.value.length);
    console.log(tel.value);

    if(tel.value.length == 3 || tel.value.length == 7 || tel.value.length == 9){
        tel.value = tel.value + "-";
        console.log("estoy");
        
    }
    
});

function validadnumero(){
    let x = tel.value;
    let letars = "abcdefghijklñnmopqrstxvwzy´{.;:@#$%&%()=?¡";
    for (const key in x) {
        
        console.log(x , x[key] );

        for (const s in letars) {
            if( x[key] == letars[s]){
                alert("Debe ingresar bien el formato");
            }
        }
        
    }
}

var btn_submit = document.getElementById('btn-contactar');

btn_submit.addEventListener('click', ()=>{

    if (!document.getElementById("name").value && !document.getElementById("last_name").value && !document.getElementById("dni").value && !document.getElementById("email").value) {
        alert("Debe Completar los campos requeridos");
    }else{
        let name = document.getElementById("name").value;
        let last_name = document.getElementById("last_name").value
    
        alert(`Gracias por completar sus datos sr/a ${name} ${last_name} en breve nos comunicaremos con usted`)
    }

});