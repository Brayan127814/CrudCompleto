async function fetchUserss() {
    try {
        const response = await fetch('http://localhost:5000/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const products = await response.json();
        console.log(products);
    } catch (error) {
        console.error('Error al obtener los productos', error);
    }
}

fetchUserss();