import React, { useState } from 'react';

import { Image, StyleSheet, Platform, View, Button, Text, TextInput } from 'react-native';

export default function HomeScreen() {
const [greeting, setGreeting] = useState('¡Hola, Alumno!');
const [nombre, setNombre] = useState('');

const [bgColor, setBgColor] = useState('#fff'); 


return (

<View style={[styles.container, { backgroundColor: bgColor }]}>
// **El componente View usa el estado bgColor para cambiar el color de fondo.**
// *** FIN DE LA MODIFICACIÓN ***
<Text style={styles.greetingText}>{greeting}</Text>

<TextInput
style={styles.input}
placeholder="Escribe tu nombre"
value={nombre}
onChangeText={(text) => setNombre(text)}
/>

<Button
title="Actualizar Saludo"
onPress={() => setGreeting(`¡Hola, ${nombre}!`)}
/>

<View style={styles.buttonContainer}>
<Button title="Rojo" onPress={() => setBgColor('red')} />

<Button title="Verde" onPress={() => setBgColor('green')} />

<Button title="Azul" onPress={() => setBgColor('blue')} />

</View>

</View>
);
}
const styles = StyleSheet.create({
container: {

flex: 1,
justifyContent: 'center',
alignItems: 'center',
},
greetingText: {
fontSize: 24,
marginBottom: 10,
},
input: {
height: 40,
borderColor: 'gray',
borderWidth: 1,
width: 200,
paddingHorizontal: 10,
marginBottom: 20,
},

buttonContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
width: '60%',
},

});