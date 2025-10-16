import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [projects, setProjects] = useState([]);
    const [showProjects, setShowProjects] = useState(false);

    useEffect(() => {
        fetch("https://consultrobotics-backend.onrender.com/projects")

            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="App">
            <header className="hero">
                <h1>Consult Robotics</h1>
                <p>Consultanță și integrare roboți industriali ABB și KUKA</p>
            </header>

            <nav className="menu">
                <button onClick={() => setShowProjects(!showProjects)}>Proiecte</button>
                <button onClick={() => alert("Oferim servicii B2B în integrare și programare roboți industriali ABB și KUKA")}>Servicii</button>
                <button onClick={() => alert("Contact: pantea.ionut@yahoo.com | Bistrița | 0746928120")}>Contact</button>
            </nav>

            {showProjects && (
                <section className="projects">
                    {projects.map((p, idx) => (
                        <div className="project" key={idx}>
                            <img src={p.image} alt={p.title} />
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <details>
                                <summary>Detalii</summary>
                                <p>{p.longDescription}</p>
                            </details>
                        </div>
                    ))}
                </section>
            )}
        </div>
    );
}

export default App;
