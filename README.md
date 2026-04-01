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

### 3. Instalação do LocalTunnel e como liga-lo

- ### Abra um novo terminal
- ```
  ctrl + shift + '
  ```

- ### Instale o LocalTunnel
- ```
  npm install -g localtunnel
  ```

- ### Inicialize o Localtunnel
- ```
  lt --port 3000
  ```

- Atenção: Copie o endereço gerado pelo Localtunnel (ex: https://...loca.lt) e atualize a variável baseURL no seu arquivo de serviço (peopleCrud.js ou api.js) dentro da pasta frontend.

### 4. Inicialização do APP Mobile

- ### Volte ao terminal que voce instalou as dependências

- ### Inicialize o APP com Localtunnel
- ```
  npx expo start --tunnel
  ```
  Escaneie o código QR gerado cdom seu celular

## 💡 Explicação da Solução
O projeto foi desenvolvido focando na estabilidade das operações básicas e na experiência do usuário em redes restritas:

- ### Validação de Formulários:
- Na AddEditScreen, foi implementada uma verificação de campos obrigatórios utilizando o método .trim() para evitar o cadastro de strings vazias, interrompendo o fluxo imediatamente com um alert e return.

- ### Gerenciamento de Lista:
- O filtro de busca utiliza os métodos .filter() e .toLowerCase() diretamente no estado people, proporcionando uma busca instantânea no lado do cliente (client-side), sem causar latência ou sobrecarregar a rede com novas requisições.

- ### Consumo de API:
- A comunicação com o servidor foi centralizada em funções assíncronas (async/await) protegidas por blocos try/catch para capturar erros de rede e evitar que a aplicação encerre inesperadamente.

- ### Navegação:
- A chamada de navigation.goBack() automatiza o retorno do usuário para a lista principal após salvar os dados. Em conjunto, o uso do hook useFocusEffect na tela principal garante que a lista de pessoas puxe os dados frescos da API automaticamente assim que a tela ganha foco novamente.

  ## Desenvolvido por: Jucagio1

  ## Instituição: ETEC

  ## Ano: 2026
