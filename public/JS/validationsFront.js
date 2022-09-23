window.addEventListener('load',()=>{

let form= document.querySelector('form')

form.addEventListener('submit',(e)=>{
    
    

    let errores= []; //Array que conservara los errores de tenerlos

    let fullName= document.querySelector('.fullName')


    if( fullName.value == ''){
        errores.push('Debes completar el campo Nombre');
    }else if(fullName.value.length < 3){
        errores.push('El campo de nombre debe tener al menos 3 caracteres')
    }

    let userName= document.querySelector('.userName');

    if( userName.value == ''){
        errores.push('Debes completar el campo de Usuario');
    }else if(userName.value.length < 3){
        errores.push('El campo de nombre debe tener al menos 3 caracteres')
    }

    let userEmail= document.querySelector('.userEmail');

    if( userEmail.value == ''){
        errores.push('Debes completar el campo de Email');
    }else if(userEmail.value.length < 3){
        errores.push('El campo de nombre debe tener al menos 3 caracteres')
    }

    let password= document.querySelector('.password');

    if( password.value == ''){
        errores.push('Debes completar el campo de password');
    }else if(password.value.length < 3){
        errores.push('El campo de nombre debe tener al menos 3 caracteres')
    }

    let phoneNumber= document.querySelector('.phoneNumber');

    if( phoneNumber.value == ''){
        errores.push('Debes completar el campo del Numero Telefonico');
    }else if(phoneNumber.value.length < 3){
        errores.push('El campo de nombre debe tener al menos 3 caracteres')
    }

    let city= document.querySelector('.city');

    if( city.value == ''){
        errores.push('Debes completar el campo de Ciudad');
    }else if(city.value.length < 3){
        errores.push('El campo de nombre debe tener al menos 3 caracteres')
    }

if (errores.length > 0){
    e.preventDefault();
    let ulErrores= document.querySelector('div.errores ul')
    for (let i = 0; i < errores.length; i++) {
        
        ulErrores.innerHTML+= '<li>'+ errores[i]+ '</li>'
        
    }
    
}
    

})



})

