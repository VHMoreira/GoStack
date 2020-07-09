# Desafio: Conceitos do Node.js
Neste desafio foi proposto a criação de uma aplicação com Node.js 
para possibilitar a criação, edição, listagem e deleção de repositŕios.
Além disso também foi proposto a implementação de uma rota para os repositorios
receberem likes.
## Conceitos utilizados:
- Conceitos de API REST
- Métodos HTTP
- Conceitos iniciais do Node.js
## Técnologias Utilizadas
- Node.js
- Yarn
- Nodemon
- Express
## Rotas da Aplicação

### Listagem de Repositórios
```
app.get("/repositories", (request, response) => {
    return response.json(repositories);
});

```

### Cadastro de repositório
```
app.post("/repositories", (request, response) => {
    const { title, url, techs } = request.body;

    const repository = {
        id: uuid(),
        title,
        url,
        techs,
        likes: 0
    }

    repositories.push(repository);

    return response.json(repository);
});

```

### Atualização de Repositório
```
app.put("/repositories/:id", (request, response) => {
    const { id } = request.params;
    const { title, url, techs } = request.body;

    const repoIndex = repositories.findIndex(repo => repo.id === id);

    if (repoIndex < 0) {
        return response.status(400).json({ error: "Repository not found" });
    }

    const repository = {
        ...repositories[repoIndex],
        title,
        url,
        techs,
    }

    repositories[repoIndex] = repository;

    return response.status(200).json(repository);
});

```

### Deleção de Repositório
```
app.delete("/repositories/:id", (request, response) => {
    const { id } = request.params;

    const repoIndex = repositories.findIndex(repo => repo.id === id);

    if (repoIndex < 0) {
        return response.status(400).json({ error: "Repository not found" });
    }

    repositories.splice(repoIndex, 1);

    return response.status(204).send();
});

```

### Dar likes em Repositórios
```
app.post("/repositories/:id/like", (request, response) => {
    const { id } = request.params;

    const repoIndex = repositories.findIndex(repo => repo.id === id);

    if (repoIndex < 0) {
        return response.status(400).json({ error: "Repository not found" });
    }

    const repository = {
        ...repositories[repoIndex],
        likes: repositories[repoIndex]['likes'] + 1,
    }

    repositories[repoIndex] = repository;

    return response.status(200).json(repository);
    // TODO
});


```

## Modo de instalação
1. No seu terminal, dentro de uma pasta de sua preferência, digite:
> git clone https://github.com/VHMoreira/desafio-gostack-01

2. Aguarde o download do repositório, depois entre na pasta pelo terminal e digite
> yarn

Isso vai baixar todas as dependencias utilizadas

3. Após baixar as dependências, digite:
> yarn dev

E pronto! O servidor ja está rodando

4. (OPCIONAL) Caso queira rodar os testes, digite:
> yarn test
