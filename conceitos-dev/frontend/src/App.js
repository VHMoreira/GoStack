import React, { useState, useEffect } from "react";
import api from './services/api';
import Header from "./Components/Header";
import './App.css'
import backgroundImage from './assets/setup.jpg';

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects')
            .then(response => {
                setProjects(response.data);
            });
    }, []);

    async function handleAddProject() {
        const project = await api.post('/projects', {
            title: `Project -> ${Date.now()}`,
            owner: "Vitor Henrique"
        });

        setProjects([...projects, project.data]);

        // setProjects([...projects, `Project -> ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Projects" />
            <ul>
                {projects.map((project) => <li key={project.id}> {project.title} </li>)}
            </ul>
            <button type='button' onClick={() => handleAddProject()}>Adicionar Projeto</button>
        </>
    );
}

export default App;