import React, { useState } from "react";
import Header from "./Components/Header";
import './App.css'
import backgroundImage from './assets/setup.jpg';

function App() {
    const [projects, setProjects] = useState([
        "Desenvolvimento de app",
        "Frontend web",
    ]);

    function handleAddProject() {
        setProjects([...projects, `Project -> ${Date.now()}`]);
    }

    return (
        <>
            <Header title="Projects" />
            <img src={backgroundImage} width={300} />
            <ul>
                {projects.map((project, index) => <li key={index}> {project} </li>)}
            </ul>
            <button type='button' onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;