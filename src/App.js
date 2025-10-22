import React, { useState, useEffect } from "react";
import "./App.css";
import hero from "./assets/hero.jpg";

function App() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const fetchProjects = async () => {
        setLoading(true);
        try {
            const response = await fetch("https://consulting-backend-oqzo.onrender.com/projects");
            const data = await response.json();
            setProjects(data);
        } catch (err) {
            console.error("Error fetching projects:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            {/* Hero Section */}
            <header className="hero" style={{ backgroundImage: `url(${hero})` }}>
                <div className="overlay">
                    <h1>Consultanță în integrare și programare roboți industriali KUKA și ABB</h1>
                    <div className="buttons">
                        <button onClick={fetchProjects}>Proiecte</button>
                        <button onClick={() => alert("Servicii B2B: integrare și programare roboți KUKA și ABB")}>Servicii</button>
                        <button onClick={() => alert("Contact: pantea.ionut@yahoo.com | Bistrița | 0746928120")}>Contact</button>
                    </div>
                </div>
            </header>

            {/* Loading message */}
            {loading && <p className="loading">Se încarcă proiectele...</p>}

            {/* Projects Grid */}
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.title} className="project-card">
                        <img src={`https://consulting-backend-oqzo.onrender.com${project.image}`} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <button onClick={() => setSelectedProject(project)}>Detalii</button>
                    </div>
                ))}
            </div>

            {/* Modal for project details */}
            {selectedProject && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.longDescription}</p>
                        <button className="close-btn" onClick={() => setSelectedProject(null)}>Închide</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
