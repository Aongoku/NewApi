import React from "react";
import { Character } from '../types/character';
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native"

interface Props{
    Character:Character;
    onPress:()=>void;
}

const CharacterCard = ({Character,onPress}:Props) =>{
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <View style={styles.card}>
            <Image 
                source={{ uri: Character.imagen_representativa[0]?.url }} 
                style={styles.image} 
            />

            <Text style={styles.name}>{Character.nombre_personaje}</Text>
            </View>

        </TouchableOpacity>
    )

}

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