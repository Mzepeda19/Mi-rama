// Task 4: delUser(number)

import axios from 'axios';
const SERVER_URL = 'http://localhost:3000/users'; // URL del servidor JSON

const delUser = async (id) => {
  try {
    // Hacer la solicitud DELETE al servidor con el id del usuario
    const response = await axios.delete(`${SERVER_URL}/${id}`);

    // Verificar la respuesta
    if (response.status === 200) {
      console.log(`Usuario con ID ${id} eliminado con éxito`);
    } else {
      console.log(`No se pudo eliminar al usuario con ID ${id}`);
    }
  } catch (error) {
    console.error('Error al eliminar usuario:', error.message);
  }
};

// Llamar a la función con un ID de "ejemplo"
delUser(3);