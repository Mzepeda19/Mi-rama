// Task 2: listUsers()
export function listUsers() {
    return fetch('http://localhost:3000/users') // Fetch data from API
        .then(response => {
            if (!response.ok) {
                throw new Error('Error fetching users');
            }
            return response.json(); // Parse the JSON data from the response
        })
        .then(data => {
            console.log('Usuarios:', JSON.stringify(data)); // Imprime los usuarios
        })
        .catch(error => {
            console.error('Error fetching users:', error); // Captura cualquier error
        });
}
listUsers(); // Llamada a la función