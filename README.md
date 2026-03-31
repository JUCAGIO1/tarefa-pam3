# 📱 People Management System - React Native CRUD

Este repositório contém uma aplicação mobile robusta desenvolvida em **React Native** com o ecossistema **Expo**. O projeto implementa um ciclo completo de **CRUD** (Create, Read, Update, Delete) integrado a uma API REST simulada via JSON Server.

---

## 📝 Descrição Técnica
A arquitetura do projeto foi estruturada para separar a lógica de consumo de dados da interface do usuário (UI), garantindo facilidade na manutenção e escalabilidade.

**Destaques da Implementação:**
- **Filtro de Busca Local:** Algoritmo de filtragem reativo implementado na `HomeScreen` para busca instantânea.
- **Sincronização de Ciclo de Vida:** Uso de `useFocusEffect` para garantir que a lista de contatos seja revalidada sempre que o usuário retornar à tela principal.
- **Persistência de Dados:** Camada de serviço isolada em `peopleCrud.js` utilizando Axios para operações assíncronas.
- **Navegação em Pilha:** Implementação de `Stack Navigation` para transição entre visualização e formulário.

---

## 🛠️ Stack Tecnológica
* **Framework:** React Native & Expo
* **Linguagem:** JavaScript ES6+
* **Comunicação HTTP:** Axios
* **Backend Simulado:** JSON Server
* **Networking:** Localtunnel (Exposição de Porta)

---

## ⚙️ Guia de Instalação e Execução

Para garantir o funcionamento correto do ecossistema (Mobile + API), siga rigorosamente a ordem dos procedimentos abaixo:

### 1. Preparação do Ambiente
Abra o terminal no diretório raiz do seu projeto e entre na pasta de Frontend para realizar a instalação das dependências listadas no `package.json`:

- ### Entre na pasta de frontend
  ```bash
  cd frontend
  ```

- ### Instale as dependências
  ```bash
  npm install
  ```

### 2. Instalação do Json-Server e Inicialização

 - ### Abra um novo terminal
 - ```
   ctrl + shift + '
   ```

- ### Entre na pasta do backend
- ```
  cd backend
  ```

- ### Instale o Json-Server
- ```
  npm i -g json-server
  ```

- ### Inicializando o Json-Server
- ```
  json-server --watch db.json --port 3000
  ```
