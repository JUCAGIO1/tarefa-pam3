import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

import styles from "../styles/styles";

import { createPerson, updatePerson } from "../servers/peopleCrud";

export default function AddEditScreen({ route, navigation }) {
  const person = route.params?.person;

  const [firstName, setFirstName] = useState(person?.firstName || "");
  const [lastName, setLastName] = useState(person?.lastName || "");
  const [email, setEmail] = useState(person?.email || "");
  const [phone, setPhone] = useState(person?.phone || "");

  async function save() {
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    } 
      
    const data = { firstName, lastName, email, phone };
      
    try {
      if (person) {
        await updatePerson(person.id, data);
      } else {
        await createPerson(data);
      }

      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert("Erro", "Ocorreu um erro ao salvar a pessoa. Por favor, tente novamente.");
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
      />

      <TextInput
      placeholder="Phone"
      value={phone}
      onChangeText={setPhone}
      />

      <Button title="Salvar" onPress={save} />

      <Button title="Cancelar" onPress={() => navigation.goBack()} />
    </View>
  );
}