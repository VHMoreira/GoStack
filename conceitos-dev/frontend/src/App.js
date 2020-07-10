import React, { useState } from "react";
import Header from "./Components/Header";

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
            <ul>
                {projects.map((project, index) => <li key={index}> {project} </li>)}
            </ul>
            <button type='button' onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;