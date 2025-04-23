# Sistema CRUD de estudantes

API RESTful de um sistema CRUD para estudantes

## Tecnologias:

* Node.js
* Express
* MongoDB
* Mongoose

## Funções:

1. Mostra estudantes
2. Criar estudantes
3. Atualizar estudantes
4. Deletar estudantes
5. Buscar estudantes

## Endpoints:

 Estudantes(/estudantes)

GET /estudantes → Mostra os estudantes

POST /estudantes → Cria um estudante

PUT /estudantes/:id → Atualiza um estudante

DELETE /estudantes/:id → Deleta um estudante

GET /estudantes/busca?nome=mascedo → Busca um estudante por nome

## Modelos:

 Estudante
```
 {
    nome: String,
    matricula: String,
    curso: String,
    ano: String
 }
```
## Licença

Este projeto está licenciado sob a Licença MIT.  
Veja o arquivo [LICENSE](./LICENSE) para mais informações.
