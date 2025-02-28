// Función para crear el comentario con el nombre y apellido
function buildComment(p1, p2) {
    const header = document.createElement("h2");
    header.innerText = p1.value;
  
    const paragraph = document.createElement("p");
    paragraph.innerText = p2.value;
  
    const comment = document.createElement("article");
    comment.append(header, paragraph);
  
    const commentContainer = document.querySelector("#comments");
    commentContainer.append(comment);
  }
  
  // Función que se ejecuta cuando se hace clic en el botón
  function writeComment(event) {
    event.preventDefault();  // Evita que el formulario se envíe
  
    const name = document.querySelector('#nameInput');
    const message = document.querySelector('#messageInput');
  
    // Llama a la función buildComment pasando los inputs
    buildComment(name, message);
  }
  
  // Escuchar el evento de clic en el botón
  const button = document.querySelector("#commentButton");
  button.addEventListener("click", writeComment);