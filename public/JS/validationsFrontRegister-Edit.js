window.addEventListener('load',()=>{

let form= document.querySelector('form')

let fullName= document.querySelector('.fullName')
let userName= document.querySelector('.userName');
let userEmail= document.querySelector('.userEmail');
let password= document.querySelector('.password');
let phoneNumber= document.querySelector('.phoneNumber');
let city= document.querySelector('.city');

let imagen = document.querySelector('.avatar');

//Para validad Email

let emailCaracters = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i; //Los caracteres que son habilitados




form.addEventListener('submit',(e)=>{
    
    

    let errores= []; //Array que conservara los errores de tenerlos

    


    if( fullName.value == ''){
        errores.push('Debes completar el campo de Nombre Completo');
    }else if(fullName.value.length < 3){
        errores.push('El campo de Nombre Completo debe tener al menos 3 caracteres')
    }

    

    if( userName.value == ''){
        errores.push('Debes completar el campo de Usuario');
    }else if(userName.value.length < 3){
        errores.push('El campo de Usuario debe tener al menos 3 caracteres')
    }

    

    if( userEmail.value == ''){
        errores.push('Debes completar el campo de Email');
    }else if(userEmail.value.length < 3){
        errores.push('El campo de Email debe tener al menos 3 caracteres')
    }else if(!emailCaracters.test(userEmail.value)){ //Aqui decimos que si el email ingresado no contiene algunos de lo caracteres salta el error
        errores.push('El campo de Email debe tener al menos el caracter especial @')
    }

    

    if( password.value == ''){
        errores.push('Debes completar el campo de Contraseña');
    }else if(password.value.length < 8){
        errores.push('El campo de Contraseña debe tener al menos 8 caracteres')
    }

    

    if( phoneNumber.value == ''){
        errores.push('Debes completar el campo del Numero Telefonico');
    }else if(phoneNumber.value.length < 4){
        errores.push('El campo de Numero de telefono debe ser superior a 4 numeros')
    }

    

    if( city.value == ''){
        errores.push('Debes completar el campo de Ciudad');
    }else if(city.value.length < 3){
        errores.push('El campo de nombre debe tener al menos 3 caracteres')
    }

    if( imagen.value == ""){
        errores.push('Debes agregar una Imagen de Perfil');
    }

if (errores.length > 0){
    e.preventDefault();
    let ulErrores= document.querySelector('div.errores ul')
    ulErrores.innerHTML = '';//para que cada vez que refresquemos el array siempre este vacio y no se acumulen los errores cada vez que toco el boton submit
    ulErrores.classList.add('alert-warning');
    for (let i = 0; i < errores.length; i++) {
        
        ulErrores.innerHTML+= '<li>'+ errores[i]+ '</li>'
        
    }
    
}
    

}),

//Validaciones input por input

fullName.addEventListener('blur',(e)=>{
    console.log(fullName);

    let errores=[];    

    if( fullName.value == '' || fullName.value.length < 3){
        errores.push('Debes completar el campo Nombre Completo')
        fullName.classList.add('is-invalid')
        fullName.classList.remove('is-valid')
    }else{
        fullName.classList.add('is-valid')
        fullName.classList.remove('is-invalid')
}
})

    userEmail.addEventListener('blur',(e)=>{
        let errores=[]; 
        if( userEmail.value == '' || userEmail.value.length < 3 || !emailCaracters.test(userEmail.value)){
            errores.push('Debes completar el campo de Email')
            userEmail.classList.add('is-invalid')
            userEmail.classList.remove('is-valid')
        }else{
            userEmail.classList.add('is-valid')
            userEmail.classList.remove('is-invalid')
        }
    })
    userName.addEventListener('blur',(e)=>{
        let errores=[]; 
        if( userName.value == '' || userName.value.length < 3){
            errores.push('Debes completar el campo Usuario')
            userName.classList.add('is-invalid')
            userName.classList.remove('is-valid')
        }else{
            userName.classList.add('is-valid')
            userName.classList.remove('is-invalid')
        }
    })
    password.addEventListener('blur',(e)=>{
        let errores=[]; 
        if( password.value == '' || password.value.length < 8){
            errores.push('Debes completar el campo de Contraseña')
            password.classList.add('is-invalid')
            password.classList.remove('is-valid')
        }else{
            password.classList.add('is-valid')
            password.classList.remove('is-invalid')
        }
    })
    phoneNumber.addEventListener('blur',(e)=>{
        let errores=[]; 
        if( phoneNumber.value == '' || phoneNumber.value.length < 4){
            errores.push('Debes completar el campo Numero de tefelono')
            phoneNumber.classList.add('is-invalid')
            phoneNumber.classList.remove('is-valid')
        }else{
            phoneNumber.classList.add('is-valid')
            phoneNumber.classList.remove('is-invalid')
        }
    })
    city.addEventListener('blur',(e)=>{
        let errores=[]; 
        if( city.value == ''){
            errores.push('Debes completar el campo Ciudad')
            city.classList.add('is-invalid')
            city.classList.remove('is-valid')
        }else{
            city.classList.add('is-valid')
            city.classList.remove('is-invalid')
        }
    })



})

