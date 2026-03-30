import React, { useEffect, useState, useCallback } from "react";
import { View, Text, FlatList, Button, TextInput } from "react-native";
import CardPersonal from "../components/CardPersonal";
import { useFocusEffect } from "@react-navigation/native";

import styles from "../styles/styles";

import { getPeople, deletePerson } from "../servers/peopleCrud.js";
export default function HomeScreen({ navigation }) {

    //estado da lista 
    const [people, setPeople] = useState([]);
    
    //estado do campo de busca
    const [search, setSearch] = useState(""); // usestate vazio para o campo de busca
    const lowerSearch = search.toLowerCase(); // converte o texto de busca para minúsculo
    const filteredPeople = people
    .filter((person) => person.firstName.toLowerCase().includes(lowerSearch)); //filtra a lista de pessoas com base no campo de busca

    //função pra carregar dados
    async function loadPeople(){
      try {

        const data = await getPeople();
        

            setPeople(data || []); 
            console.log("Dados carregados com sucesso!");
        } catch (error) {
            console.error("Erro na conexão:", error.message);
            setPeople([]); 
        }
    }

    //função para recarregar os dados quando a tela for focada
    useFocusEffect(
        useCallback(() => {
            loadPeople();
        }, [])
    );

        //executa ao abrir a tela
        useEffect(() =>{
            loadPeople();
        },[]);

        return(

            <View style={styles.container}>

                <Text style={styles.title}>Pessoas</Text>

                <Button
                  title="Adicionar Pessoa"
                  onPress={()=> navigation.navigate("AddEdit")}
                />

                <TextInput
                style={styles.inputBusca}
                  placeholder="Buscar pessoa..."
                  value={search}
                  onChangeText={(text) => setSearch(text)}
                />

                <FlatList
                  data={filteredPeople}
                  keyExtractor={(item)=>item.id.toString()}

                  renderItem={({item})=>(
                    <CardPersonal
                      item={item}
                      navigation={navigation}
                      refresh={loadPeople}
                    />
                  )}
                />

            </View>
        );
}

