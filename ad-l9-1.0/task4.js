// Función para ejecutar todas las acciones solicitadas
function ejecutarTarea4() {
    // 1. Seleccionar la sección con el id 'container'
    const container = document.getElementById("container");

    // 2. Seleccionar todos los elementos de la lista con clase 'second'
    const segundoItems = document.querySelectorAll(".second");

    // 3. Seleccionar el elemento con clase 'third' dentro de la etiqueta <ol>
    const tercerItem = document.querySelector("ol .third");

    // 4. Dar el texto "¡Hola!" a la sección con id 'container'
    container.innerText = "¡Hola!";

    // 5. Añadir la clase 'main' al div con clase 'footer'
    const footer = document.querySelector(".footer");
    footer.classList.add("main");

    // 6. Eliminar la clase 'main' en el div con clase 'footer'
    footer.classList.remove("main");

    // 7. Crear un nuevo elemento <li>
    const nuevoLi = document.createElement("li");

    // 8. Asignar el texto "cuatro" al nuevo <li>
    nuevoLi.innerText = "cuatro";

    // 9. Añadir el nuevo <li> al <ul>
    const ul = document.querySelector("ul");
    ul.appendChild(nuevoLi);
}

// Ejecutamos la función cuando el DOM se haya cargado
document.addEventListener("DOMContentLoaded", ejecutarTarea4);