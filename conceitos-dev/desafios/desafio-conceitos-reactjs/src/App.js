import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(res => {
      setRepositories(res.data);
    });
  }, []);

  async function handleAddRepository() {
    const res = await api.post('/repositories', {
        "title":`Repoteste ${ Date.now() }`,
        "url":"http://repoteste.com/repoteste",
        "techs":"Node.js"
    });

    setRepositories([...repositories, res.data]);
  }

  async function handleRemoveRepository(id) {
    const res = await api.delete(`/repositories/${id}`);
    
    if(res.status === 204){
      const repos = repositories.filter(repository => repository.id !== id);
      setRepositories(repos);
    }else{
      alert(`Não foi possível realizar a deleção. ERROR_CODE: ${res.status}`);
    }
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repo => {
          return (
            <li key={repo.id}>
              {repo.title}

              <button onClick={() => handleRemoveRepository(repo.id)}>
                Remover
              </button>
            </li>
          );
        })}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
