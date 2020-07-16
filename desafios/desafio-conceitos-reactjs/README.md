# Desafio: Conceitos do ReactJS
Neste desafio foi proposto a criação do frontend da aplicação anterior para exibir, cadastrar e excluir repositórios
> Desafio anterior: https://github.com/VHMoreira/desafio-gostack-01
## Conceitos utilizados:
- Consumo de API
- Requisições HTTP
- Gerenciamento de estado
- JSX
## Técnologias Utilizadas
- ReactJS
- Yarn
- Axios
## Ações da aplicação

### Listagem de Repositórios
```
  useEffect(() => {
    api.get('/repositories').then(res => {
      setRepositories(res.data);
    });
  }, []);

```

### Cadastro de repositório
```
  async function handleAddRepository() {
    const res = await api.post('/repositories', {
        "title":`Repoteste ${ Date.now() }`,
        "url":"http://repoteste.com/repoteste",
        "techs":"Node.js"
    });

    setRepositories([...repositories, res.data]);
  }

```

### Deleção de Repositório
```
  async function handleRemoveRepository(id) {
    const res = await api.delete(`/repositories/${id}`);
    
    if(res.status === 204){
      const repos = repositories.filter(repository => repository.id !== id);
      setRepositories(repos);
    }else{
      alert(`Não foi possível realizar a deleção. ERROR_CODE: ${res.status}`);
    }
  }

```

## Modo de instalação
1. No seu terminal, dentro de uma pasta de sua preferência, digite:
> git clone https://github.com/VHMoreira/desafio-gostack-02

2. Aguarde o download do repositório, depois entre na pasta pelo terminal e digite
> yarn 

Isso vai baixar todas as dependencias utilizadas

3. Após baixar as dependências, digite:
> yarn dev

E pronto! O servidor ja está rodando

4. (OPCIONAL) Caso queira rodar os testes, digite:
> yarn test
