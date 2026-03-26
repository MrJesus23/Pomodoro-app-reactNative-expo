let users = [];

export const register = (email, password) => {
    const userExists = users.find(u => u.email === email);

    if (userExists) {
        return {success: false, message: "El usuario ya existe"}
    }

    users.push({email, password});

    return{success: true, message: "Usuario registrado exitosamente"};
};

export const login = (email, password) => {
    if (email === "admin" && password === "admin"){
        return {success: true, role: "admin", message: "Inicio de sesión exitoso"};
    }

    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user){
        return {success: false, message: "Usuario no encontrado"};
    }
    
    return {success: true, role: "user", message: "Inicio de sesión exitoso"};
};