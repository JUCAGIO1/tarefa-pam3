echo "# 📱 Projeto People Management - CRUD Mobile

Este projeto é um aplicativo mobile desenvolvido para a disciplina de **PAM II** (Programação de Aplicativos Móveis II). O sistema permite o gerenciamento completo de registros de pessoas (Criar, Listar, Filtrar, Editar e Excluir) integrados a um servidor backend.

---

## 📝 Descrição do Projeto
O objetivo principal foi criar uma interface funcional para manipulação de dados em tempo real. O aplicativo resolve a necessidade de organizar contatos através de uma listagem dinâmica e um sistema de busca eficiente.

**Destaques da solução:**
- **Filtro em Tempo Real:** Busca instantânea por nome utilizando manipulação de strings.
- **Navegação Intuitiva:** Fluxo direto entre a listagem principal e as telas de cadastro/edição.
- **Integração com API:** Comunicação total com banco de dados via Axios.

---

## 🛠️ Tecnologias Utilizadas
* **React Native / Expo**: Framework de desenvolvimento.
* **JavaScript (ES6+)**: Linguagem de programação.
* **Axios**: Biblioteca para requisições HTTP.
* **JSON Server**: Simulação de backend REST.
* **Localtunnel**: Ferramenta para conexão entre o PC e o celular.

---

## ⚙️ Instalação
Siga os comandos abaixo no terminal para preparar o ambiente:
1. **Instalar as dependências:** \`npm install\`
2. **Ferramentas globais:** \`npm install -g json-server localtunnel\`

---

## 🚀 Execução
Para rodar o projeto na escola:
1. **Backend:** \`json-server --watch db.json --port 3000\`
2. **Túnel:** \`lt --port 3000\`
3. **Mobile:** \`npx expo start --tunnel\`

---

## 💡 Explicação da Solução
* **Componentização:** Uso de componentes personalizados para os cards.
* **Lógica de Busca:** Filtro com \`.filter()\` e \`.toLowerCase()\` para performance local.
* **Sincronização:** Uso de \`useFocusEffect\` para atualizar a lista ao voltar para a Home.

---
**Desenvolvido por:** Jucagio1
**Instituição:** ETEC | 2026" > README.md && git add README.md && git commit -m "Adicionando documentação README" && git push
