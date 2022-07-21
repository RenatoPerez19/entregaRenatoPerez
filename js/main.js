// LocalStorage: guarda cadenas de texto, clave => valor
// SET: Guardar (en el navegador del usuario, información irrelevante, no delicada)
// GET: Obtener
// La != con SessionStorage es que cuando el usuario cierra el navegador se pierde todo, con el LocalStorage no(mientras el navegador no limpie los datos del navegador, todo va a estar vigente)

// Seleccionar elementos y guardarlos en variables
let botonPrincipal = document.querySelector('#botonPrincipal');
let botones = document.querySelector('#botones');
let fondo = document.querySelector('#fondo');

// Cuando hago click en botón principal quiero que me aparezcan los otros botones
botonPrincipal.addEventListener('click', aparecerBotones);

// Cuando hago click en un botón quiero que me cambie el fondo
botones.addEventListener('click', cambiarFondo)

// que me quede el color que elegí
function guardarColor() {
    const backgroundColor = localStorage.getItem('colorFondo');
    //console.log(backgroundColor);
    //pero que pasa si no tenemos nada guardado en el local storage
    // console.log(backgroundColor); --> null
    if (backgroundColor === null) {
        fondo.className = 'bg-dark'
    }else{
        fondo.className = backgroundColor;
    }
}
guardarColor();

// EventHandler
function aparecerBotones(e) {
    e.preventDefault();
    botones.innerHTML = `
    <button class="btn btn-primary">Azul</button>
    <button class="btn btn-secondary">Gris</button>
    <button class="btn btn-success">Verde</button>
    <button class="btn btn-danger">Rojo</button>
    <button class="btn btn-warning">Amarillo</button>
    `
}

function cambiarFondo(e) {
    e.preventDefault();
    // console.log(e) podemos ver todo el contenido del documento y ver cómo llamar a la class
    // console.log(e.target) nos muestra el elemento completo
    // console.log(e.target.classList) nos muestra el array con las clases
    // console.log(e.target.classList[1]) nos muestra la clase que necesitamos por la posición
    let colorBoton = e.target.classList[1];

    switch (colorBoton) {
        case('btn-primary'):
            fondo.className = 'bg-primary'
            localStorage.setItem('colorFondo', 'bg-primary')
            break;
        case('btn-secondary'):
            fondo.className = 'bg-secondary'
            localStorage.setItem('colorFondo', 'bg-secondary')
            break;
        case('btn-success'):
            fondo.className = 'bg-success'
            localStorage.setItem('colorFondo', 'bg-success')
            break;
        case('btn-danger'):
            fondo.className = 'bg-danger'
            localStorage.setItem('colorFondo', 'bg-danger')
            break;
        case('btn-warning'):
            fondo.className = 'bg-warning'
            localStorage.setItem('colorFondo', 'bg-warning')
            break;
    }
}