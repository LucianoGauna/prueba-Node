let perfil = "Invitado";

switch(perfil){
    case "Administrador": 
    case "ADMINISTRADOR":
    case "administrador":       
    console.log("Usted tiene todos los privilegios de uso del sistema");
    break;
    case " ": console.log("Debe especificar el perfil del usuario");
    break;
    case "Asistente": console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
    break;
    case "Invitado": console.log("Usted sólo tiene permisos de consultar datos");
    break;
    default: console.log("Debe especificar un perfil válido");
    break;
};


