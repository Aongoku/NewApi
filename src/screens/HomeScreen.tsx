import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Character } from '../types/character';
import global from '../styles/global';
import CharacterCard from '../componets/CharacterCard';
import api from '../api/api';

export default function HomeScreen() {
  // Estado para almacenar los personajes obtenidos de la API
  const [characters, setCharacters] = useState<Character[]>([]); 

  // Hook de navegación para cambiar entre pantallas
  const navigation = useNavigation();

// useEffect se ejecuta cuando el componente se monta (al abrir la pantalla)
  useEffect(() => {
    // Función asincrónica para obtener los datos de la API
    const fetchCharacter = async () => {
      try {
        const { data } = await api.get('/');  // Usamos '/' ya que la URL base ya incluye la ruta completa
        console.log('Respuesta completa de la API:', data);
        
        // Verifica si data es un array o si contiene la propiedad results
        if (Array.isArray(data)) {
          console.log('La respuesta es un array:', data);
          setCharacters(data);
        } else if (data.results) {
          console.log('Resultados:', data.results);
          setCharacters(data.results);
        } else {
          console.log('No se encontraron personajes en la respuesta.');
        }
      } catch (error) {
        console.error('Error al obtener los personajes:', error);
      }
    };
   // Llamamos a la función para obtener los datos
    fetchCharacter();
  }, []);// El array vacío indica que este efecto se ejecuta solo una vez
  
  
  

  return (
     // ScrollView permite desplazarse cuando hay muchos personajes
    <ScrollView style={global.container}>
      <Text style={global.title}>SimsompsCharacters</Text>
      {characters.map((c) => (
        
        <CharacterCard key={c.id} character={c}  />
      ))}
    </ScrollView>
  );
}
