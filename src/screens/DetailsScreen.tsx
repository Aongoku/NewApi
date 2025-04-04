import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const DetailsScreen = ({ route }: { route: any }) => {
     // Verifica si no hay parámetros pasados al 'route', lo que significa que no se ha recibido un personaje
  if (!route.params) {
        // Si no hay parámetros, muestra un mensaje indicando que no se encontró el personaje
    return <Text>No Personaje</Text>;
  }
  
  const { character } = route.params; // Recibir el personaje desde los parámetros
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>{character.nombre_completo}</Text>
      
      <Text style={styles.subtitle}>Descripción:</Text>
      <Text style={styles.text}>{character.descripcion}</Text>

      <Text style={styles.subtitle}>Edad:</Text>
      <Text style={styles.text}>{character.edad} años</Text>

      <Text style={styles.subtitle}>Ocupación:</Text>
      <Text style={styles.text}>{character.ocupacion}</Text>

      <Text style={styles.subtitle}>Familia:</Text>
      <Text style={styles.text}>
        {character.familia.map((fam: { familia: string }) => fam.familia).join(', ')}
      </Text>

      <Text style={styles.subtitle}>Especie:</Text>
      <Text style={styles.text}>
        {character.especie.map((esp: { especie: string }) => esp.especie).join(', ')}
      </Text>

      <Text style={styles.subtitle}>Género:</Text>
      <Text style={styles.text}>
        {character.genero.map((gen: { gender: string }) => gen.gender).join(', ')}
      </Text>

      <Text style={styles.subtitle}>País de Origen:</Text>
      <Text style={styles.text}>{character.pais_origen}</Text>

      <Text style={styles.subtitle}>Nacionalidad:</Text>
      <Text style={styles.text}>{character.nacionalidad}</Text>

      <Text style={styles.subtitle}>Idioma(s):</Text>
      <Text style={styles.text}>
        {character.idioma.map((idioma: { language: string }) => idioma.language).join(', ')}
      </Text>

      <Text style={styles.subtitle}>Dirección de Domicilio:</Text>
      <Text style={styles.text}>{character.direccion_domicilio}</Text>

      <Text style={styles.subtitle}>Residencia:</Text>
      <Text style={styles.text}>{character.residencia}</Text>

      <Text style={styles.subtitle}>Estatura:</Text>
      <Text style={styles.text}>{character.estatura} m</Text>

      <Text style={styles.subtitle}>Peso:</Text>
      <Text style={styles.text}>{character.peso} kg</Text>

      <Text style={styles.subtitle}>Estado:</Text>
      <Text style={styles.text}>{character.estado ? 'Vivo' : 'Muerto'}</Text>

      <Text style={styles.subtitle}>Raza:</Text>
      <Text style={styles.text}>{character.raza}</Text>

      <Text style={styles.subtitle}>Color de Ojos:</Text>
      <Text style={styles.text}>{character.color_de_ojos}</Text>

      <Text style={styles.subtitle}>Color de Cabello:</Text>
      <Text style={styles.text}>
        {character.color_de_cabello ? character.color_de_cabello : 'No especificado'}
      </Text>

      <Text style={styles.subtitle}>Religión:</Text>
      <Text style={styles.text}>{character.religion}</Text>

      <Text style={styles.subtitle}>Estado Civil:</Text>
      <Text style={styles.text}>
        {character.estado_civil.map((estado: { estadocivil: string }) => estado.estadocivil).join(', ')}
      </Text>

      <Text style={styles.subtitle}>Fecha de Nacimiento:</Text>
      <Text style={styles.text}>{character.fecha_nacimiento}</Text>

      <Text style={styles.subtitle}>Estudios:</Text>
      <Text style={styles.text}>{character.estudios}</Text>
    </ScrollView>
  );
};

export default DetailsScreen;
const styles = StyleSheet.create({
    // Estilo para el contenedor principal
    container: {
      // `flex: 1` hace que el contenedor ocupe todo el espacio disponible en su contenedor principal (pantalla o vista).
      flex: 1,
      
      // `padding: 10` agrega un margen interno de 10 unidades alrededor del contenido del contenedor (espacio entre los bordes y los elementos dentro).
      padding: 10,
      
      // `backgroundColor: '#fff'` establece el color de fondo del contenedor a blanco.
      backgroundColor: '#fff',
    },
    
    // Estilo para los nombres (generalmente títulos)
    name: {
      // `fontSize: 24` establece el tamaño de la fuente a 24 unidades.
      fontSize: 24,
      
      // `fontWeight: 'bold'` hace que el texto sea negrita.
      fontWeight: 'bold',
      
      // `marginVertical: 10` agrega un margen vertical (arriba y abajo) de 10 unidades entre los elementos.
      marginVertical: 10,
    },
    
    // Estilo para subtítulos
    subtitle: {
      // `fontSize: 20` establece el tamaño de la fuente a 20 unidades.
      fontSize: 20,
      
      // `fontWeight: 'bold'` hace que el texto sea negrita.
      fontWeight: 'bold',
      
      // `marginVertical: 5` agrega un margen vertical de 5 unidades entre los elementos.
      marginVertical: 5,
    },
    
    // Estilo para textos más pequeños (descripción o contenido de párrafos)
    text: {
      // `fontSize: 16` establece el tamaño de la fuente a 16 unidades, más pequeño que los otros textos.
      fontSize: 16,
      
      // `marginBottom: 10` agrega un margen en la parte inferior del texto de 10 unidades.
      marginBottom: 10,
    },
  });
  
