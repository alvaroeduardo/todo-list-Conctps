
# Todo List - Conctps

Desafio técnico para a vaga de dev na Conctps.
## Iniciando a aplicação

Inicialmente você precisará ter o MySQL instalado em sua máquina e precisará criar um novo db com o nome de `todolist`
Para rodar esse projeto, você vai precisar rodar esses comando no seu terminal.Cancel changes

Primeiro clone o repositório: `https://github.com/alvaroeduardo/todo-list-Conctps.git`

Após isso entre em ambas as pastas "front-end" e "backEnd"
`npm install` ou `yarn dev`

Após a instalação das dependências, abra a pasta "backEnd" entre no diretório "/config/database.ts" e em mysql troque todos os dados pelos seus da sua máquina local.

Após isto, salve e rode esse comando no terminal `node ace migration:run`

Depois inicie a aplicação com `yarn dev`

Abra a pasta front-end e inicie com `yarn dev`
## Stack utilizada

**Front-end:** NextJS, React, ChakraUI, Axios, date-fns, Typescript

**Back-end:** AdonisJS, MySQL, Typescript
