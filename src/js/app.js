
//seleccionar imagenes
const imagenes = document.querySelectorAll( '.propiedad__imagen' );


//detectar scroll
window.addEventListener( 'scroll', () => {

    const scroll = this.scrollY / -20;
    console.log( scroll );
    imagenes.forEach( imagen => {


        imagen.style.backgroundPositionY = `${ scroll }px`;

    } );

} );