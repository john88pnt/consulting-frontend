import { useState, useEffect } from "react";
import "./App.css";
import hero from "./assets/hero.jpg"; // import hero din src/assets

function App() {
    const [projects, setProjects] = useState([]);
    const [view, setView] = useState("home"); // home / projects / contact

    useEffect(() => {
        fetch("http://localhost:5000/projects") // sau URL backend live
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <div
                className="hero"
                style={{
                    backgroundImage: `url(${hero})`,
                }}
            >
                <h1>Consult Robotics</h1>
                <p>
                    Servicii de consultanță în integrare și programare roboți industriali
                    KUKA și ABB
                </p>
                <nav>
                    <button onClick={() => setView("projects")}>Proiecte</button>
                    <button onClick={() => setView("contact")}>Contact</button>
                </nav>
            </div>

            {view === "projects" && (
                <div className="projects-container">
                    {projects.map((p, index) => (
                        <div key={index} className="project-card">
                            <img src={p.image} alt={p.title} />
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <p>{p.longDescription}</p>
                        </div>
                    ))}
                </div>
            )}

            {view === "contact" && (
                <div className="contact-section">
                    <h2>Contact</h2>
                    <p>Email: pantea.ionut@yahoo.com</p>
                    <p>Telefon: 0746928120</p>
                    <p>Locație: Bistrița</p>
                </div>
            )}
        </div>
    );
}

export default App;
