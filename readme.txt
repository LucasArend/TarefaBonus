# 🧠 Exercícios de Lógica em JavaScript

Este projeto contém **50 exercícios de lógica de programação** resolvidos em **JavaScript**, cada um em seu próprio arquivo, e um **menu interativo** que permite ao usuário escolher qual exercício executar diretamente pelo terminal.

---

## 🚀 Funcionalidades

* 📂 Cada exercício está em um arquivo separado dentro da pasta `exercicios/`
* 🧩 Menu interativo para escolher e executar qualquer exercício
* 💬 Entrada de dados feita via terminal (usando `prompt-sync`)
* 🔁 Retorno e reexecução simples após cada exercício

---

## 📁 Estrutura do Projeto

```
📦 projeto-exercicios-js
├── menu.js
├── package.json
└── README.md
```

---

## ⚙️ Pré-requisitos

Antes de executar o projeto, você precisa ter instalado:

* [Node.js](https://nodejs.org/) (versão 16 ou superior)
* npm (vem junto com o Node)

---

## 🧩 Instalação

1. **Clone este repositório:**

   ```bash
   git clone https://github.com/SEU_USUARIO/projeto-exercicios-js.git
   ```

2. **Entre na pasta do projeto:**

   ```bash
   cd projeto-exercicios-js
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

   *(O projeto utiliza apenas a dependência `prompt-sync` para leitura de dados via terminal.)*

---

## ▶️ Como Executar

1. **Inicie o menu principal:**

   ```bash
   node menu.js
   ```

2. **Escolha o exercício desejado:**

   * O menu exibirá uma lista numerada de 1 a 50.
   * Digite o número do exercício e pressione **Enter**.

3. **Exemplo:**

   ```
   === MENU DE EXERCÍCIOS ===
   1. Redução de tempo de vida de um fumante
   2. Multa por excesso de velocidade
   3. Preço da passagem por distância
   ...
   Escolha um exercício: 5
   ```

   O programa executará o exercício 5 (Jogo de Pedra, Papel e Tesoura).

4. **Após o término do exercício, o menu perguntará se você deseja continuar ou sair.**

---

## 🧰 Scripts npm (opcional)

Você também pode configurar scripts no `package.json` para facilitar a execução:

```json
"scripts": {
  "start": "node menu.js"
}
```

Assim, basta rodar:

```bash
npm start
```

---

## 💡 Dica para Desenvolvedores

Se quiser testar um exercício específico sem usar o menu, execute diretamente:

```bash
node exercicios/exercicio10.js
```

---

## 🧑‍💻 Autor

Desenvolvido por **Lucas Arend Maciel**

📧 [Entre em contato comigo no GitHub](https://github.com/SEU_USUARIO)

---

## 📜 Licença

Este projeto é de livre uso para fins educacionais.
Sinta-se à vontade para clonar, estudar e modificar os exercícios.
