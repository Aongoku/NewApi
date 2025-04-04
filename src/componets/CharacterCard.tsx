
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Character } from '../types/character';
import { useNavigation } from '@react-navigation/native';

const CharacterCard = ({ character }: { character: Character }) => {
    const navigate = useNavigation<any>();
    const handlePress = () => {
        // Navegar a la pantalla de detalles pasando el personaje como parámetro
        navigate.navigate('DetailsScreen', { character });
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={styles.card}>
            <Image
                source={{ uri: character.imagen_representativa[0]?.url }}
                style={styles.image}
            />
                <Text style={styles.name}>{character.nombre_completo}</Text>
                
            </View>
        </TouchableOpacity>
    );
};

export default CharacterCard

const styles=StyleSheet.create({
    card:{
        marginBottom:10,
        padding:10,
        backgroundColor:"#eee",
        borderRadius:10,
    },
    image:{
        width:"100%",
        height:200,
        borderRadius:10,
    },
    name:{
        fontSize:18,
        fontWeight:"bold",
        marginTop:5,
    },
});