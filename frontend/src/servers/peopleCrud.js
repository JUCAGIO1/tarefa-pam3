import { API_URL } from "./configApi.js";

// Função para obter a lista de pessoas
export async function getPeople() {

    //GET
    const response = await fetch (`${API_URL}/people`);

    //Convertendo resposta para JSON
    const data = await response.json();

    // retorna a lista
    return data;
}

//Função para adicionar uma nova pessoa

export async function createPerson(person) {
    const response = await fetch(`${API_URL}/people`, {
        method: "POST", //método HTTP
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person) //transforma objeto em JSON
    });
    return response.json();
}

//Função para atualizar uma pessoa existente
export async function updatePerson(id, person) {
    const response = await fetch(`${API_URL}/people/${id}`, {
        method: "PUT", //método HTTP
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(person) //transforma objeto em JSON
    });
    return response.json();
}

//Função para deletar uma pessoa
export async function deletePerson(id) {
    const response = await fetch(`${API_URL}/people/${id}`, {
        method: "DELETE" //método HTTP
    });
    return response.ok; //retorna true se a resposta for bem-sucedida
}