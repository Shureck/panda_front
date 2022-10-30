// // Создать кнопку с изменяющимся фоном при нажатии

// import React, { Component, useState, useEffect, useCallback }  from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// export default class Button extends Component {
//     constructor(props) {

        

//         super(props);
//         this.state = {
//         backgroundColor: 'green'
//         }
//     }

//     render() {
//         return (
//         <View style={styles.container}>
//             <TouchableOpacity
//             style={[styles.button, { backgroundColor: this.state.backgroundColor }]}
//             // Отправить get запрос на сервер
//             onClick={fetchRequest}
//             >
//             <Text style={styles.text}>{this.props.name}</Text>
//             </TouchableOpacity>
//         </View>
//         );
//     }
//     }

//     const styles = StyleSheet.create({
    
//     button: {
//         width: 200,
//         height: 50,
//         backgroundColor: 'green',
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10,
//     },

//     text: {
//         color: 'white',
//         fontSize: 20,
//     }

//     });