import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [view, setView] = useState("home");
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleShowProjects = () => {
        setView("projects");
        setLoading(true);

        fetch("https://consulting-backend-oqzo.onrender.com/api/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Eroare la preluarea proiectelor:", err))
            .finally(() => setLoading(false));
    };

    return (
        <div className="App">
            {view === "home" && (
                <div className="hero">
                    <div className="hero-content">
                        <h1>Consultanță în integrare și programare roboți industriali KUKA și ABB</h1>
                        <div className="buttons">
                            <button onClick={handleShowProjects}>Proiecte</button>
                            <button>Servicii</button>
                            <button>Contact</button>
                        </div>
                    </div>
                </div>
            )}

            {view === "projects" && (
                <div className="projects">
                    <h2>Proiectele noastre</h2>
                    {loading ? (
                        <p className="loading-text">Se încarcă proiectele...</p>
                    ) : (
                        <div className="project-list">
                            {projects.map((project) => (
                                <div key={project.id} className="project-card">
                                    <img src={project.image} alt={project.title} />
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
