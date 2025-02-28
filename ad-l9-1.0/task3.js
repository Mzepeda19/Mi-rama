// Función que obtiene la información de los enlaces y la muestra
function informacionEnlaces() {
    // Obtener todos los elementos de enlace (a) en la página
    const enlaces = document.getElementsByTagName("a");

    // Obtener el número de enlaces
    const numEnlaces = enlaces.length;

    // Obtener la URL del primer enlace (si existe)
    const primerEnlace = enlaces[0] ? enlaces[0].href : "No hay enlaces";
    
    // Obtener la URL del último enlace (si existe)
    const ultimoEnlace = enlaces[numEnlaces - 1] ? enlaces[numEnlaces - 1].href : "No hay enlaces";

    // Crear el contenido para mostrar
    const contenido = `Número de enlaces: ${numEnlaces}<br>
                       Primer enlace: <a href="${primerEnlace}">${primerEnlace}</a><br>
                       Último enlace: <a href="${ultimoEnlace}">${ultimoEnlace}</a>`;

    // Insertar el contenido dentro del contenedor #comments
    const comentarios = document.getElementById("comments");
    comentarios.innerHTML = contenido;
}