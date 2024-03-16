// Asegúrate de que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Elemento de la barra del carrito
    var barraCarrito = document.getElementById('barra-carrito');

    // Detectar movimiento del mouse hacia el borde izquierdo
    document.addEventListener('mousemove', function(e) {
        // Considerar abrir la barra si el mouse se mueve cerca del borde izquierdo de la ventana
        if (e.clientX < 50) {
            barraCarrito.classList.add('activo');
        }
    });

    // Cerrar la barra del carrito cuando el mouse se mueve fuera de ella
    barraCarrito.addEventListener('mouseleave', function() {
        barraCarrito.classList.remove('activo');
    });

    // Agregar funcionalidad al botón de agregar al carrito y actualizar el total
    const botonesAgregar = document.querySelectorAll('.agregar-carrito');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    botonesAgregar.forEach((boton) => {
        boton.addEventListener('click', function() {
            agregarAlCarrito(boton);
        });
    });

    function agregarAlCarrito(boton) {
        const producto = boton.closest('li');
        const nombreProducto = producto.querySelector('h2').textContent;
        const precioProducto = producto.querySelector('.producto-precio').textContent.replace('$', '');
        const itemCarrito = document.createElement('li');
        itemCarrito.textContent = `${nombreProducto} - $${precioProducto}`;
        listaCarrito.appendChild(itemCarrito);
    
        actualizarTotal(precioProducto);
    
        // Muestra la barra del carrito al agregar un producto
        barraCarrito.classList.add('activo');
    
        // Espera 3 segundos antes de esconder la barra del carrito automáticamente
        setTimeout(() => {
            barraCarrito.classList.remove('activo');
        }, 2000); // Ajusta el tiempo según lo desees
    }

    function actualizarTotal(precio) {
        const totalActual = parseFloat(totalCarrito.textContent);
        const nuevoTotal = totalActual + parseFloat(precio);
        totalCarrito.textContent = nuevoTotal.toFixed(2);
    }
});

// Movida fuera del listener de 'DOMContentLoaded' para que sea accesible globalmente
function toggleFormularios() {
    var formularioSesion = document.querySelector('.formulario-sesion');
    var formularioRegistro = document.querySelector('.formulario-registro');

    formularioSesion.classList.toggle('escondido');
    formularioRegistro.classList.toggle('escondido');
}
