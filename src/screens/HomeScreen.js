import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/styles';

export default function HomeScreen() {
    const [peoples, setPeoples] = useState([]);
    const navigation = useNavigation();

    useEffect(() => {
        fetch("http://localhost:3000/peoples")
        .then(response => response.json())
        .then(data => setPeoples(data)) 
        .catch(error => console.error(error));
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:3000/peoples/${id}`, {
            method: 'DELETE',
        })
        .then(response => {
            const listaAtualizada = peoples.filter(pessoa => pessoa.id !== id);
            setPeoples(listaAtualizada);
        })
        .catch(error => console.error(error));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Pessoas</Text>
            
            <FlatList 
                data={peoples} 
                keyExtractor={(item) => item.id.toString()} 
                renderItem={({ item }) => (
                    <>
                        <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => navigation.navigate('AddEditScreen', { peoplesId: item.id })}
                        >
                            <View style={styles.item}>
                                <Text>{item.firstname} {item.lastname}</Text>
                                <Text>{item.email}</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => handleDelete(item.id)}>
                            <Text style={{color: 'red'}}>Deletar</Text>
                        </TouchableOpacity>
                    </>
                )} 
            />

            

            <TouchableOpacity onPress={() => navigation.navigate('AddEditScreen')}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}> 
                        Adicionar Pessoa
                    </Text>
                </View>
            </TouchableOpacity>

        </View>
    );
} 