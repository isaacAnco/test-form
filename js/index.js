
const btn = document.getElementById('btn');
const info = document.querySelectorAll('#contenedor input');


const expresiones = {
    nombre: /^[a-zA-ZÁ-ÿ\s]{5,30}$/,
    correo: /^[a-zA-z0-9_.+-]+@[a-zA-z0-9-]+\.[a-zA-z0-9-.]+$/,
    password : /^.{4,12}$/
}

const valor = {
    nombre: false,
    correo: false,
    password: false
}



const validarCampos = (e) => {
switch (e.target.name) {
    case 'nombre':
        if (expresiones.nombre.test(e.target.value)) {
            document.getElementById('parrafo').classList.remove('container__validar-nombre--active');
    
        } else {
            document.getElementById('parrafo').classList.add('container__validar-nombre--active');   
        }    
        valor.nombre = true
    break;
    case 'correo':
        if (expresiones.correo.test(e.target.value)) {
            document.getElementById('textC').classList.remove('container__validar-correo--active');
    
        } else {
            document.getElementById('textC').classList.add('container__validar-correo--active');   
        }   
        valor.correo = true
         
    break;
    case 'password':
        if (expresiones.password.test(e.target.value)) {
            document.getElementById('textP').classList.remove('container__validar-password--active'); 
        } else {
            document.getElementById('textP').classList.add('container__validar-password--active');   
        }    
        validarPassword();
        valor.password = true;
    break;
    case 'password2':
        validarPassword();
    break;
    
    }
}

const validarPassword = () => {
    const psw = document.getElementById('password');
    const psw2 = document.getElementById('password2');
    if (psw.value !== psw2.value) {
        document.getElementById('textP2').classList.add('container__validar-password2--active');
    } else {
        document.getElementById('textP2').classList.remove('container__validar-password2--active');
    }
}



info.forEach(e => {
   e.addEventListener('keyup', validarCampos);
});

btn.addEventListener('click', (e) => {
    e.preventDefault();  
    if (valor.password && valor.nombre && valor.correo) {
        document.getElementById('incorrecto').classList.remove('container__incorrecto--active');
    } else {
        document.getElementById('incorrecto').classList.add('container__incorrecto--active');
    }
});


















































// const nombre = document.getElementById('nombre');
// const correo = document.getElementById('correo');
// const btn = document.getElementById('btn');
// const parrafo = document.getElementById('parrafo');
// const correcto = document.getElementById('correcto');
// const parrafoCorreo = document.getElementById('email');
// const textpasrd = document.getElementById('textpasrd');
// const textpasrd2 = document.getElementById('textpasrd2');



// const validarNombre = () =>{
//     const usuario = nombre.value;
//     if (usuario.length < 5) {
//     parrafo.innerHTML = 'el usuario no puede tener menos de 5 caracteres';
//     parrafo.classList.add('error');
//     }  else if (usuario.length >= 10) {
//         parrafo.innerHTML = 'el usuario no puede tener mas de 10 caracteres';
//         parrafo.classList.add('error');
//     } else {
//         parrafo.innerHTML = 'el usuario es correcto';
//         parrafo.classList.add('correcto');
//     }
// }

// const validarCorrero = () => {
//     const email = correo.value;
//     if (email.length < 5) {
//         parrafoCorreo.innerHTML = 'el correo es incorrecto';
//         parrafoCorreo.classList.add('error');
//     } else {
//         parrafoCorreo.innerHTML = 'el correo es correcto';
//         parrafoCorreo.classList.add('correcto');
//     }
       
// }

//  const validarPassword = () => {
//     const password = document.getElementById('password');
//     const password2 = document.getElementById('password2');
    
//     if (password.length !== password2.length) {
//         textpasrd2.innerHTML = 'la contraseña son correctas';
//     } else {
//         textpasrd2.innerHTML = 'la contraseña no son iguales';
//     }
//  }


// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     validarNombre();
//     validarCorrero();
//     validarPassword();
// });


