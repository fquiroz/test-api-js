const obtenerTareas = async () => {
    try {
        const opciones = {
            headers: {          
                'Content-Type': 'application/json'
            },
            withCredentials: true
        };
    
        const respuesta = await axios.get('https://857e-38-52-83-229.ngrok-free.app/API/Tarea', opciones);      
        console.log('tareas de valen', respuesta.data);
        return respuesta.data;
    } catch (error) {
        console.error('Error al obtener las tareas:', error);
        throw error;
    }
}


