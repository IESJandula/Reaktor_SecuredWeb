
/**
 * Metodo que realiza una peticion http al servidor TimeTable para recoger 
 * informacion de los profesores
 * @returns informacion de los profesores en formato json
 */
export const getTeachers = async () =>{
    try
    {
        let url = "http://localhost:8088/horarios/get/teachers";
        const response = await fetch(url);
        if(!response.ok)
        {
            throw new Error("No se ha cargado previamente ningun dato de los profesores");
        }  
        return await response.json();
    }
    catch(error)
    {
        console.log(error);
    }
}

/**
 * Metodo que realiza una peticion http al servidor TimeTable para recoger 
 * informacion de las horas
 * @returns informacion de los profesores en formato json
 */
export const getHours = async ()=>{
    try
    {
        let url = "http://localhost:8088/horarios/get/hours";
        const response = await fetch(url);
        if(!response.ok)
        {
            throw new Error("No se ha cargado previamente ningun dato de las horas");
        }  
        return await response.json();
    }
    catch(error)
    {
        console.log(error);
    }
} 
/**
 * Metodo que realiza una peticion http al servidor TimeTable para recoger 
 * informacion de los cursos
 * @returns informacion de los cursos en formato json
 */
export const getCourses = async ()=>{
    try
    {
        let url = "http://localhost:8088/horarios/get/courses";
        const response = await fetch(url);
        if(!response.ok)
        {
            throw new Error("No se ha cargado previamente ningun dato de las horas");
        }  
        return await response.json();
    }
    catch(error)
    {
        console.log(error);
    }
}
/**
 * Metodo que realiza una peticion http al servidor TimeTable para 
 * localizar a un profesor en tiempo real
 * @param {string} nombre 
 * @param {string} apellido 
 * @returns aula donde se encuentra el profesor
 */
export const getTeacherClassroom = async (nombre,apellido)=>{
    try
    {
        const params = {
            name:nombre,
            lastname: apellido
        };

        let url = "http://localhost:8088/horarios/teacher/get/classroom?"+new URLSearchParams(params).toString();

        const response = await fetch(url);

        if(!response.ok)
        {
            throw new Error("Error al introducir el profesor");
        }

        return await response.json();
    }
    catch(error)
    {
        console.log(error);
    }
}