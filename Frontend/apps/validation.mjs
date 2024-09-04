export function validateForm(name, email) {
    if (!name.trim()) {
        alert('El campo de nombre es obligatorio');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('El email no es válido');
        return false;
    }

    return true;
}
