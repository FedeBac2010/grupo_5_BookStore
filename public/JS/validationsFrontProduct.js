window.addEventListener('load',()=> {

    let form = document.querySelector('form')
    
    let titulo = document.querySelector(".titulo")
    let autor = document.querySelector('.author');
    let precio = document.querySelector('.price');
    let moneda = document.querySelector('.currency');
    let descripcion = document.querySelector('.description');

    let imagen = document.querySelector('.imagen');
    
    
    
    
    form.addEventListener('submit',(e) => {
        
        
    
        let errores= []; //Array que conservara los errores de tenerlos
    
        
    
    
        if( titulo.value == ''){
            errores.push('Debes completar el campo de Titulo del producto');
            /* console.log(titulo.value); */
        }
    
        
    
        if( autor.value == ''){
            errores.push('Debes completar el campo de Autor');
        } else if(autor.value.length < 3){
            errores.push('El campo de Autor debe tener al menos 3 caracteres')
        }
    
        
    
        if( precio.value == ''){
            errores.push('Debes completar el campo de Precio');
        }
    
        
    
        if( moneda.value == ''){
            errores.push('Debes agregar una moneda valida');
        }
    
        
    
        if( descripcion.value == ''){
            errores.push('Debes agregar una descripcion del producto');
        }else if(descripcion.value.length < 20){
            errores.push('El campo de descripcion debe ser superior a 15 caracteres')
        }

        if( imagen.value == ""){
            errores.push('Debes agregar una Imagen del producto');
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
    
    titulo.addEventListener('blur',(e)=>{
        
        let errores= [] ;    
        console.log(titulo)
    
        if( titulo.value == ''){
            errores.push('Debes completar el campo titulo')
            titulo.classList.add('is-invalid')
            titulo.classList.remove('is-valid')
        }else{
            titulo.classList.add('is-valid')
            titulo.classList.remove('is-invalid')
    }
    })
    
        autor.addEventListener('blur',(e)=>{
            let errores=[]; 
            if( autor.value == '' || autor.value.length < 3){
                errores.push('Debes completar el campo de Autor')
                autor.classList.add('is-invalid')
                autor.classList.remove('is-valid')
            }else{
                autor.classList.add('is-valid')
                autor.classList.remove('is-invalid')
            }
        })

        precio.addEventListener('blur',(e)=>{
            let errores=[]; 
            if( precio.value == ''){
                errores.push('Debes completar el campo Precio')
                precio.classList.add('is-invalid')
                precio.classList.remove('is-valid')
            }else{
                precio.classList.add('is-valid')
                precio.classList.remove('is-invalid')
            }
        })

        moneda.addEventListener('blur',(e)=>{
            let errores=[]; 
            if( moneda.value == '' ){
                errores.push('Debes agregar un tipo de moneda')
                moneda.classList.add('is-invalid')
                moneda.classList.remove('is-valid')
            }else{
                moneda.classList.add('is-valid')
                moneda.classList.remove('is-invalid')
            }
        })

        descripcion.addEventListener('blur',(e)=>{
            let errores=[]; 
            if(descripcion.value == '' || descripcion.value.length < 15){
                errores.push('Debes agregar una descripcion')
                descripcion.classList.add('is-invalid')
                descripcion.classList.remove('is-valid')
            }else{
                descripcion.classList.add('is-valid')
                descripcion.classList.remove('is-invalid')
            }
        })

    
    })
    
    