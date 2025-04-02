export interface Character {
    _id: string;  // ID en la base de datos
    id: number;   // ID del personaje
    nombre_personaje: string;
    nombre_completo: string;
    descripcion: string;
    edad: number;
    ocupacion: string;
    padres: string[];  // Array vacío en el JSON
    hijos: string[];   // Array vacío en el JSON
    familiares: string[];  // Array vacío en el JSON
    familia: Familia[];
    parejas: string[];  // Array vacío en el JSON
    amigos: string[];   // Array vacío en el JSON
    especie: Especie[];
    genero: Genero[];
    pais_origen: string;
    nacionalidad: string;
    idioma: Idioma[];
    direccion_domicilio: string;
    residencia: string;
    estatura: number;
    peso: number;
    estado: boolean;
    raza: string;
    color_de_ojos: string;
    color_de_cabello: string | null; // Puede ser nulo
    religion: string;
    estado_civil: EstadoCivil[];
    fecha_nacimiento: string;  // Formato "DD-MM-YYYY"
    imagen_representativa: ImagenRepresentativa[];
    estudios: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

// Interfaces para los objetos anidados
interface Familia {
    _id: string;
    familia: string;
}

interface Especie {
    _id: string;
    especie: string;
}

interface Genero {
    _id: string;
    gender: string;
}

interface Idioma {
    _id: string;
    language: string;
}

interface EstadoCivil {
    _id: string;
    estadocivil: string;
}

interface ImagenRepresentativa {
    name: string;
    url: string;
}
