import React, { useEffect, useState } from "react";
import "./App.css";
import hero from "./assets/hero.jpg";

function App() {
    const [projects, setProjects] = useState([]);
    const [activeSection, setActiveSection] = useState("projects");
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        fetch("https://consulting-backend-oqzo.onrender.com/projects")
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="App">
            <header className="hero">
                <h1>Consult Robotics</h1>
                <p>Consultanță și integrare roboți industriali KUKA și ABB</p>
            </header>

            <nav className="menu">
                <button onClick={() => setActiveSection("projects")}>Proiecte</button>
                <button onClick={() => setActiveSection("services")}>Servicii</button>
                <button onClick={() => setActiveSection("contact")}>Contact</button>
            </nav>

            <main>
                {activeSection === "projects" && (
                    <div className="projects">
                        {projects.map((p, index) => (
                            <div className="project-card" key={index}>
                                <img src={p.image} alt={p.title} />
                                <h3>{p.title}</h3>
                                <p>{p.description}</p>
                                <button onClick={() => setSelectedProject(p)}>Detalii</button>
                            </div>
                        ))}
                    </div>
                )}

                {selectedProject && (
                    <div className="modal" onClick={() => setSelectedProject(null)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.longDescription}</p>
                            <button onClick={() => setSelectedProject(null)}>Închide</button>
                        </div>
                    </div>
                )}

                {activeSection === "services" && (
                    <div className="services">
                        <h2>Servicii Consult Robotics</h2>
                        <p>
                            Oferim servicii de consultanță în integrare și programare roboți
                            industriali KUKA și ABB. Soluții personalizate pentru optimizarea
                            proceselor industriale și creșterea productivității.
                        </p>
                    </div>
                )}

                {activeSection === "contact" && (
                    <div className="contact">
                        <h2>Contact</h2>
                        <p>Email: pantea.ionut@yahoo.com</p>
                        <p>Telefon: 0746 928 120</p>
                        <p>Locație: Bistrița</p>
                    </div>
                )}
            </main>

            <footer>
                <p>© 2025 Consult Robotics</p>
            </footer>
        </div>
    );
}

export default App;
