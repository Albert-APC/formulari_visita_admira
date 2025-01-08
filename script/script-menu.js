function procesarFormulario() {
    // Capturamos los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fecha = document.getElementById('fecha').value;
    const telefono = document.getElementById('telefono').value;
    const musica = document.getElementById('musica').value;
    const pelicula = document.getElementById('peli').value;
    const comentarios = document.getElementById('comentarios').value;

    // Validamos que los campos obligatorios estén completos
    if (!nombre || !apellido || !fecha || !telefono) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    // Guardamos los datos en localStorage (puedes usar otra forma si es necesario)
    localStorage.setItem('visita', JSON.stringify({
        nombre,
        apellido,
        fecha,
        telefono,
        musica,
        pelicula,
        comentarios
    }));

    // Abrimos la nueva ventana
    window.open('menu.html', '_blank');
}