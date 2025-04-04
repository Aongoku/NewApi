// Modelo para un personaje
export interface Character {
    _id: string; // ID en la base de datos
    id: number; // ID del personaje
    nombre_personaje: string; // Nombre del personaje
    nombre_completo: string; // Nombre completo del personaje
    descripcion: string; // Descripción del personaje
    edad: number; // Edad del personaje
    ocupacion: string; // Ocupación del personaje
    familia: Familia[]; // Familia del personaje
    especie: Especie[]; // Especie del personaje
    genero: Genero[]; // Género del personaje
    pais_origen: string; // País de origen del personaje
    nacionalidad: string; // Nacionalidad del personaje
    idioma: Idioma[]; // Idioma(s) hablado(s) por el personaje
    direccion_domicilio: string; // Dirección del personaje
    residencia: string; // Residencia del personaje
    estatura: number; // Estatura del personaje
    peso: number; // Peso del personaje
    estado: boolean; // Estado de existencia del personaje (true si está vivo, false si está muerto)
    raza: string; // Raza del personaje
    color_de_ojos: string; // Color de ojos del personaje
    color_de_cabello: string | null; // Color de cabello del personaje (puede ser nulo)
    religion: string; // Religión del personaje
    estado_civil: EstadoCivil[]; // Estado civil del personaje
    fecha_nacimiento: string; // Fecha de nacimiento del personaje en formato "DD-MM-YYYY"
    imagen_representativa: ImagenRepresentativa[]; // Imagen(es) representativa(s) del personaje
    estudios: string; // Estudios del personaje
    createdAt: string; // Fecha de creación del registro
    updatedAt: string; // Fecha de actualización del registro
    __v: number; // Versión del registro en la base de datos (usualmente para control de cambios en MongoDB)
}

// Modelo para la familia del personaje
export interface Familia {
    _id: string; // ID de la familia
    familia: string; // Nombre de la familia (ejemplo: "familia simpson")
}

// Modelo para la especie del personaje
export interface Especie {
    _id: string; // ID de la especie
    especie: string; // Especie (ejemplo: "humano")
}

// Modelo para el género del personaje
export interface Genero {
    _id: string; // ID del género
    gender: string; // Género (ejemplo: "masculino")
}

// Modelo para el idioma que habla el personaje
export interface Idioma {
    _id: string; // ID del idioma
    language: string; // Idioma (ejemplo: "ingles")
}

// Modelo para el estado civil del personaje
export interface EstadoCivil {
    _id: string; // ID del estado civil
    estadocivil: string; // Estado civil (ejemplo: "casado")
}

// Modelo para las imágenes representativas del personaje
export interface ImagenRepresentativa {
    name: string; // Nombre de la imagen
    url: string; // URL de la imagen
}




